import express from 'express';
import bodyParser from 'body-parser';
import generalRoutes from './routes/GeneralRoutes';

const app = express();

app.use(bodyParser.json());

// Usar as rotas definidas em generalRoutes
app.use('/api', generalRoutes);

export default app;
