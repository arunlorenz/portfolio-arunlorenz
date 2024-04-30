# Use the official Node.js image as base
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as the server to serve the built React app
FROM nginx:alpine

# Copy the built app from the previous stage to the Nginx web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to allow outside access to the app
EXPOSE 80

# Start Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
