pipeline {
    agent any

    environment {
        version = '1.0.1'
    }

    stages {
        stage("build") {
            steps {
                echo 'building the application...'
                echo "application version ${version}"
                sh 'docker login registry.digitalocean.com'
                sh 'doctl registry repo list-v2'
            }
        }

        stage("test") {
            steps {
                echo 'testing the application...'    
            }
        }

        stage("deploy") {
            steps {
                echo 'deploying the application...'
            }
        }
    }

}