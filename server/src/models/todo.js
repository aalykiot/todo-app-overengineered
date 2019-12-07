import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});

todoSchema.set('toJSON', {
  transform: (_, { _id, __v, ...restObject }) => ({
    id: _id,
    ...restObject,
  }),
});

const todo = mongoose.model('Todo', todoSchema);

export default todo;
