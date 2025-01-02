FROM node:20.11.1 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20.11.1
WORKDIR /app
COPY --from=build /app/dist .
RUN npm install -g serve
EXPOSE 5173
CMD ["serve", "-s", ".", "-l", "5173"]