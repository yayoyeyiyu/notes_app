const { getAll, create, getOne, remove, update, login, logged } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
  .get(verifyJWT, getAll)
  .post(create);

routerUser.route('/login') //users/login
  .post(login)

routerUser.route('/me') //me va a permitir traerme al usuario logeado
  .get(verifyJWT, logged)

routerUser.route('/:id')
  .get(verifyJWT, getOne)
  .delete(remove)
  .put(update);

module.exports = routerUser;