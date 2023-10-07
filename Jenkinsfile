pipeline {
    agent any

    environment {
        version = '1.5'
    }

    stages {
        stage("build") {
            steps {
                echo 'building the application...'
                sh 'docker login registry.digitalocean.com'
                sh 'doctl auth init --context capstone-ccsu'
                sh 'doctl registry repo list-v2'
                sh "docker build -t capstone-frontend:${version} ."
                sh "docker tag capstone-frontend:${version} registry.digitalocean.com/capstone-ccsu/capstone-frontend:${version}"
                sh "docker push registry.digitalocean.com/capstone-ccsu/capstone-frontend:${version}"
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