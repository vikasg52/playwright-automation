pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from GitHub
                git 'git@github.com:vikasg52/playwright-automation.git'
            }
        }
        
        stage('Build and Test') {
            steps {
                // Run Maven build and tests
                bat 'mvn clean test'
            }
        }
        
        stage('Publish Test Results') {
            steps {
                // Publish test results to Jenkins
                junit '**/target/surefire-reports/*.xml'
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                // Archive the built artifacts
                archiveArtifacts 'target/**/*.jar'
            }
        }
    }
}
