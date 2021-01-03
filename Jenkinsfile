node {
    stage('Source checkout') {
        git credentialsId: 'ussada-a', url: 'https://github.com/ussada/covid_monitoring.git'
    }

    stage('Build image') {
        sh 'docker build -t covid_monitoring --rm .'
    }
    
    stage('Create container') {
        sh 'docker stop covid_monitoring || true'
        sh 'docker rm covid_monitoring || true'
        sh 'docker run --name covid_monitoring -p 3000:80 -d covid_monitoring'
    }
    
    stage('Clean out') {
        sh 'docker image prune -f'
    }
}