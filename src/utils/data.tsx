import { Job } from "../types/job";
import DocIcon from "../../public/assets/icons/document";

export const jobStatistics = [
  {
    title: "Applications",
    icon: <DocIcon />,
    value: 1200,
    percentage: +2.5,
  },
  {
    title: "Views",
    icon: <DocIcon />,
    value: 200,
    percentage: -1.2,
  },
  {
    title: "Hired",
    icon: <DocIcon />,
    value: 300,
    percentage: +11,
  },
  {
    title: "Rejected",
    icon: <DocIcon />,
    value: 450,
    percentage: +5.2,
  },
];

export const recruiterJobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    description: "Build and maintain React apps.",
    applicants: [],
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "CodeBase",
    location: "On-site",
    description: "Develop APIs using Node.js.",
    applicants: [],
  },
];
