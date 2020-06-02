// import express from 'express';

// const app = express();

// app.use(express.json());

// //Rota: Endereço completo da requisição
// //Recurso: Qual entidade estamos acessando do sistema (usuarios)

// //GET: Buscar uma ou mais informações do back-end
// //POST: Criar uma nova informação no back-end
// //PUT: Atualizar uma informação existente do back-end
// //DELETE: Remover uma informação do back-end

// //Request Param: Paramêtros que vem na própria rota que identificam um recurso
// //Query Param: Paramêtros que vem na própria rota geralmente opcionais para filtro, paginação...
// //Request Body: Paramêtro para criação/atualização de informações

// const users = [
//     'Douglas',
//     'Eduardo',
//     'Robert',
//     'Navarro',
//     'Amemiya',
//     'Cacatua',
//     'Nicolly',
//     'Gabriela',
//     'Greftiw',
//     'Jaze'
// ];

// app.get('/users', (request, response) => {
//     const search = String(request.query.search);

//     const filteredUsers = search 
//         ? users.filter(user => user.includes(search))
//         : users;

//     return response.json(filteredUsers);
// });

// app.get('/users/:id', (request, response) => {
//     const id = Number(request.params.id);

//     const user = users[id];

//     return response.json(user);
// })

// app.post('/users', (request, response) => {

//     const data = request.body;

//     const user = {
//         name: data.name,
//         email: data.email
//     }

//     return response.json(user);
// })

// app.listen(3333);