FROM node:18-alpine AS build
WORKDIR /app

# Copy package files (include lockfile for reproducible installs)
COPY package.json package-lock.json ./
# Clean, reproducible install (includes devDependencies for build)
RUN npm ci --no-audit --no-fund

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage with simple static server
FROM node:18-alpine
WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy built files
COPY --from=build /app/dist ./dist

# Use Railway's PORT
ENV PORT=3000
EXPOSE ${PORT}

CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
