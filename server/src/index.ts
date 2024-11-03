import express from 'express';
import cors from 'cors';
import generalRoutes from './routes/generalRoutes'; // Importing the general routes

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.use(express.json()); // Middleware to parse JSON bodies

// Logging middleware for GET, POST, PUT, DELETE requests
app.use((req, res, next) => {
  const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

  if (allowedMethods.includes(req.method)) {
    console.log(`${req.method} request to ${req.url} at ${new Date().toISOString()}`);
  }

  next(); // Call the next middleware or route handler
});

// Define a basic route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Gym Controller API!');
});

// Use the general routes
app.use('/api', generalRoutes); // Mount the general routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
