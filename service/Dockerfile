FROM node:latest

WORKDIR /usr/src/service

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["sh" ,"-c","npm start" ]



   