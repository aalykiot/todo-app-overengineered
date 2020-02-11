import mongoose from 'mongoose';

const Todo = mongoose.model('Todo');

export const find = async () => {
  const result = await Todo.find({});
  return result;
};

export const create = async text => {
  const todo = new Todo({
    text,
    completed: false,
  });

  await todo.save();
  return todo;
};

export const toggle = async todoId => {
  const doc = await Todo.findById(todoId);
  const updatedTodo = await Todo.findByIdAndUpdate(
    todoId,
    { completed: !doc.completed },
    { new: true },
  );

  return updatedTodo;
};

export const toggleAll = async () => {
  const activeTodos = await Todo.countDocuments({ completed: false });
  const transaction = await Todo.updateMany({}, { completed: activeTodos > 0 });
  return transaction;
};

export const update = async (todoId, newData) => {
  const updatedTodo = await Todo.findByIdAndUpdate(
    todoId,
    { ...newData },
    { new: true },
  );
  return updatedTodo;
};

export const removeCompleted = async () => {
  const transaction = await Todo.deleteMany({ completed: true });
  return transaction;
};

export const remove = async todoId => {
  const transaction = await Todo.findByIdAndRemove(todoId);
  return transaction;
};
