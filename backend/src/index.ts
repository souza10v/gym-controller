import express from 'express';
import cors from 'cors';
import generalRoutes from './routes/GeneralRoutes'; 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json()); 

app.use((req, res, next) => {
  const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

  if (allowedMethods.includes(req.method)) {
    console.log(`${req.method} request to ${req.url} at ${new Date().toISOString()}`);
  }

  next(); 
});


app.get('/', (req, res) => {
  res.send('Bem-vindo à API do Gym Controller!');
});


app.use('/api', generalRoutes); 

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
