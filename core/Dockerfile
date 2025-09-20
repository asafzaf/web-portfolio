FROM node:20-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./

# Install ALL deps for build
RUN npm install

# --------------------
# Development stage
FROM base AS dev
RUN npm install --save-dev nodemon ts-node typescript @types/node
COPY . .
CMD ["npm", "run", "dev"]

# --------------------
# Build stage
FROM base AS build
COPY . .
RUN npm run build

# --------------------
# Production stage
FROM node:20-alpine AS prod
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Copy only prod deps
COPY package*.json ./
RUN npm install --only=production

# Copy compiled output from build stage
COPY --from=build /usr/src/app/dist ./dist

# If you need other assets (config, views, etc.) copy them too
COPY --from=build /usr/src/app/secrets ./secrets

CMD ["node", "dist/server.js"]
