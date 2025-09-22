# --------------------
# Base stage (dependencies)
FROM node:20-alpine AS base
WORKDIR /usr/src/app/core
COPY package*.json ./
RUN npm install

# --------------------
# Builder stage (compile TypeScript)
FROM base AS builder
WORKDIR /usr/src/app/core
COPY . .
RUN npm run build    # runs "tsc" via package.json script

# --------------------
# Production stage
FROM node:20-alpine AS prod
WORKDIR /usr/src/app/core
COPY package*.json ./
RUN npm install --production

# Copy compiled JS from builder
COPY --from=builder /usr/src/app/core/dist ./dist

EXPOSE 3001
CMD ["node", "dist/server.js"]

# --------------------
# Development stage (optional)
FROM base AS dev
WORKDIR /usr/src/app/core
COPY . .
CMD ["npm", "run", "dev"]
