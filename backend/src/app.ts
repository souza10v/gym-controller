import express from 'express';
import bodyParser from 'body-parser';
import generalRoutes from './routes/GeneralRoutes';

//TESTE
const app = express();

app.use(bodyParser.json());

app.use('/api', generalRoutes);

export default app;
