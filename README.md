# WTWR Backend

REST API for the WTWR weather-based wardrobe application. It provides authentication, profile management, clothing-item persistence, authorization, validation, security controls, and protected OpenWeather communication.

## Project links

- **Live application:** [Open WTWR](https://whattowear.ldtp.com)
- **API:** [WTWR API](https://api.tito-wtwr.crabdance.com)
- **Frontend repository:** [wtwr-frontend](https://github.com/tito1718/wtwr-frontend)
- **Backend repository:** [wtwr-backend](https://github.com/tito1718/wtwr-backend)

## Features

- Secure user registration and sign-in
- Password hashing with bcrypt
- JWT authentication
- Protected user-profile routes
- Profile name and avatar updates
- Persistent clothing-item storage
- Item ownership protection
- Like and unlike operations
- Request validation with Celebrate and Joi
- Centralized error handling
- Request and error logging
- Restricted production CORS
- Helmet security headers
- API rate limiting
- Request-body size limits
- Server-side OpenWeather proxy
- Environment-based secrets and database configuration
- Automated tests

## Technologies

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens
- bcrypt
- Celebrate and Joi
- Helmet
- express-rate-limit
- Winston
- Node test runner
- ESLint

## API endpoints

### Public endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/signup` | Registers a new user |
| `POST` | `/signin` | Authenticates a user and returns a JWT |
| `GET` | `/items` | Retrieves clothing items |
| `GET` | `/weather` | Returns weather for validated coordinates |

### Authenticated endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/users/me` | Retrieves the current user |
| `PATCH` | `/users/me` | Updates the current user |
| `POST` | `/items` | Creates a clothing item |
| `DELETE` | `/items/:itemId` | Deletes an owned clothing item |
| `PUT` | `/items/:itemId/likes` | Likes a clothing item |
| `DELETE` | `/items/:itemId/likes` | Removes a clothing-item like |

## Local development

### 1. Clone the repository

~~~bash
git clone https://github.com/tito1718/wtwr-backend.git
cd wtwr-backend
~~~

### 2. Install dependencies

~~~bash
npm ci
~~~

### 3. Configure the environment

Copy `.env.example` to `.env` and supply private values:

~~~env
PORT=3001
DATABASE_URL=mongodb://127.0.0.1:27017/wtwr_db
JWT_SECRET=replace_with_a_long_random_secret
WEATHER_API_KEY=your_openweather_api_key
~~~

Never commit the `.env` file.

### 4. Start the API

~~~bash
npm run dev
~~~

## Available scripts

~~~bash
npm start
npm run dev
npm run lint
npm test
~~~

## Testing

The backend uses Node’s built-in test runner. Current automated coverage verifies:

- Successful server-side weather retrieval
- Safe forwarding of weather-provider failures into centralized error handling

~~~bash
npm test
~~~

## Security

- Passwords are stored only as bcrypt hashes
- JWT secrets and third-party API keys remain server-side
- Production startup rejects the development JWT secret
- CORS allows only approved frontend origins
- Helmet adds defensive HTTP headers
- Rate limiting reduces automated abuse
- JSON request bodies are size-limited
- Celebrate validates request bodies, route parameters, and coordinates
- Ownership checks prevent unauthorized item deletion
- Internal server failures return safe public messages

## Production deployment

The API is deployed on a Google Cloud VM.

Production request flow:

1. The WTWR frontend sends an HTTPS request.
2. Nginx receives the request on the Google Cloud VM.
3. Nginx forwards it to the WTWR API on port `3001`.
4. The API communicates with MongoDB or OpenWeather.
5. PM2 keeps the backend running across terminal sessions and restarts.

## Author

**Cesar “Tito” Chirino**

- [GitHub](https://github.com/tito1718)
- [LinkedIn](https://www.linkedin.com/in/cesar-tito-chirino/)
