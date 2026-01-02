📚 StudyStacks – Smart Learning Resource Platform

StudyStacks is a modern React + Vite (JavaScript) based web application built to help students organize, search, and access study materials such as subjects, assignments, notes, PDFs, and question papers from a single platform.

This project is 100% JavaScript-based (❌ No TypeScript), making it beginner-friendly and easy to understand for students learning React.

✨ Key Features

📂 Subject-wise study material management

🔍 Search by subject name or subject code

📄 Supports PDF, DOC, DOCX

⚡ Fast performance using Vite

🔁 Hot Module Replacement (HMR)

🧑‍🎓 Clean & student-friendly UI

🧹 Organized folder structure

🔐 Environment variable support

🛠 ESLint for JavaScript code quality

🛠 Tech Stack (JavaScript Only)
Technology	Purpose
React (JS)	Frontend UI
Vite	Fast dev & build tool
JavaScript (ES6+)	Application logic
HTML5	Markup
CSS3	Styling
ESLint	Code linting
Node.js	Development runtime

❌ TypeScript is NOT used in this project.

📁 Project Structure
studystacks/
│
├── public/
│   └── assets/
│
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Application pages
│   ├── services/       # API & helper functions
│   ├── styles/         # CSS files
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
│
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md

🚀 Getting Started

Follow these steps to run StudyStacks on your local system.

✅ Prerequisites

Make sure you have:

Node.js (v18 or later recommended)

npm or yarn

Check versions:

node -v
npm -v

📥 Installation

Clone the repository:

git clone https://github.com/your-username/studystacks.git


Move into the project folder:

cd studystacks


Install dependencies:

npm install

▶️ Run Development Server
npm run dev


The app will start at:

http://localhost:5173

🏗 Build for Production
npm run build


Preview production build:

npm run preview

🔐 Environment Variables

StudyStacks uses Vite environment variables.

Create .env file
cp .env.example .env

Example .env
VITE_API_BASE_URL=http://localhost:5000
VITE_APP_NAME=StudyStacks


⚠️ Never commit .env files to GitHub

🔍 ESLint (JavaScript)

This project uses ESLint for JavaScript to maintain clean and readable code.

Run ESLint:

npm run lint

⚛ React + Vite Setup

This project uses:

@vitejs/plugin-react

Babel-based Fast Refresh

Lightweight & fast dev server

Currently enabled plugins:

@vitejs/plugin-react

React Compiler is not enabled to keep builds fast and simple.

📚 Use Cases

College subject documentation

Assignment sharing

Question paper storage

Personal study notes

Academic resource management

✅ Best Practices Followed

✔ JavaScript-only codebase
✔ Environment variables secured
✔ Clean folder structure
✔ Fast HMR with Vite
✔ Beginner-friendly React setup

🤝 Contributing

Contributions are welcome!

Fork the repository

Create a new branch

Commit your changes

Open a Pull Request

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Saurabh Parmar
Brand: Deyzora
Project: StudyStacks

⭐ Support

If you find this project useful:

⭐ Star the repository

🐞 Report issues

📢 Share with friends