import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    console.log('Acessou a rota');
})