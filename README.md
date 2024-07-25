
# Real-Time Transaction Web Application

This repository contains the source code for a full-stack Real-Time Transaction Web Application. The application allows users to create accounts, sign in, transfer money to other users, and view their transaction history. It features a robust backend built with Node.js, Express, MongoDB, and JWT for authentication, and a modern frontend developed using React, Recoil for state management, and Tailwind CSS for styling.

## Project Link
- [Real-Time Transaction Web Application](https://payment-app-lyart.vercel.app/Signin)

## Screenshots
<img width="1265" alt="Screenshot 2024-04-12 at 3 28 11 PM" src="https://github.com/akshitmittal20/transact-ease-payment-app/assets/63283989/6781fb97-939c-4229-b76c-be40f90b5877">
<img width="1001" alt="Screenshot 2024-04-12 at 3 27 14 PM" src="https://github.com/akshitmittal20/transact-ease-payment-app/assets/63283989/9768ac6d-5efc-43c9-9eb0-7acf787d013b">
<img width="778" alt="Screenshot 2024-04-12 at 3 30 38 PM" src="https://github.com/akshitmittal20/transact-ease-payment-app/assets/63283989/4d9358d5-4145-4307-9387-f829690a1ea7">
<img width="634" alt="Screenshot 2024-04-12 at 3 30 30 PM" src="https://github.com/akshitmittal20/transact-ease-payment-app/assets/63283989/b8b593e6-7602-4b6b-87f2-526d13750a0d">

## Table of Contents
- [Project Description](#project-description)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Backend API Endpoints](#backend-api-endpoints)
- [Folder Structure](#folder-structure)
- [Frontend Components](#frontend-components)

## Project Description

The Real-Time Transaction Web Application is designed to provide users with a seamless experience for managing their finances online. Key features include:

- **User Account Management**: Users can create an account, sign in, update their credentials, and view their profiles.
- **Real-Time Transactions**: Users can transfer money to other users and view their balance in real-time.
- **Search Functionality**: Users can search for other users by name and initiate transactions with them.
- **Responsive Design**: The frontend is built with Tailwind CSS, ensuring a responsive and modern user interface.

## Prerequisites
- Node.js
- MongoDB
- npm or yarn

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:yourusername/transact-ease-payment-app.git
   cd transact-ease-payment-app
   ```

2. **Install Dependencies**:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Environment Variables**:
   - Create a `.env` file in the root of the backend folder with the following content:
     ```
     Port=3000
     JWT_secret=your_jwt_secret
     ```
   - Configure MongoDB connection string in `backend/db.js`.

## Running the Application

To run the backend server:
```bash
cd backend
node index.js
```
The backend server should be accessible at `http://localhost:3000`.

To run the frontend application:
```bash
cd frontend
npm run dev
```
The frontend application should be accessible at `http://localhost:3000`.

## Backend API Endpoints

### User Routes
- **POST /api/v1/user/signup**
  - Creates a new user account.
  - Request body should contain `username`, `firstname`, `lastname`, and `password`.

- **POST /api/v1/user/signin**
  - Signs in an existing user.
  - Request body should contain `username` and `password`.

- **PUT /api/v1/user**
  - Updates user credentials.
  - Request body can contain `firstname`, `lastname`, and `password`.

- **GET /api/v1/user/userprofile**
  - Gets the profile of the logged-in user.

- **GET /api/v1/user/bulk**
  - Searches for users by first name or last name.
  - Query parameter `name` can be used to search.

### Account Routes
- **GET /api/v1/account/balance**
  - Gets the balance of the logged-in user.

- **POST /api/v1/account/transfer**
  - Transfers money to another user.
  - Request body should contain `to` (recipient user ID) and `amount`.

## Folder Structure

```
transact-ease-payment-app/
├── backend/
│   ├── routes/
│   │   ├── account.js
│   │   ├── user.js
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   ├── config.js
│   ├── db.js
│   ├── index.js
│   ├── middleware.js
│   ├── package.json
│   ├── package-lock.json
│   └── zod.js
├── frontend/
│   ├── atoms/
│   │   ├── atoms.Signin.js
│   │   ├── atomsDashboard.js
│   │   ├── atomsSend.js
│   │   └── atomsSignup.js
│   ├── public/
│   │   ├── image1.png
│   │   ├── image2.png
│   │   ├── image3.png
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── AnimationUser.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── InputBox.jsx
│   │   │   ├── Logout.jsx
│   │   │   ├── Me.jsx
│   │   │   ├── Send.jsx
│   │   │   ├── Signin.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── SpinAnimation.jsx
│   │   │   ├── TransactionDone.jsx
│   │   │   └── UserColumn.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vercel.json
│   ├── vite.config.js
```

## Frontend Components

### AnimationUser.jsx
This component renders a loading animation for user data.

### Dashboard.jsx
This component renders the dashboard where users can see their balance, search for other users, and initiate transactions.

### InputBox.jsx
This component renders a reusable input box for forms.

### Logout.jsx
This component handles the logout functionality.

### Me.jsx
This component checks if the user is logged in and redirects accordingly.

### Send.jsx
This component handles the money transfer functionality.

### Signin.jsx
This component handles the sign-in functionality.

### Signup.jsx
This component handles the sign-up functionality.

### SpinAnimation.jsx
This component renders a loading spinner animation.

### TransactionDone.jsx
This component displays a success message after a transaction is completed.

### UserColumn.jsx
This component renders a user item in the user list.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
