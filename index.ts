import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 80;

app.get('/', async (request: Request, response: Response) => {
    response.send("Hello world!");
});


app.listen(port,  () => {
  console.log(`Started on port ${port}`);
});