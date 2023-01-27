import mongoose from "mongoose";
mongoose.set("strictQuery", true);

class Database {
  private DB_URL = "mongodb://127.0.0.1:27017/db_portal";

  createConnection() {
    mongoose.connect(this.DB_URL)
    console.log('conexão com o banco realizada com sucesso')
  }
}

export default Database;