Features

  1) Post Photos: Upload and share photos with a description.

  2) Author Attribution: Each post includes the author's name.

  3) Like System: Track the number of likes for each post.

  4) Photo Handling: Base64 encoding is used for storing and transferring images.

Tech Stack

  Frontend

    Framework: Redux

    Additional Tools: React for building user interfaces

  Backend

    Framework: Express.js

    Additional Tools:

      1) CORS for handling cross-origin requests

      2) Node.js for server-side scripting

  Database

    Database: MongoDB Atlas

    Data Handling: Models and controllers implemented using MVC architecture

  Photo Storage

    Encoding: Base64 encoding for efficient image storage and retrieval

Installation and Setup

API Endpoints

  1) GET /posts: Retrieve all posts

  2) POST /posts: Create a new post

  3) PATCH /posts/:id: Update an existing post

  4) DELETE /posts/:id: Delete a post

Clone the repository:

git clone https://github.com/yourusername/memories.git
cd memories

Install dependencies:

Backend:

cd server
npm install

Frontend:

cd client
npm install

Set up environment variables:
Create a .env file in the server directory with the following:

MONGODB_URI=your_mongodb_connection_string
PORT=5000

Run the application:

Start the backend server:

cd server
npm start

Start the frontend development server:

cd client
npm start

Open your browser and navigate to http://localhost:3000 to use the application.
