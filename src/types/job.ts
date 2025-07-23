export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  applicants?: {
    name: string;
    email: string;
  }[];
}
