# -----------------------------
# Starta utvecklingsmiljö
# docker compose up dev
#
# Bygg och kör produktion
# docker compose up --build prod
#
# Kör test
# docker compose run --rm test
# -----------------------------

# -----------------------------
# Base image
# -----------------------------
FROM node:24-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# -----------------------------
# Dependencies stage
# -----------------------------
FROM base AS deps
RUN corepack enable && corepack prepare pnpm@10.33.2 --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# -----------------------------
# Build stage
# -----------------------------
FROM base AS build
RUN corepack enable && corepack prepare pnpm@10.33.2 --activate
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# -----------------------------
# Production runtime
# -----------------------------
FROM base AS prod
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
USER nextjs

COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 3000
CMD ["pnpm", "start"]