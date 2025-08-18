import { Router } from 'express';
import {CertificateController } from '../controllers/certificateController';

const router = Router();
const certificateController = new CertificateController();

router.post('/certificates', certificateController.addCertificate.bind(certificateController));
router.get('/certificates', certificateController.getCertificates.bind(certificateController));
router.get('/certificates/:id', certificateController.getCertificateById.bind(certificateController));
router.put('/certificates/:id', certificateController.updateCertificate.bind(certificateController));
//router.delete('/certificates/:id', certificateController.deleteCertificate?.bind(certificateController));

export default router;