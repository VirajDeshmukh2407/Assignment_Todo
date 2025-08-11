# # Step 1: Base image
# FROM node:20

# # Step 2: Set working directory in container
# WORKDIR /app

# # Step 3: Copy package.json and install dependencies
# COPY package*.json .
# RUN npm install --production

# # Step 4: Copy app source code
# COPY . .

# # Step 5: Expose the port your app runs on
# EXPOSE 3000

# # Step 6: Command to run app
# CMD ["node","start"]


# --


# Step 1: Base image
FROM node:20

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy app source
COPY . .

# Step 5: Expose React dev server port
EXPOSE 3000

# Step 6: Start the app
CMD ["npm", "start"]
