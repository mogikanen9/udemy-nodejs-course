FROM node:16-slim

WORKDIR /app
ADD server.js package.json ./

RUN npm install
CMD node server.js