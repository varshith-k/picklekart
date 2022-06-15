pipeline {
    agent {
        docker {
            image 'node:16.14.2-alpine'
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh "echo 'test here'" 
            }
        }
        stage('Deliver') { 
            steps {
                // sh 'npm start' 
                input message: 'Wanna Deploy? (Click "Proceed" to continue)' 
                // sh 'exit' 
                sh 'firebase deploy'
            }
        }
    }
}