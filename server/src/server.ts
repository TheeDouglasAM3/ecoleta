import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log("Listagem de usuários");

    response.json([
        'Douglas',
        'Eduardo',
        'Robert',
        'Navarro',
        'Amemiya',
        'Cacatua',
        'Nicolly',
        'Gabriela',
        'Greftiw',
        'Jaze'
    ]);
});

app.listen(3333);