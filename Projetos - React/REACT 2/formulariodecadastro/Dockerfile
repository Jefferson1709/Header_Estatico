FROM node:latest
LABEL maintainer="jefferson1709"
ENV NODE_ENV=development
COPY . /var/www
WORKDIR /var/www
RUN npm install @material-ui/core
RUN npm install fontsource-roboto
RUN npm audit fix
RUN npm install 
ENTRYPOINT ["npm", "start"]
