# Algerian Cities API

A RESTful API that provides information about Algerian cities.

## Features

- Get all Algerian cities
- Get city by ID
- Get cities by wilaya (province)
- CORS enabled
- JSON responses

## API Endpoints

- `GET /` - Welcome message and API documentation
- `GET /api/cities` - Get all cities
- `GET /api/cities/:id` - Get a specific city by ID
- `GET /api/cities/wilaya/:wilaya` - Get all cities in a specific wilaya

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. The server will start on http://localhost:3000

## Deployment on Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Use the following settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variable: `NODE_ENV=production`

## Technologies Used

- Node.js
- Express.js
- CORS

## License

ISC 