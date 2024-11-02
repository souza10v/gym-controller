import express from 'express';
import cors from 'cors';
// import generalRoutes from './routes/generalRoutes'; // Uncomment if you're using routes

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.use(express.json()); // Middleware to parse JSON bodies

// Define a basic route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Gym Controller API!');
});

// Uncomment the following line if you're using routes
// app.use('/api', generalRoutes); // Mount the general routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
