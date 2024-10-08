"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentService_1 = __importDefault(require("../services/studentService"));
class StudentController {
    static createStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newStudent = yield studentService_1.default.createStudent(req.body);
                res.status(201).json(newStudent);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    static getStudents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield studentService_1.default.getStudents();
                res.status(200).json(students);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    static updateStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedStudent = yield studentService_1.default.updateStudent(req.params.id, req.body);
                res.status(200).json(updatedStudent);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    static deleteStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield studentService_1.default.deleteStudent(req.params.id);
                res.status(200).json({ message: 'Student deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.default = StudentController;
