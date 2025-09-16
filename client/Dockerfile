# Build stage
FROM node:18 AS build

WORKDIR /app

COPY package.json ./
COPY vite.config.ts ./
COPY tsconfig.json ./
COPY tsconfig.app.json ./
COPY tsconfig.node.json ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY index.html ./ 
COPY ./src ./src
COPY ./public ./public

RUN npm install
RUN npm run build

# Sử dụng nginx để serve file tĩnh
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

