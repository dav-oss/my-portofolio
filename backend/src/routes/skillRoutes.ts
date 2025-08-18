import { Router } from 'express';
import SkillController from '../controllers/skillController';

const router = Router();
const skillController = SkillController;

// Define routes for managing skills
router.post('/skills', skillController.addSkill);
router.get('/skills', skillController.getSkills);
router.get('/skills/:id', skillController.getSkillById);
router.put('/skills/:id', skillController.updateSkill);
router.delete('/skills/:id', skillController.deleteSkill);

export default router;