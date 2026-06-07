# Task Manager Application

A full-stack Task Management Application built using React, Vite, Node.js, Express.js, MongoDB, and JWT Authentication.

## Features

### Authentication

* User Registration
* User Login
* Password Hashing using bcryptjs
* JWT Authentication
* Protected Routes

### Task Management

* Create Task
* View All Tasks
* Edit Task
* Update Task Status
* Delete Task
* User-specific Tasks

### Frontend

* Responsive User Interface
* React Router Navigation
* Axios API Integration
* Local Storage Authentication

### Backend

* RESTful APIs
* MongoDB Database Integration
* JWT Middleware Protection
* Secure Password Storage

---

## Tech Stack

### Frontend

* React.js
* Vite
* Axios
* React Router DOM
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

---

## Project Structure

```bash
noukry
│
├── client
│   └── frontend
│       ├── src
│       │   ├── pages
│       │   ├── services
│       │   ├── App.jsx
│       │   └── main.jsx
│       └── package.json
│
├── server
│   ├── src
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd noukry
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5100
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5100
```

---

## Frontend Setup

```bash
cd client/frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5100/api
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "name": "user",
  "email": "user@gmail.com",
  "password": "123456"
}
```

---

#### Login User

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "user@gmail.com",
  "password": "123456"
}
```

---

### Tasks

#### Get All Tasks

```http
GET /api/tasks
```

#### Create Task

```http
POST /api/tasks
```

#### Update Task

```http
PUT /api/tasks/:id
```

#### Delete Task

```http
DELETE /api/tasks/:id
```

---

## Authentication

Protected APIs require JWT Token:

```http
Authorization: Bearer <token>
```

---

## Screenshots

* Register Page
* Login Page
* Dashboard Page
* Task Creation
* Task Editing
* Task Deletion

---

## Future Improvements

* Task Categories
* Task Priority Levels
* Search and Filter Tasks
* Pagination
* User Profile Management
* Dark Mode

---

## Author

Dasari Sai Teja

GitHub: https://github.com/dasarisaiteja
