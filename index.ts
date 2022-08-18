import express, { Request, Response } from 'express';
import * as redis from 'redis';

const app = express();
const port = process.env.PORT || 80;
const client = redis.createClient({
  socket: {
   host: 'redis-stack',
   port: 6379
  }
});

client.connect();
client.set('views', 0);

app.get('/', async (request: Request, response: Response) => {
    const views = await client.incr('views');
    response.send(`Express App views: ${views}`);
});


app.listen(port,  () => {
  console.log(`Started on port ${port}`);
});