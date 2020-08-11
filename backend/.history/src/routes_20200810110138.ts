import express from 'express';


const routes = express.Router();

import ClassesController 

routes.get('/', (request, response) => {
    console.log('Acessou a rota');
})

// Criar aula
routes.post('/classes', ClassesController)


export default routes;