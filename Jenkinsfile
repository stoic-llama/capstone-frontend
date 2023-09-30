pipeline {
    agent any

    environment {
        version = '1.0.0'
    }

    stages {
        stage("build") {
            steps {
                echo 'building the application...'
                echo "application version ${version}"
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