"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/students', studentRoutes_1.default);
const mongoURI = 'mongodb://127.0.0.1:27017/studentdb'; // Local MongoDB URI
mongoose_1.default.connect(mongoURI)
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
app.listen(port, () => {
    console.log(`listining to port ${port}`);
});
