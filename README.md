# WTWR (What to Wear?) – Back End

## Overview

The WTWR (What to Wear?) backend is a RESTful API built with Node.js, Express.js, MongoDB, and Mongoose. It serves as the backend for the WTWR application and handles user accounts, clothing-item data, database operations, authentication, authorization, and API routing.

This project was developed as part of the TripleTen Software Engineering program to practice building a scalable backend application using the MVC architecture, MongoDB, Express, and secure authentication with JSON Web Tokens (JWTs).

## Deployed Application

- Frontend: [https://tito-wtwr.crabdance.com](https://tito-wtwr.crabdance.com)
- Backend API: [https://api.tito-wtwr.crabdance.com](https://api.tito-wtwr.crabdance.com)
- Frontend repository: [https://github.com/tito1718/se_project_react](https://github.com/tito1718/se_project_react)
- Backend repository: [https://github.com/tito1718/se_project_express](https://github.com/tito1718/se_project_express)
- Project pitch video: [Watch the WTWR project pitch on Loom](https://www.loom.com/share/bdb6029ae0f14c6796b9c8fda1665f3a)

## Features

- User registration with securely hashed passwords
- Secure user login using JWT authentication
- Protected API routes using authorization middleware
- Retrieval and updating of the authenticated user’s profile
- Creation, retrieval, and deletion of clothing items
- Ability to like and unlike clothing items
- Ownership verification before deleting clothing items
- MongoDB integration using Mongoose
- Request validation using Celebrate and Joi
- Model validation using Mongoose schemas
- URL validation using the validator package
- Password hashing using bcryptjs
- Centralized error handling
- RESTful API architecture
- Organized project structure using controllers, routes, models, middleware, and utilities

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript (ES6)
- JSON Web Tokens (JWT)
- bcryptjs
- Celebrate
- Joi
- Validator
- ESLint with the Airbnb Style Guide
- Prettier
- Nodemon
- Postman
- Git and GitHub
- GitHub Actions

## Project Structure

```text
controllers/
errors/
middlewares/
models/
routes/
utils/
.github/
.editorconfig
.eslintrc
.gitignore
app.js
package.json
README.md
```

## Database

The application uses MongoDB with Mongoose. During local development, it connects to the following database:

```text
mongodb://127.0.0.1:27017/wtwr_db
```

In production, the database connection and other sensitive configuration values can be supplied through environment variables.

## API Endpoints

### Authentication

| Method | Endpoint  | Description                            |
| ------ | --------- | -------------------------------------- |
| `POST` | `/signup` | Registers a new user                   |
| `POST` | `/signin` | Authenticates a user and returns a JWT |

### Users

| Method  | Endpoint    | Description                                      |
| ------- | ----------- | ------------------------------------------------ |
| `GET`   | `/users`    | Retrieves all users                              |
| `GET`   | `/users/me` | Retrieves the authenticated user’s profile       |
| `PATCH` | `/users/me` | Updates the authenticated user’s name and avatar |

### Clothing Items

| Method   | Endpoint               | Description                                        |
| -------- | ---------------------- | -------------------------------------------------- |
| `GET`    | `/items`               | Retrieves all clothing items                       |
| `POST`   | `/items`               | Creates a new clothing item                        |
| `DELETE` | `/items/:itemId`       | Deletes an item owned by the authenticated user    |
| `PUT`    | `/items/:itemId/likes` | Adds the authenticated user’s like to an item      |
| `DELETE` | `/items/:itemId/likes` | Removes the authenticated user’s like from an item |

## Authentication and Authorization

After a successful login, the backend creates a JSON Web Token. The frontend includes this token with requests to protected endpoints.

Authorization middleware verifies the token before allowing access to protected resources. Ownership checks also ensure that users can delete only the clothing items they created.

## Authentication and Authorization Demo

The following video demonstrates the project’s authentication and authorization features, including:

- User registration
- User login
- JWT authentication
- Protected routes
- Profile retrieval and updates
- Clothing-item ownership checks

[Watch the authentication and authorization demo on Loom](https://www.loom.com/share/cd24b3766f48459baa7fe8b5437bd0ca)

## Testing

The project was tested using:

- Postman API test suite
- GitHub Actions
- ESLint

Testing covered authentication, protected routes, data validation, profile management, clothing-item operations, and authorization checks.

## Future Improvements

- Direct image-upload support
- Password-reset functionality
- Email verification
- Refresh-token authentication
- Role-based user permissions
- Clothing categories for men’s, women’s, and unisex garments
- Profile organization based on weather categories
- Favorite outfits and personalized recommendations
- Clothing search, filtering, and sorting
- Weather forecasts for planning outfits in advance

## Author

**Cesar “Tito” Chirino**

Software Engineering Student at TripleTen

[GitHub Profile](https://github.com/tito1718)
