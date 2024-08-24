# Build Commands (make sure to change tag version 1.x etc., and make sure at project root to issue command)
# docker build -t capstone-frontend:1.2 .                       
# docker run -p 3700:3700 --rm --name capstone-frontend capstone-frontend:1.2

# Dockerfile
FROM node:16-alpine

ENV API_BASE_URL='http://helpmybabies.com:5000/api/v1' 
ENV API_AUTH_URL='http://helpmybabies.com:5400/api/v1' 

# Nuxt has some quirks that doesn't allow outside to reach localhost
# So need to use special variable to set host and port 
# https://jonathanmh.com/deploying-a-nuxt-js-app-with-docker/
# https://github.com/nuxt/nuxt/issues/3609 
ENV NUXT_HOST=0.0.0.0 
ENV NUXT_PORT=3700

# create destination directory
RUN mkdir -p /home/app
COPY . /home/app

# set default dir so that next commands executes in /home/app dir
WORKDIR /home/app

# will execute npm install in /home/app because of WORKDIR
RUN npm install

# expose 3700 on container
EXPOSE 3700

CMD [ "npm", "run", "dev" ]