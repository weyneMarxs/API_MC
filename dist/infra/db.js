"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", true);
class Database {
    constructor() {
        this.DB_URL = "mongodb://127.0.0.1:27017/db_portal";
    }
    createConnection() {
        mongoose_1.default.connect(this.DB_URL);
        console.log('conexão com o banco realizada com sucesso');
    }
}
exports.default = Database;
