const express = require('express');

// const Enquete = require('./models/Enquete')
// const authMiddleware = require('./middlewares/auth')
// const AuthController = require('./controllers/AuthController');
// const CellController = require('./controllers/CellController');
const FunctionController = require('./controllers/FunctionUserController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

/* ROTAS SEM TOKEN */
// routes.post('/signin', AuthController.store);
routes.post('/function', FunctionController.store);

/* ROTAS COM TOKEN */
// routes.use(authMiddleware)
routes.post('/users', UserController.store);
// routes.post('/cells', CellController.store);

// routes.get('/cells', CellController.index);



module.exports =  routes;