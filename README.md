# 🔐 Next.js 16 Authentication Template

A production-ready authentication template built with **Next.js 16**, **Better Auth**, **Prisma**, and **Neon DB**. This project provides a clean and scalable foundation for implementing authentication in modern web applications.

---

## 🚀 Features

* ✅ Email & Password Authentication
* ✅ GitHub OAuth Login
* ✅ Better Auth integration (secure + modern auth handling)
* ✅ Prisma ORM for database management
* ✅ Neon DB (serverless Postgres)
* ✅ Clean and modular folder structure
* ✅ Ready for extension (Google auth, roles, sessions, etc.)

---

## 🧱 Tech Stack

| Technology  | Purpose                        |
| ----------- | ------------------------------ |
| Next.js 16  | Full-stack React framework     |
| Better Auth | Authentication system          |
| Prisma      | ORM for database access        |
| Neon DB     | Serverless PostgreSQL database |
| TypeScript  | Type safety                    |

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/AliAbdullah0/Template-Better-Auth-Email-Password
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory and add:

```env
DATABASE_URL=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
BETTER_AUTH_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🗄️ Database Setup (Prisma + Neon)

### 1. Generate Prisma client

```bash
npx prisma generate
```

### 2. Run migrations

```bash
npx prisma migrate dev
```

### 3. Open Prisma Studio (optional)

```bash
npx prisma studio
```

---

## 🧪 Running the Project

```bash
npm run dev
```

App will be available at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🔑 Authentication Flow

### Email & Password

1. User signs up with email + password
2. Credentials stored securely via Prisma
3. Login validates credentials

### GitHub OAuth

1. User clicks "Login with GitHub"
2. Redirect to GitHub OAuth
3. Callback handled by Better Auth
4. User session created

---

## 📁 Project Structure

```
├── app/
|   ├── start/        # Show current logged in users info
│   ├── api/          # Auth routes
│   ├── (auth)/       # Login / Signup pages
├── lib/
|   ├── auth-client.ts
|   ├── utils.ts
│   ├── auth.ts       # Better Auth config
│   └── prisma.ts     # Prisma client
├── prisma/
│   └── schema.prisma
├── components/
```

---

## 🔒 Security Notes

* Passwords are hashed before storage
* Environment variables are required for secrets
* OAuth handled securely via Better Auth

---

## 🧩 Extending This Template

I will soon extend this project with:

* 🔹 Google / Discord OAuth
* 🔹 Role-based access control (RBAC)
* 🔹 Email verification
* 🔹 Password reset flow
* 🔹 Multi-factor authentication (MFA)

---

## 📌 Roadmap

* [ ] Add Google Auth
* [ ] Add email verification
* [ ] Add password reset
* [ ] Add user roles

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a PR.

---

## 📄 License

MIT License

---

## ⭐ Support

If you found this helpful, give it a ⭐ on GitHub!
