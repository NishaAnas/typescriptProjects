"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import express, { Application } from 'express';
const body_parser_1 = require("body-parser");
const cors_1 = require("cors");
const studentRoutes_1 = require("./routes/studentRoutes");
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/students', studentRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
