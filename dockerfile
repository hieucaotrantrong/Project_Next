# ============= Build Frontend (React + Vite) =============
FROM node:18 AS frontend-build
WORKDIR /app/client

COPY client/package*.json ./
RUN npm install

COPY client/ ./
RUN npm run build


# ============= Build Backend (Node.js + Express + TS) =============
FROM node:18 AS backend-build
WORKDIR /app/server

COPY server/package*.json ./
RUN npm install

COPY server/ ./
RUN npm run build


# ============= Final Stage =============
FROM node:18
WORKDIR /app

# Copy backend build
COPY --from=backend-build /app/server /app/server

# Copy frontend dist vào backend public
COPY --from=frontend-build /app/client/dist /app/server/public

WORKDIR /app/server

EXPOSE 3000
CMD ["npm", "start"]
