
FROM node:16-alpine
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=0 /usr/src/app/build /usr/share/nginx/html

EXPOSE 5001
CMD ["nginx", "-g", "daemon off;"]
 
 #To Run the commands 
 # Build the Docker image
#docker build -t my-node-nginx-app .

# Run a container with port mapping
#docker run -p 5000:80 my-node-nginx-app
