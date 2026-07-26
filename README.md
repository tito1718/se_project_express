# WTWR (What to Wear?) – Back End

## Overview

The WTWR (What to Wear?) Back End is a RESTful API built with Node.js, Express.js, MongoDB, and Mongoose. It serves as the server for the WTWR application, handling user accounts, clothing item data, database operations, authentication, authorization, and API routing.

This project was developed as part of the TripleTen Software Engineering program to practice building a scalable backend application using the MVC architecture, MongoDB, Express, and secure authentication with JSON Web Tokens (JWT).

## Features

- User registration with encrypted passwords
- Secure user login using JWT authentication
- Protected API routes using authorization middleware
- Retrieve and update the authenticated user's profile
- Create, retrieve, and delete clothing items
- Like and unlike clothing items
- Ownership verification before deleting clothing items
- MongoDB database integration with Mongoose
- Data validation using Mongoose schemas
- URL validation using the validator package
- Password hashing with bcrypt
- Centralized error handling
- RESTful API architecture
- Organized project structure using Controllers, Routes, Models, Middleware, and Utilities

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript (ES6)
- JSON Web Tokens (JWT)
- bcryptjs
- Validator
- ESLint (Airbnb Style Guide)
- Prettier
- Nodemon
- Postman
- Git & GitHub

## Project Structure

```
controllers/
middlewares/
models/
routes/
utils/
.github/
app.js
package.json
README.md
```

## Database

This project connects to a local MongoDB database using Mongoose.

```javascript
mongodb://127.0.0.1:27017/wtwr_db
```

## API Endpoints

### Authentication

- POST `/signup`
- POST `/signin`

### Users

- GET `/users`
- GET `/users/me`
- PATCH `/users/me`

### Clothing Items

- GET `/items`
- POST `/items`
- DELETE `/items/:itemId`
- PUT `/items/:itemId/likes`
- DELETE `/items/:itemId/likes`

## Authentication & Authorization Demo

A short Loom video demonstrating the authentication and authorization features implemented in this project, including user registration, login, JWT authentication, protected routes, profile retrieval, profile updates, and authorization checks.

Loom:
https://www.loom.com/share/cd24b3766f48459baa7fe8b5437bd0ca

## Testing

The project was tested using:

- Postman API Test Suite
- GitHub Actions
- ESLint

## Future Improvements

- Deploy the API to a remote server
- Image upload support
- Password reset functionality
- Email verification
- Refresh token authentication
- Role-based user permissions

## Author

**Cesar "Tito" Chirino**

Software Engineering Student at TripleTen

GitHub:

https://github.com/tito1718
