# E-commerce Application using MERN Stack

This project is a full-stack E-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)

## Project Overview

This is a complete E-commerce web application that allows users to browse products, add them to their cart, and proceed to checkout. The project includes both the backend (API) and frontend (user interface), built using modern web technologies.

## Technologies Used

- **Frontend**:
  - React.js
  - React Router
  - CSS/SCSS (or any styling framework)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for schema modeling)
  - JWT (for authentication)

## Backend Setup

To set up and run the backend, follow these steps:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd E-commerce-using-Mern-stack-main
```

### 2. Install Dependencies

Navigate to the `backend` folder and install the required dependencies:

```bash
cd backend
npm install
```

### 3. Start the Backend Server

Once the dependencies are installed, you can start the backend server using:

```bash
node ./index.js
```

This will start the backend server on the default port (you can modify this in `index.js` if needed).

## Frontend Setup

To set up and run the frontend, follow these steps:

### 1. Navigate to the `frontend` Folder

```bash
cd frontend
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Start the Frontend Development Server

Run the frontend development server:

```bash
npm start
```

This will start the React development server, usually accessible at `http://localhost:3000`.

## Running the Project

After setting up both the frontend and backend, you can:

1. Run the backend using `node ./index.js` from the `backend` directory.
2. Run the frontend using `npm start` from the `frontend` directory.

Ensure both are running concurrently in separate terminal windows for the full application experience.

## Folder Structure

```
E-commerce-using-Mern-stack-main/
│
├── backend/                    # Backend application (Node.js, Express.js)
│   ├── index.js                # Entry point of the backend server
│   └── ...                     # Other backend-related files
│
├── frontend/                   # Frontend application (React.js)
│   ├── public/                 # Public static files
│   ├── src/                    # React source code
│   └── ...                     # Other frontend-related files
│
└── README.md                   # This README file
```

