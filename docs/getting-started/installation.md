---
title: Installation Guide
description: Step-by-step instructions to install and run VeriMeZK locally for development and testing.
keywords:
  [
    VeriMeZK,
    installation,
    setup,
    zero-knowledge,
    zk,
    identity,
    Midnight,
    client-side,
  ]
slug: /getting-started/installation
---

# 🛠️ Installation Guide

This guide walks you through installing **VeriMeZK** and preparing your environment for development and integration.

---

## ✅ Prerequisites

Before installing VeriMeZK, make sure your system meets the following requirements:

- **Node.js** ≥ 18.x
- **npm** or **yarn**
- A modern browser (Chrome, Firefox, Brave, etc.)
- Basic knowledge of JavaScript or TypeScript
- Optional: familiarity with ZKPs or blockchain concepts

<div class="tip">

💡 **Tip**: VeriMeZK runs entirely client-side. No backend or server setup is required to start experimenting.

</div>

---

## 📦 Installation Steps

### 1. Clone the repository

```bash
git clone https://github.com/VeriMeZK/VeriMeZK.git
cd VeriMeZK
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

### 3. Start the development server

```bash
npm run dev
```

This will launch the local demo interface at `http://localhost:3000`.

---

## 🧪 Verify the setup

Once the app is running:

- You should see the **VeriMeZK demo interface**
- Try scanning a sample document or uploading a passport image
- The app will extract MRZ data and prompt for face verification

<div class="tip">

📌 **Note**: All processing happens locally. No data is sent to any server — even during face verification or proof generation.

</div>

---

## 🧰 Troubleshooting

If you encounter issues:

- Make sure your Node version is compatible (`node -v`)
- Delete `node_modules` and reinstall:
  ```bash
  rm -rf node_modules
  npm install
  ```
- Check for missing dependencies or peer conflicts in the terminal logs
- If using Windows, ensure proper permissions for webcam access

<div class="warning">

⚠️ **Warning**: Some browser extensions (like privacy blockers) may interfere with webcam or document scanning. Try disabling them during testing.

</div>

---

## 🧩 Next Steps

Once installed, you're ready to explore:

- [Quickstart guide](./quickstart.md)
- [Core features](../features/document-scanning.md)
- [Architecture overview](../architecture.md)
