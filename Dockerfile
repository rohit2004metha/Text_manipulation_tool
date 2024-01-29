
FROM node:16-alpine
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=0 /usr/src/app/build /usr/share/nginx/html

EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]
