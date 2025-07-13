# ✨ BG Removal - AI Background Remover

Remove the background from images with a single click using this sleek, modern web application powered by AI.

![bg-removal-banner](./client/public/logo.svg)

## 🌐 Live Demo

👉 [Click here to use the app](https://bg-removal-murex.vercel.app/)

---

## 📌 Features

- 🖼️ Upload any image and remove its background instantly
- ⚡ Fast and accurate processing
- 📊 Credit system for limited usage (auth-based)
- 🔐 Secure Clerk authentication
- 🎨 Sleek UI with smooth animations
- 🌈 Gradient-themed interface built with Tailwind CSS

---

## 🛠 Tech Stack

| Frontend     | Backend           | Auth  | Hosting                      |
| ------------ | ----------------- | ----- | ---------------------------- |
| React + Vite | Node.js + Express | Clerk | Vercel (Frontend & Backend ) |

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/tatuskarjaiwanth/bg-removal.git
cd bg-removal
```

### Set up environment variables

Create a `.env` file in both `client/` and `server/` folders and add your keys:

```
VITE_CLERK_PUBLISHABLE_KEY=''
VITE_BACKEND_URL = 'http://localhost:4000'
```

And on the backend:

```
MONGODB_URI = ''
CLERK_WEBHOOK_SECRET = ''
CLIPDROP_API = ''


```

### Install dependencies

For client:

```bash
cd client
npm install
npm run dev
```

For server:

```bash
cd server
npm install
npm run dev
```

---

## 🧠 How It Works

1. User uploads an image
2. App checks if the user is signed in via Clerk
3. Backend sends image to background removal API
4. Processed image is returned and displayed
5. User credits are tracked via JWT-authenticated API

---

## 💳 Payment Integration

A payment page has been designed in the frontend for UI demonstration purposes only.  
⚠️ No real payment processing is implemented yet.

---

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).

---

## 🤝 Credits

- Developed by [Tatuskar Jaiwanth](https://github.com/tatuskarjaiwanth)
- Clerk for authentication
- Razorpay for payments (if integrated)
- Background removal powered by [clipdrop](https://clipdrop.co/)

---
