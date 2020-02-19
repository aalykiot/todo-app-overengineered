import express from 'express';
import boom from '@hapi/boom';

import * as todoService from 'services/todos';

const router = express.Router();

const handleServerError = (err, next) => {
  console.error(err);
  next(boom.badImplementation().output);
};

router.get('/', (req, res, next) => {
  todoService
    .find()
    .then(data => res.send(data))
    .catch(err => handleServerError(err, next));
});

router.post('/', (req, res, next) => {
  const { text } = req.body;

  if (!text) {
    next(boom.badData().output);
    return;
  }

  todoService
    .create(text)
    .then(() => todoService.find())
    .then(data => res.send(data))
    .catch(err => handleServerError(err, next));
});

router.put('/:todoId', (req, res, next) => {
  const { todoId } = req.params;

  if (!todoId) {
    next(boom.badData().output);
    return;
  }

  todoService
    .toggle(todoId)
    .then(() => todoService.find())
    .then(data => res.send(data))
    .catch(err => handleServerError(err, next));
});

router.put('/toggle-all', async (req, res, next) => {
  todoService
    .toggleAll()
    .then(() => todoService.find())
    .then(data => res.send(data))
    .catch(err => handleServerError(err, next));
});

router.put('/:todoId', async (req, res, next) => {
  const { todoId } = req.params;
  const { todo } = req.body;

  if (!todoId || !todo) {
    next(boom.badData().output);
    return;
  }

  todoService
    .update(todoId, todo)
    .then(() => todoService.find())
    .then(data => res.send(data))
    .catch(err => handleServerError(err, next));
});

router.delete('/completed', async (req, res, next) => {
  todoService
    .removeCompleted()
    .then(() => todoService.find())
    .then(data => res.send(data))
    .catch(err => handleServerError(err, next));
});

router.delete('/:todoId', async (req, res, next) => {
  const { todoId } = req.params;

  if (!todoId) {
    next(boom.badData().output);
    return;
  }

  todoService
    .remove(todoId)
    .then(() => todoService.find())
    .then(data => res.send(data))
    .catch(err => handleServerError(err, next));
});

export default router;
