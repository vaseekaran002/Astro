FROM node:latest

WORKDIR /usr/src/client

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["sh" ,"-c","npm run serve" ]




   