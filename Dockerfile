# --- BUILD ---
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# --- RUN ---
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

ENV PORT=3001

EXPOSE 3001

CMD ["npm", "start"]
