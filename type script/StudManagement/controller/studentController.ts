import { Request, Response } from 'express';
import StudentService from '../services/studentService';

class StudentController {
    static async createStudent(req: Request, res: Response) {
        try {
            const newStudent = await StudentService.createStudent(req.body);
            res.status(201).json(newStudent);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    static async getStudents(req: Request, res: Response) {
        try {
            const students = await StudentService.getStudents();
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    static async updateStudent(req: Request, res: Response) {
        try {
            const updatedStudent = await StudentService.updateStudent(req.params.id, req.body);
            res.status(200).json(updatedStudent);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    static async deleteStudent(req: Request, res: Response) {
        try {
            await StudentService.deleteStudent(req.params.id);
            res.status(200).json({ message: 'Student deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
}

export default StudentController;
