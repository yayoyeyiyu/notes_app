const catchError = require('../utils/catchError');
const Note = require('../models/Note');

const getAll = catchError(async (req, res) => {
  const { id } = req.user;
  const results = await Note.findAll({ 
    where: { userId: id }
  });
  console.log(results)
  return res.json(results)
});

const create = catchError(async (req, res) => {
  const user = req.user
  console.log(user.id);

  const body = {
    content: req.body.content,
    archive: req.body.archive,
    userId: user.id
  }
  console.log(body)

  const result = await Note.create(body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Note.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Note.destroy({ where: { id } });
  if (!result) return res.sendStatus(404);
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  delete req.body.userId
  const result = await Note.update(
    req.body,
    { where: { id }, returning: true }
  );
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update
};
