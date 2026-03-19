# Project Setup Guide

## 📋 Prerequisites

- Node.js (v22)
- Yarn / npm
- PostgreSQL (or your preferred DB)
---

## 🛠️ Installation & Setup

### 1. **Clone the Repository**

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. **Install Dependencies**

```bash
yarn install
# or
npm install
```

### 3. **Set Up Environment Variables**

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

### 4. **Database Migration**

Deploy existing migrations:

```bash
npx prisma migrate deploy
```

### 5. **Generate Prisma Client**

```bash
npx prisma generate
```

### 6. **Run the Project**

```bash
yarn dev / yarn start:dev
```

### 7. **Reset Database (if needed)**

```bash
npx prisma migrate reset
```