import Student, { IStudent } from '../models/student';

class StudentService {
    static async createStudent(data: IStudent) {
        const student = new Student(data);
        return student.save();
    }

    static async getStudents() {
        return Student.find();
    }

    static async updateStudent(id: string, data: IStudent) {
        return Student.findByIdAndUpdate(id, data, { new: true });
    }

    static async deleteStudent(id: string) {
        return Student.findByIdAndDelete(id);
    }
}

export default StudentService;
