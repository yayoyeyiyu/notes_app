const express = require('express');
const routerUser = require('./user.router');
const routerNote = require('./note.router');
const verifyJwt = require('../utils/verifyJWT');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', routerUser)
router.use('/notes', verifyJwt, routerNote)


module.exports = router;