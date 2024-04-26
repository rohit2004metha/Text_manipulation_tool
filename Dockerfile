
FROM node:16-alpine AS build
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 5001
CMD ["nginx", "-g", "daemon off;"]


# First Clone The Git Hub repository
# Then On Doker on Backgroun

# Run This Command On Terminal

# Build the Docker image
# docker build -t my-node-nginx-app .

# Run a container with port mapping
# docker run -p 5000:80 my-node-nginx-app

# Goto Any Web Browser & Paste This Link
# http://localhost:5000
