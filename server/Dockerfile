FROM node:18

WORKDIR /app

COPY package.json /.
COPY package-lock.json /.
COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]