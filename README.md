# Real-Time Transaction Web Application - Backend

This is the backend part of the Real-Time Transaction Web Application. It provides the API endpoints for user management and transactions. The backend is built using Node.js, Express, MongoDB, and JWT for authentication.

## Project Link
- [Real-Time Transaction Web Application](https://payment-app-lyart.vercel.app/Signin)

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)

## Prerequisites
- Node.js
- MongoDB
- npm or yarn

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:yourusername/transact-ease-payment-app.git
   cd transact-ease-payment-app/backend
   

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   - Create a `.env` file in the root of the backend folder with the following content:
     ```
     Port=3000
     JWT_secret=your_jwt_secret
     ```

4. **Configure MongoDB**:
   - Replace the MongoDB connection string in `db.js` with your own MongoDB connection string.

## Running the Application

To run the application locally:
```bash
node index.js
```
The backend server should be accessible at `http://localhost:3000`.

## API Endpoints

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
backend/
├── routes/
│   ├── account.js
│   ├── user.js
│   └── index.js
├── .env
├── .gitignore
├── config.js
├── db.js
├── index.js
├── middleware.js
├── package.json
├── package-lock.json
└── zod.js
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.
Here's the `README.md` file for the frontend part of your project:

# Real-Time Transaction Web Application - Frontend

This is the frontend part of the Real-Time Transaction Web Application. It provides the user interface for user management and transactions. The frontend is built using React, Recoil, Tailwind CSS, and Axios.

## Project Link
- [Real-Time Transaction Web Application](https://payment-app-lyart.vercel.app/Signin)

## Screenshots
<img width="1265" alt="Screenshot 2024-04-12 at 3 28 11 PM" src="https://github.com/akshitmittal20/transact-ease-payment-app/assets/63283989/6781fb97-939c-4229-b76c-be40f90b5877">
<img width="1001" alt="Screenshot 2024-04-12 at 3 27 14 PM" src="https://github.com/akshitmittal20/transact-ease-payment-app/assets/63283989/9768ac6d-5efc-43c9-9eb0-7acf787d013b">
<img width="778" alt="Screenshot 2024-04-12 at 3 30 38 PM" src="https://github.com/akshitmittal20/transact-ease-payment-app/assets/63283989/4d9358d5-4145-4307-9387-f829690a1ea7">
<img width="634" alt="Screenshot 2024-04-12 at 3 30 30 PM" src="https://github.com/akshitmittal20/transact-ease-payment-app/assets/63283989/b8b593e6-7602-4b6b-87f2-526d13750a0d">

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Components](#components)

## Prerequisites
- Node.js
- npm or yarn

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:yourusername/transact-ease-payment-app.git
   cd transact-ease-payment-app/frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

## Running the Application

To run the application locally:
```bash
npm run dev
```
The frontend application should be accessible at `http://localhost:3000`.

## Folder Structure

```
frontend/
├── atoms/
│   ├── atoms.Signin.js
│   ├── atomsDashboard.js
│   ├── atomsSend.js
│   └── atomsSignup.js
├── public/
│   ├── image1.png
│   ├── image2.png
│   ├── image3.png
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── AnimationUser.jsx
│   │   ├── Dashboard.jsx
│   │   ├── InputBox.jsx
│   │   ├── Logout.jsx
│   │   ├── Me.jsx
│   │   ├── Send.jsx
│   │   ├── Signin.jsx
│   │   ├── Signup.jsx
│   │   ├── SpinAnimation.jsx
│   │   ├── TransactionDone.jsx
│   │   └── UserColumn.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
├── vite.config.js
```

## Components

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
