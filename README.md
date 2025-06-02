# LoginSignupDashboard Angular SpringBoot Supabase Fullstack

This is a full-stack web application featuring a modern Angular frontend and a robust Spring Boot backend. It supports user authentication (login/signup), protected dashboard access, and uses JWT tokens for secure communication. The app integrates with Supabase PostgreSQL for database management and includes role-based access control.

## 🔧 Tech Stack
- **Frontend**: Angular
- **Backend**: Spring Boot
- **Database**: Supabase PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Spring Security
- **API Communication**: RESTful APIs

## ✨ Features
- User Signup and Login
- JWT-based authentication
- Role-based access (Admin/User)
- Secure API endpoints
- Responsive UI with Angular
- PostgreSQL integration via Supabase

## 🚀 How to Run This Project

Follow the steps below to set up and run the full-stack project on your local machine.

---

### 📁 Folder Structure
angular-springboot-supabase-fullstack/
├── frontend/ # Angular application
└── backend/ # Spring Boot application


---

### 🖥️ Prerequisites

- [Node.js & npm](https://nodejs.org/) (for frontend)
- [Angular CLI](https://angular.io/cli)
- [Java 17+](https://adoptium.net/) (for backend)
- [Maven](https://maven.apache.org/) (for Spring Boot)
- Internet access for installing dependencies

---

## ▶️ Frontend Setup (Angular)


Navigate to frontend directory
cd frontend

 Install dependencies
npm install

 Run Angular development server
ng serve

The app will be live at: http://localhost:4200/


##  ⚙️ Backend Setup (Spring Boot)

 Navigate to backend directory
cd backend

 Run the Spring Boot application
./mvnw spring-boot:run     # Linux/macOS
mvnw.cmd spring-boot:run   # Windows

 By default, it runs at: http://localhost:8080/
