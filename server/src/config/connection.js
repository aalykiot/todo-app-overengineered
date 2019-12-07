import mongoose from 'mongoose';

const fallback = 'mongodb://localhost:27017/todo-app';

const URI = process.env.MONGO_URI || fallback;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', err => {
  console.error(err);
});

db.on('open', () => {
  console.log('DB Connection established successfully');
});
