FROM node:20-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Development stage (with nodemon + ts-node)
FROM base AS dev
RUN npm install --save-dev nodemon ts-node typescript @types/node
COPY . .
CMD ["npm", "run", "dev"]

# Production stage (runs compiled JS)
FROM base AS prod
ENV NODE_ENV=production
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["node", "dist/server.js"]
