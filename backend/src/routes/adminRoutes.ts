import { Router } from 'express';
import AdminController from '../controllers/adminController';

const router = Router();
const adminController = AdminController;

// Define routes for admin tasks
router.get('/dashboard', adminController.getDashboardStats);
router.get('/users', adminController.getAllUsers);
router.post('/users', adminController.createUser);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

export default router;