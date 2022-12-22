FROM node:16.18.0

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install --silent

COPY . . 

RUN yarn build

CMD ["yarn", "run", "dev"]

EXPOSE 3000