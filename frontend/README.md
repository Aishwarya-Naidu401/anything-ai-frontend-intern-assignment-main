# Frontend Developer Intern Assignment – Anything.ai

A full-stack web application built as part of the Frontend Developer Intern shortlisting assignment.  
The project demonstrates authentication, protected routes, dashboard UI, and CRUD functionality with a clean, scalable structure.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- JWT Authentication

### Database
- SQLite (used for local development)

---

## ✨ Features

- User Signup & Login
- JWT-based Authentication
- Protected Routes
- Dashboard after login
- Tasks CRUD (Create, Read, Delete)
- Search & filter tasks
- Responsive and clean UI
- Modular and scalable project structure

---

## 📂 Project Structure

frontend/
│
├── src/
│ ├── api/ # Axios configuration
│ ├── context/ # Auth context
│ ├── components/ # Reusable components
│ ├── pages/ # App pages
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
backend/
│
├── src/
│ ├── controllers
│ ├── routes
│ ├── middleware
│ ├── models
│ ├── config
│ └── server.js


---

## ▶️ How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone <YOUR_GITHUB_REPO_URL>
cd anything-ai-assignment

2️⃣ Backend Setup
cd backend
npm install
npm run dev


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🔐 Authentication Flow

User signs up using the Signup page

User logs in and receives a JWT token

Token is stored in localStorage

Dashboard is protected and accessible only when authenticated

Logout clears auth state and redirects to login

🧪 Demo Usage

Create a new account using the Signup page

Login using the same credentials

Add, view, search, and delete tasks from the dashboard

📈 Scaling for Production (Design Considerations)

Replace SQLite with PostgreSQL or MongoDB Atlas

Add refresh tokens for better auth security

Implement pagination for large task lists

Add rate limiting and request validation

Use Docker for consistent deployments

Introduce caching (Redis) for frequently accessed data

Environment-based configuration and CI/CD setup

📌 Notes

SQLite is used for ease of local setup and stability

The data layer is structured to allow easy migration to another database

Focus was placed on clean UI, auth flow, and frontend–backend integration

👤 Author

Shafiq Ahmed 
Frontend / Full-Stack Developer (Internship level)