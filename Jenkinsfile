pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from GitHub
                git 'git@github.com:vikasg52/playwright-automation.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                // Run Node.js tests with Allure Report generation
                sh 'npx playwright test'
            }
        }

          stage('Generate Report') {
            steps {
                sh 'npm run report'
            }
        }
        
        stage('Publish Allure Report') {
            steps {
                // Publish Allure Report to Jenkins
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        }
        
       }
}
