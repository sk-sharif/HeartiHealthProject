import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { HealthPredictorService } from '../services/health-predictor.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  title = 'appBootstrap';
  
  closeResult: string;
  items;
  checkoutForm; 
  submitted = false;
  isHeartOK: Boolean;


  // @ViewChild('dialog', {static: false}) resultDialog;
  @ViewChild('mymodal') resultDialog;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,
     private healthPredictor: HealthPredictorService) {
    this.checkoutForm = this.formBuilder.group({
      age: ['', Validators.required],
      sex: ['', Validators.required],
      cp: ['', Validators.required],
      trestbps: ['', Validators.required],
      chol: ['', Validators.required],
      fbs: ['', Validators.required],
      restecg: ['', Validators.required],
      thalach: ['', Validators.required],
      exang: ['', Validators.required],
      oldpeak: ['', Validators.required],
      slope: ['', Validators.required],
      ca: ['', Validators.required],
      thal: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log('yo')
     this.healthPredictor.getHeartPredictorResult(this.checkoutForm.value).subscribe((response: any) => {      
      if (response.Status === 200) {
        this.modalService.open(this.resultDialog);
        this.isHeartOK = !!response.Result;
        }
    });

    //this.checkoutForm.reset();
   
    
  }

  ngOnInit() {
  }

}
