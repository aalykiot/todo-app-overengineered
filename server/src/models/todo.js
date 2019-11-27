import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});

const todo = mongoose.model('Todo', todoSchema);

export default todo;
