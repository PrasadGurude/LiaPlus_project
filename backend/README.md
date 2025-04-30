# Backend API Service

A RESTful API service built with Express.js, MongoDB, and TypeScript that provides authentication, user management, and blog post functionality.

## Features

- User authentication (register/login)
- Role-based authorization (admin/user)
- Blog post management
- JWT token authentication
- TypeScript support
- MongoDB integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
```sh
npm install

3. Create a .env file in the root directory with the following variables:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Development

Start the development server:

npm run dev

API Endpoints
Authentication
POST /api/auth/register - Register a new user
POST /api/auth/login - Login user
GET /api/auth/me - Get current user
User Routes
GET /api/user/blogs - Get all blog posts
GET /api/user/blogs/:id - Get specific blog post
PUT /api/user/profile - Update user profile
Admin Routes
POST /api/admin/blogs - Create new blog post
GET /api/admin/blogs - Get admin's blog posts
PUT /api/admin/blogs/:id - Update blog post
DELETE /api/admin/blogs/:id - Delete blog post



Project Structure

src/
├── config/        # Configuration files
├── controllers/   # Route controllers
├── interfaces/    # TypeScript interfaces
├── middlewares/   # Express middlewares
├── models/        # Mongoose models
├── routes/        # API routes
├── schemas/       # Validation schemas
├── services/      # Business logic
├── types/         # TypeScript type definitions
├── index.ts       # App entry point
└── server.ts      # Server configuration


Technologies Used

Express.js - Web framework
MongoDB - Database
Mongoose - ODM
TypeScript - Programming language
JWT - Authentication
Zod - Schema validation
bcryptjs - Password hashing
Error Handling
The API includes centralized error handling and validation using:

Express middleware for catching errors
Zod for request validation
Custom error responses for different scenarios
Security Features
Password hashing with bcrypt
JWT token authentication
Role-based access control
Request validation
CORS enabled
License
MIT License

Contributing
Fork the repository
Create your feature branch
Commit your changes
Push to the branch
Create a new Pull Request

This README.md provides:
1. A clear project overview
2. Installation instructions
3. Available API endpoints
4. Project structure
5. Technologies used
6. Security features
7. Contributing guidelines

You can customize this further based on your specific needs or add additional sections like:
- Deployment instructions
- Testing information
- Troubleshooting guide
- API documentation
- Environment configuration detailsThis README.md provides:
1. A clear project overview
2. Installation instructions
3. Available API endpoints
4. Project structure
5. Technologies used
6. Security features
7. Contributing guidelines

You can customize this further based on your specific needs or add additional sections like:
- Deployment instructions
- Testing information
- Troubleshooting guide
- API documentation
- Environment configuration details
