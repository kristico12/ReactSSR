// libraries
import mongoose from "mongoose";

function connectDB() {
  let Db;
  try {
    mongoose.connect(process.env.DATABASE_URL_ENV, { useNewUrlParser: true });
    Db = mongoose.connection;
  } catch (error) {
    Db = false;
  }
  return Db;
}

function closeConnectionDB() {
  mongoose.connection.close();
}

export { connectDB, closeConnectionDB };
