import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { Server } from 'http';
import { getEvents } from './events';
import { getCenters } from './centers';

export const app: Application = express();
app.use(cors());

const port: number = 3001;

app.get('/health', (req: Request, res: Response) => {
  res.json({ success: true });
});

app.get('/centers', async (req: Request, res: Response) => {
  res.json(await getCenters());
});

app.get('/events', async (req: Request, res: Response) => {
  res.json(await getEvents());
});

export const server: Server = app.listen(port, function () {
  console.log(`App is listening on port ${port}!`);
});
