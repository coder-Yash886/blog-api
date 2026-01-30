# 📝 Blog API

A RESTful Blog API built using **Node.js**, **Express.js**, and **MongoDB**.  
This API provides **User Authentication** and **CRUD operations** for blog posts.

---

## 🚀 Features

### 🔐 Authentication
- User Register
- User Login
- Password hashing
- JWT based authentication

### 📝 Blog Posts
- Create post (Login required)
- Get all posts
- Get single post
- Update post (Author only)
- Delete post (Author only)

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- dotenv

---

## 📁 Project Structure

blog-api/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md


---

## ⚙️ Environment Variables

Create a `.env` file in root directory:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

git clone https://github.com/coder-Yash886/blog-api.git
cd blog-api
npm install
npm run dev

http://localhost:8000

Api endpoint

| Method | Endpoint      | Description |
| ------ | ------------- | ----------- |
| POST   | /api/register | Register    |
| POST   | /api/login    | Login       |


| Method | Endpoint       | Description |
| ------ | -------------- | ----------- |
| GET    | /api/posts     | Get all     |
| GET    | /api/posts/:id | Get one     |
| POST   | /api/posts     | Create      |
| PUT    | /api/posts/:id | Update      |
| DELETE | /api/posts/:id | Delete      |

REGISTER ENDPOINT

{
  "name": "Yash",
  "email": "yash@gmail.com",
  "password": "123456"
}

LOGIN ENDPOINT
{
  "email": "yash@gmail.com",
  "password": "123456"
}

CREATE ENDPONIT

{
  "title": "My First Blog",
  "content": "This is my first post"
}
