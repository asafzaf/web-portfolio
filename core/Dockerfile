FROM node:20-alpine AS base
WORKDIR /usr/src/app/core
COPY package*.json ./

# Install ALL deps (needed for build)
RUN npm install

# --------------------
# Development stage
FROM base AS dev
WORKDIR /usr/src/app/core
COPY . ..
CMD ["npm", "run", "dev"]

# --------------------
# Production stage
FROM base AS prod
WORKDIR /usr/src/app/core
ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --only=production

# Copy all source
COPY . .

# Build TypeScript
RUN npm npx tsc

EXPOSE 3001

CMD ["node", "dist/server.js"]
