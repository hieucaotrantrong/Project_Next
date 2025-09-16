# Sử dụng Node.js image chính thức
FROM node:18

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json
COPY package.json ./
COPY tsconfig.json ./
COPY ./src ./src

# Cài đặt các package
RUN npm install

# Biên dịch TypeScript sang JavaScript
RUN npm run build

# Mở port (ví dụ: 3000)
EXPOSE 3000

# Chạy ứng dụng
CMD ["npm", "start"]