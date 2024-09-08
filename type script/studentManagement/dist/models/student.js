"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StudentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    class: { type: String, required: true }
});
exports.default = mongoose_1.default.model('Student', StudentSchema);
