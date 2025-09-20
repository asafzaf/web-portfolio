FROM node:20-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./

# Install ALL deps (needed for build)
RUN npm install

# --------------------
# Development stage
FROM base AS dev
RUN npm install --save-dev nodemon ts-node typescript @types/node
COPY . .
CMD ["npm", "run", "dev"]

# --------------------
# Production stage
FROM base AS prod
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Copy all source
COPY . .

# Build TypeScript
RUN npm run build

# Install only production deps (removes dev deps)
RUN npm ci --only=production

CMD ["node", "dist/server.js"]
