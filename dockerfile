FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

# COPY . .

COPY src ./src

COPY tests ./tests

COPY server.js ./

EXPOSE 8080

CMD ["node", "server.js"]

