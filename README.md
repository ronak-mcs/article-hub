# 📰 Mini Content Hub

## 🚀 Overview

Article Hub is a full-stack web application where users can browse articles and add comments. No authentication is required.

---

## 🛠 Tech Stack

### Backend

* NestJS
* Prisma ORM
* PostgreSQL

### Frontend

* Next.js (App Router)
* React

---

## ✨ Features

* View all articles
* View single article with full content
* Add comments to articles
* Create new articles
* Server-side validation
* Clean and responsive UI

---

## 📂 Project Structure

```
task-article/
  task-article-API/
  task-article-frontend/
  README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone <your-repo-url>
cd task-article
```

---

### 2️⃣ Backend Setup

```
cd task-article-API
npm install
```

Create `.env` file:

```
DATABASE_URL=your_database_url
```

Run:

```
npx prisma migrate dev
npx prisma generate
npm run start:dev
```

---

### 3️⃣ Frontend Setup

```
cd task-article-frontend
npm install
```

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:8888/api
```

Run:

```
npm run dev
```

---

## 🌐 API Endpoints

### Articles

* GET `/api/articles`
* GET `/api/articles/:slug`
* POST `/api/articles`


### Comments

* GET `/api/articles/:slug/comments`
* POST `/api/articles/:slug/comments`

---

for pagination i took default items per page is 3

## 📌 Notes

* No authentication required
* Clean architecture and modular code
* Easy to extend (pagination, filters, etc.)

---

## 👨‍💻 Author

Ronak Makwana
