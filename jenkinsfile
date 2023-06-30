pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                // Run Maven build
                sh 'mvn clean package'
            }
        }
        
        stage('Test') {
            steps {
                // Run Maven tests
                sh 'mvn test'
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
    
    post {
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}
