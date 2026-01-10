FROM node:lts-alpine AS build
WORKDIR /app
COPY package.json ./
# Use npm install instead of ci since lockfile might not exist yet
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build /app/dist .
# Copy nginx config template
COPY nginx.conf /etc/nginx/nginx.conf.template

# Use PORT from Railway (default to 80 for local testing)
ENV PORT=80
EXPOSE ${PORT}

# Substitute PORT variable at runtime and start nginx
CMD ["/bin/sh", "-c", "envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]
