/src  
├── components  
│ ├── Header.tsx  
│ ├── Sidebar.tsx  
│ ├── JobCard.tsx  
│ ├── JobDetails.tsx  
│ └── ConfirmationDialog.tsx  
│  
├── layouts  
│ ├── RecruiterLayout.tsx  
│ └── UserLayout.tsx  
│  
├── pages  
│ ├── auth  
│ │ └── login.tsx  
│ ├── recruiter  
│ │ └── jobs  
│ │ ├── index.tsx # Job list for recruiter  
│ │ └── [id].tsx # Job detail with applicants  
│ ├── user  
│ │ └── jobs  
│ │ ├── index.tsx # Job list for user  
│ │ └── [id].tsx # Job detail + apply  
│ └── \_app.tsx  
│  
├── theme  
│ └── theme.ts # Custom MUI theme (colors, typography)  
│  
├── types  
│ └── job.ts # TypeScript interfaces  
│  
├── utils  
│ └── dummyData.ts # Hardcoded jobs + applicants  
│  
└── hooks  
 └── useAuth.ts # Dummy auth logic (optional)
