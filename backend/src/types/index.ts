export interface BlogPost {
  title: string;
  date: string;
  summary: string;
  link: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  dateIssued: string;
}

export interface Skill {
  name: string;
  proficiencyLevel: string; // e.g., "beginner", "intermediate", "advanced"
}

export interface AdminDashboardStats {
  totalUsers: number;
  totalBlogPosts: number;
  totalCertificates: number;
  totalSkills: number;
}