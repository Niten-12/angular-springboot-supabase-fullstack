# Spring Boot Authentication Backend

This is a backend authentication system built with Spring Boot, using JWT for security and MySQL for data persistence.

---

F7v5d1mpHo9amHOh

## 🗂️ Project Structure

Frontend-Backend/
└── backend/
├── .mvn/
├── src/
│ └── main/
│ ├── java/
│ │ └── com/example/backend/
│ │ ├── controller/
│ │ │ └── AuthController.java
│ │ ├── dto/
│ │ │ ├── AuthenticationRequest.java
│ │ │ ├── AuthenticationResponse.java
│ │ │ └── RegistrationRequest.java
│ │ ├── model/
│ │ │ └── User.java
│ │ ├── repository/
│ │ │ └── UserRepository.java
│ │ ├── security/
│ │ ├── service/
│ │ │ └── UserService.java
│ │ └── BackendApplication.java
│ ├── resources/
│ │ ├── db/
│ │ │ ├── create_tables.sql
│ │ │ └── users.csv
│ │ ├── static/
│ │ ├── templates/
│ │ └── application.properties
├── test/
├── target/
└── .gitattributes
