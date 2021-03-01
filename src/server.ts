import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ messege: 'teste final aqui' });
});

app.post('/', (request, response) => {
  return response.json({ messege: 'Dados rececbidos' });
});

app.listen(3333, () => console.log('Rodando'));
