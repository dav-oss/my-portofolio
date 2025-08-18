import { Request, RequestHandler, Response } from 'express';
import type { ParsedQs } from 'qs';
import Certificate from '../models/certificate';

export class CertificateController {
  deleteCertificate: RequestHandler<{ id: string; }, any, any, ParsedQs, Record<string, any>> | undefined;
  // Method to add a new certificate
  async addCertificate(req: Request, res: Response) {
    try {
      const { name, issuer, dateIssued } = req.body;
      const newCertificate = new Certificate({ name, issuer, dateIssued });
      await newCertificate.save();
      res.status(201).json(newCertificate);
    } catch (error) {
      res.status(500).json({ message: 'Error adding certificate', error });
    }
  }

  // Method to update an existing certificate
  async updateCertificate(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedCertificate = await Certificate.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedCertificate) {
        return res.status(404).json({ message: 'Certificate not found' });
      }
      res.json(updatedCertificate);
    } catch (error) {
      res.status(500).json({ message: 'Error updating certificate', error });
    }
  }

  // Method to retrieve all certificates
  async getCertificates(req: Request, res: Response) {
    try {
      const certificates = await Certificate.find();
      res.json(certificates);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving certificates', error });
    }
  }

  // Method to retrieve a specific certificate by ID
  async getCertificateById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const certificate = await Certificate.findById(id);
      if (!certificate) {
        return res.status(404).json({ message: 'Certificate not found' });
      }
      res.json(certificate);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving certificate', error });
    }
  }
}