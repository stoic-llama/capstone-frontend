// https://nuxtjs.org/deployments/pm2/

module.exports = {
    apps: [
      {
        name: 'capstone-frontend',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start'
      }
    ]
  }