pipeline {
    agent any
    environment {
        version = '1.5'
    }

    stages {
        stage("login") {
            steps {
                echo 'authenticating into jenkins server...'
                sh 'docker login registry.digitalocean.com'
                
                // note you need to manually add token for capstone-ccsu once 
                // in Jenkins conatiner that is in the droplet
                // Refer to "API" tab in Digital Ocean
                sh 'doctl auth init --context capstone-ccsu'  
            }
        }

        stage("build") {
            steps {
                echo 'building the application...'
                sh 'doctl registry repo list-v2'
                sh "docker build -t capstone-frontend:${version} ."
                sh "docker tag capstone-frontend:${version} registry.digitalocean.com/capstone-ccsu/capstone-frontend:${version}"
                sh "docker push registry.digitalocean.com/capstone-ccsu/capstone-frontend:${version}"
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

                // Use the withCredentials block to access the secret file
                withCredentials([file(credentialsId: website, variable: 'WEBSITE')]) {
                    sh """
                        ssh -i .ssh/website_deploy_rsa_key ${WEBSITE} "docker run -d \
                        -p 80:3700 \
                        --rm \
                        --name capstone-frontend \
                        --network helpmybabies \
                        registry.digitalocean.com/capstone-ccsu/capstone-frontend:${version}"
                    """                    
                }

                sh 'docker ps'
            }
        }
    }

}