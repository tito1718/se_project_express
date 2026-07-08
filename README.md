# WTWR (What to Wear?) – Back End

## Overview

The WTWR (What to Wear?) Back End is a RESTful API built with Node.js, Express.js, MongoDB, and Mongoose. It serves as the server for the WTWR application, handling user and clothing item data, database operations, and API routing.

This project was developed as part of the TripleTen Software Engineering program to practice building a scalable backend application using the MVC architecture, MongoDB, and Express.

## Features

- Create and retrieve users
- Create, retrieve, and delete clothing items
- Like and unlike clothing items
- MongoDB database integration with Mongoose
- Data validation using Mongoose schemas
- URL validation using the validator package
- Centralized error handling
- RESTful API architecture
- Temporary authorization middleware for testing
- Organized project structure using Controllers, Routes, Models, and Utilities

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript (ES6)
- Validator
- ESLint (Airbnb Style Guide)
- Prettier
- Nodemon
- Postman
- Git & GitHub

## Project Structure

```
controllers/
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

## Testing

The project was tested using:

- Postman API Test Suite
- GitHub Actions
- ESLint

## Future Improvements

- JWT Authentication
- User login and registration
- Authorization middleware
- Profile editing
- Deployment to a remote server
- Image uploads
- Enhanced validation and security

## Author

**Cesar "Tito" Chirino**

Software Engineering Student at TripleTen

GitHub:
https://github.com/tito1718
