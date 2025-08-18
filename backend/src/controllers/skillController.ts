import { Request, RequestHandler, Response } from 'express';
import { ParsedQs } from 'qs';
import Skill from '../models/skill';

class SkillController {
  [x: string]: RequestHandler<{ id: string; }, any, any, ParsedQs, Record<string, any>>;
  // Method to add a new skill
  async addSkill(req: Request, res: Response) {
    try {
      const { name, proficiency } = req.body;
      const newSkill = new Skill({ name, proficiency });
      await newSkill.save();
      res.status(201).json(newSkill);
    } catch (error) {
      res.status(500).json({ message: 'Error adding skill', error });
    }
  }

  // Method to retrieve all skills
  async getSkills(req: Request, res: Response) {
    try {
      const skills = await Skill.find();
      res.status(200).json(skills);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving skills', error });
    }
  }

  // Method to update a skill
  async updateSkill(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedSkill = await Skill.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedSkill) {
        return res.status(404).json({ message: 'Skill not found' });
      }
      res.status(200).json(updatedSkill);
    } catch (error) {
      res.status(500).json({ message: 'Error updating skill', error });
    }
  }

  // Method to delete a skill
  async deleteSkill(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedSkill = await Skill.findByIdAndDelete(id);
      if (!deletedSkill) {
        return res.status(404).json({ message: 'Skill not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting skill', error });
    }
  }
}

export default new SkillController();