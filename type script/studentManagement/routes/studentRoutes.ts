import * as express from 'express';
import StudentController from '../controllers/studentController';

const router = express.Router();

router.post('/', StudentController.createStudent);
router.get('/', StudentController.getStudents);
router.put('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deleteStudent);

export default router;
