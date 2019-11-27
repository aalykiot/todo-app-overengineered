import express from 'express';
import mongoose from 'mongoose';
import boom from '@hapi/boom';

const router = express.Router();

const Todo = mongoose.model('Todo');

router.get('/', async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (err) {
    console.error(err);
    next(boom.badImplementation().output);
  }
});

router.post('/', async (req, res, next) => {
  const { text } = req.body;

  if (!text) {
    next(boom.badData().output);
    return;
  }

  try {
    const todo = new Todo({
      text,
      completed: false,
    });

    await todo.save();

    res.send(todo);
  } catch (err) {
    next(boom.badImplementation().output);
  }
});

router.put('/:todoId', async (req, res, next) => {
  const { todoId } = req.params;
  const { todo } = req.body;

  if (!todoId || !todo) {
    next(boom.badData().output);
    return;
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      todoId,
      { ...todo },
      { new: true },
    );
    res.send(updatedTodo);
  } catch (err) {
    console.error(err);
    next(boom.badImplementation().output);
  }
});

router.delete('/:todoId', async (req, res, next) => {
  const { todoId } = req.params;

  if (!todoId) {
    next(boom.badData().output);
    return;
  }

  try {
    const deletedTodo = await Todo.findById(todoId);
    await Todo.findByIdAndRemove(todoId);
    res.send(deletedTodo);
  } catch (err) {
    next(boom.badImplementation().output);
  }
});

export default router;
