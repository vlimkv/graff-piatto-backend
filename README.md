# Graff Piatto API (Backend) 🚀

**Robust RESTful API powering the Graff Gastronomy e-commerce platform.**

Built with **NestJS**, this backend handles product management, order processing, and administrative functions. It utilizes **Prisma ORM** for type-safe database interactions and ensures scalable architecture using modular design patterns.

**Frontend Repository:** [github.com/vlimkv/graff-piatto](https://github.com/vlimkv/graff-piatto)

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)

## ⚙️ Key Features

* **Modular Architecture:** Clean separation of concerns using NestJS modules (Catalog, Orders, Auth).
* **Database Management:** PostgreSQL integration via Prisma ORM with automated migrations.
* **Authentication:** Secure JWT-based auth for admin dashboard access.
* **Media Handling:** Local file upload system for product images (`/uploads`).
* **Validation:** Strict request payload validation using DTOs (Data Transfer Objects).

## 🛠 Tech Stack

* **Framework:** [NestJS](https://nestjs.com/) (Node.js)
* **ORM:** [Prisma](https://www.prisma.io/)
* **Database:** PostgreSQL
* **Language:** TypeScript
* **Package Manager:** NPM

## 📂 Project Structure

```bash
├── prisma/         # Database schema and migrations
├── src/
│   ├── ...modules  # Feature-based modules (Products, Users)
│   ├── main.ts     # Application entry point
│   └── app.module.ts
├── test/           # E2E and Unit tests
└── uploads/        # Static asset storage
```

## Getting Started

Install dependencies:

```bash
npm install
```

Setup Database:

```bash
# Create .env file with DATABASE_URL
npx prisma migrate dev
```

Run Server:

```bash
npm run start:dev
```

## ⚠️ Disclaimer

**This is a commercial project backend. Some business logic has been simplified for demonstration purposes.**
