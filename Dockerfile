FROM node:22-alpine

LABEL maintainer="Diego Souza <diegosouzapw@gmail.com>"
LABEL description="Mobile remote control for Antigravity AI sessions"
LABEL org.opencontainers.image.source="https://github.com/diegosouzapw/OmniAntigravityRemoteChat"

WORKDIR /app

# Copy package files first for layer caching
COPY package.json package-lock.json ./

# Install production deps only
RUN npm ci --omit=dev

# Copy app source
COPY src/ ./src/
COPY public/ ./public/
COPY launcher.js ./
COPY .env.example ./.env.example

# Default port
ENV PORT=4747
ENV APP_PASSWORD=antigravity

EXPOSE 4747

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:${PORT}/ssl-status || exit 1

CMD ["node", "src/server.js"]
