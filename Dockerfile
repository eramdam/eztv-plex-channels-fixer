FROM node:22-alpine
WORKDIR /app
COPY *.json ./
COPY *.ts ./
RUN npm install
RUN npm run build
COPY . .
EXPOSE 9999
CMD [ "npm", "start" ]