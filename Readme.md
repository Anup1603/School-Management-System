# School Management System

A comprehensive web-based application designed to streamline and automate the management of school-related activities, including admin, student, teacher, and there relative fields. The system facilitates communication, record-keeping, and administrative processes for schools.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation Guide](#installation-guide)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributions](#contributions)

---

## Project Overview

The School Management System is built to manage and organize various aspects of school administration effectively. It provides functionalities for handling admin, students, teachers, classes, notice, complain, subjects, and more in a user-friendly manner.

The goal is to reduce the workload of school administrators by providing a centralized platform to manage data, track progress, and generate reports.

---

## Features

- **Admin Management**: Manage and create all the fields like Teacher, Student, Subject, Class, Notice and Complain. Also able to create the credential of Teacher's and student's.
- **User Authentication**: Secure login and registration for administrators, teachers, and students.
- **Student Management**: Add, update, and view student details.
- **Teacher Management**: Manage teacher profiles, schedules, classes, sutudent and subject.
- **Class Management**: Assign students and teachers to classes.
- **Attendance Tracking**: Monitor and record attendance for students and teacher.
- **Grade Management**: Input and calculate grades and performance metrics.
- **Notifications and Alerts**: Send updates to students and teacher.
- **Dashboard**: Interactive dashboard for administrators with key metrics.
- **Reports**: Generate detailed reports for attendance, grades, and activities.

---

## Technologies Used

- **Frontend**: React.js, Redux, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token), bcrypt.js
- **Styling**: Material UI (MUI)
- **Version Control**: Git, GitHub
- **Others**: Postman for API testing, Mongoose for MongoDB interactions

---

## Installation Guide

### Prerequisites

- Node.js and npm installed (>=18.x)
- MongoDB database setup (>=6.x)
- Git installed

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Anup1603/School-Management-System.git
   ```

2. Navigate to the project directory:

   ```bash
   cd school-management-system
   ```

3. Install dependencies for the backend:

   ```bash
   cd backend
   npm install
   ```

4. Install dependencies for the frontend:

   ```bash
   cd ../frontend
   npm install
   ```

5. Create a `.env` file in the `backend` directory and set the following:

   ```bash
   PORT=5000

   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/school
   JWT_SECRET=your_jwt_secret
   ```

6. Start the frontend and backend:

   ```bash
   npm run dev
   ```

7. Access the application at `http://localhost:3000`.

## Usage

- Admin Portal: Manage students, teachers, and courses.
- Teacher Portal: Track attendance, manage grades, and view schedules.
- Student Portal: View grades, attendance, and announcements.
- Parent Portal: Monitor student progress and attendance. `(Optional)`

## API Endpoints

### Authentication

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| POST   | /api/login    | User login        |
| POST   | /api/register | User registration |

### Students

| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| GET    | /api/students     | Get all students           |
| POST   | /api/students     | Add a new student          |
| PUT    | /api/students/:id | Update student information |
| DELETE | /api/students/:id | Delete a student           |

### Teachers

| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| GET    | /api/teachers     | Get all teachers           |
| POST   | /api/teachers     | Add a new teacher          |
| PUT    | /api/teachers/:id | Update teacher information |
| DELETE | /api/teachers/:id | Delete a teacher           |

## Folder Structure

```bash
school-management-system/
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
├── DB/
│    ├── db.dbml/
├── README.md


```

## Contributions

Contributions are always welcome! To contribute:

- Fork the repository.
- Create a new branch `(git checkout -b feature-name)`.
- Commit your changes `(git commit -m 'Add feature')`.
- Push to the branch `(git push origin feature-name)`.

- Open a `Pull Request`.
