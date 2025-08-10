FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

CMD ["node", "build/index.js"]