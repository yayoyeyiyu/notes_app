const { getAll, create, getOne, remove, update, setCategories, getCategories } = require('../controllers/note.controllers');
const express = require('express');

const routerNote = express.Router();

routerNote.route('/')
  .get(getAll)
  .post(create);


  
  
routerNote.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update);

module.exports = routerNote;