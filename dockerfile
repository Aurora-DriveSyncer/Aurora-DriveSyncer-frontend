FROM node:14.1-alpine AS builder
WORKDIR /code
RUN npm config set registry https://registry.npm.taobao.org
COPY package.json package.lock.json ./
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "run", "start"]
