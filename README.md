Pastebin Clone – Full Stack MERN Application

A full-stack Pastebin-like web application that allows users to create, share, and access text snippets through a unique link. Each paste can be configured to expire based on time or maximum views.

Live Demo:
https://frontend-0dvm.onrender.com/

Features

Create text pastes instantly

Generate a unique shareable link for each paste

Optional expiration based on:

Time (auto-delete after expiry)

Maximum number of views

View count tracking

Clean and responsive user interface

RESTful API architecture

Tech Stack
Frontend

React.js

JavaScript

Bootstrap

HTML5

CSS3

Backend

Node.js

Express.js

MongoDB

Mongoose

Tools & Platforms

Git & GitHub

Render (Deployment)

Vercel (Frontend hosting)

Thunder Client (API testing)

How It Works

User enters text in the input box

User sets optional expiry conditions (time or max views)

Backend stores the paste in MongoDB

A unique URL is generated

Paste is accessible until it expires or reaches max views

API Endpoints (Sample)

POST /api/paste – Create a new paste

GET /api/paste/:id – Fetch a paste by ID

Local Setup
Clone the Repository
git clone https://github.com/shams-1375/pastebin-clone.git
cd pastebin-clone

Backend Setup
cd backend
npm install
npm run dev


Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Frontend Setup
cd frontend
npm install
npm start

Future Improvements

User authentication

Dark mode

Password-protected pastes

Mohammed Shams Ahmed
B.Tech Computer Science & Engineering (2026)
GitHub: https://github.com/shams-1375
