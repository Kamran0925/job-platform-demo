# 💼 Job Platform Demo

A modern pixel-perfect and responsive job board platform built using **Next.js 13**, **Material UI**, and **TypeScript**. It supports two user roles — **Recruiters** and **Job Seekers**, each with dedicated pages, views, and actions.

🚀 **Live Preview**: [job-platform-demo.vercel.app](https://job-platform-demo.vercel.app)

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 13+](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Kit:** [Material UI (MUI)](https://mui.com/)
- **Styling:** Custom MUI theme
- **Routing:** App Directory Routing
- **Auth:** Dummy context-based authentication logic
- **Deployment:** Vercel

---

## 📁 Folder Structure

<details>
  <summary><code>/src</code> structure (click to expand)</summary>

```bash
/src
├── components
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── JobCard.tsx
│   ├── JobDetails.tsx
│   └── ConfirmationDialog.tsx

├── layouts
│   ├── RecruiterLayout.tsx
│   └── UserLayout.tsx

├── pages
│   ├── auth
│   │   └── login.tsx
│   ├── recruiter
│   │   └── jobs
│   │       ├── index.tsx      # Recruiter job list
│   │       └── [id].tsx       # Job detail with applicants
│   ├── user
│   │   └── jobs
│   │       ├── index.tsx      # User job list
│   │       └── [id].tsx       # Job detail + apply
│   └── _app.tsx

├── theme
│   └── theme.ts               # MUI theme config

├── types
│   └── job.ts                 # TS interfaces

├── utils
│   └── dummyData.ts          # Mock job/applicant data

└── hooks
    └── useAuth.ts            # Mock auth logic
```

</details>

---

## ⚙️ Getting Started

Follow the steps below to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/job-platform-demo.git
cd job-platform-demo
````

### 2. Set Node Version (via `nvm`)

```bash
nvm install 20
nvm use 20
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 👤 User Roles

* **Recruiter**: View job listings, view applicant apply status and details.
* **User/Job Seeker**: Browse jobs, apply, and track application status.

---

## 📄 License

MIT License. All rights reserved.

---

## ✨ Author

Made by **Kamran Rizwan**



