FROM node:latest
LABEL maintainer="jefferson1709"
ENV NODE_ENV=development
COPY . /var/www
WORKDIR /var/www
RUN npm install react-scripts
RUN npm install 
ENTRYPOINT ["npm", "start"]
