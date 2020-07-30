pipeline {
   agent any
   tools {
		maven 'maven'
		jdk 'jdk1.8'
    }
   stages {
       stage('Git-Checkout') {
         steps {
            echo 'Checking out from Gitlab Repo'
            git 'https://github.com/bvss1994/HeartiHealthProject.git'
         }
      }
	   stage('Build') {
         steps {
            sh label: '', script: '''sudo su
            cd /home/ubuntu/project/HeartiHealthProject
            npm install --save-dev  --unsafe-perm node-sass
            npm start
            ng serve
            ng build --prod
            ng build
            '''
         }
      }
	  stage('Build docker image and push to docker hub') {
         steps {
            sh label: '', script: '''sudo su
            cd /home/ubuntu/project/HeartiHealthProject
            docker login -u sowmyabv123 -p nov091994
            docker build -t sowmyabv123/Hearti-Health-app .
            docker push sowmyabv123/Hearti-Health-app
            '''
         }
      }
	  
}
}
