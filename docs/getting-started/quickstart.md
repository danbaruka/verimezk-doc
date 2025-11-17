---
title: Quickstart
description: A step-by-step walkthrough to test VeriMeZK's identity verification flow using document and face scanning.
keywords:
  [
    VeriMeZK,
    quickstart,
    zero-knowledge,
    identity verification,
    zk,
    Midnight,
    demo,
  ]
slug: /getting-started/quickstart
---

# ⚡ Quickstart

This guide walks you through a full identity verification flow using **VeriMeZK** — from scanning a document to generating a zero-knowledge proof and verifying it on the **Midnight** blockchain.

---

## 🧭 What You'll Learn

- How to scan an identity document (e.g. passport)
- How to perform face verification with liveness detection
- How to generate a zero-knowledge proof (ZKP)
- How to verify the proof on-chain using Midnight

---

## 🚀 Step-by-Step Demo

### 1. Launch the local demo

If you haven’t already, start the dev server:

```bash
npm run dev
```

Then open your browser at:

```
http://localhost:3000
```

You should see the VeriMeZK interface.

---

### 2. Scan your identity document

- Click **"Scan Document"**
- Use your webcam or upload a passport/ID image
- The app will extract MRZ (Machine Readable Zone) data

<div class="tip">

💡 **Tip**: You can use a sample passport image for testing. No real data is stored or sent anywhere.

</div>

---

### 3. Perform face verification

- Click **"Verify Face"**
- Allow camera access
- Follow the on-screen instructions (e.g. blink, turn head)

This step ensures the user is real and matches the document photo.

---

### 4. Generate a ZK proof

- Click **"Generate Proof"**
- Choose a rule (e.g. "Over 18", "Is EU citizen")
- The app will compute a zero-knowledge proof locally

<div class="tip">

🔐 **Privacy First**: The proof confirms the rule is true — without revealing your actual age, nationality, or identity.

</div>

---

### 5. Verify on Midnight (optional)

- Click **"Verify on-chain"**
- The proof is submitted to a smart contract on Midnight
- The contract checks the validity without accessing your data

<div class="warning">

⚠️ **Note**: On-chain verification requires a connected wallet and testnet funds. You can skip this step if you're testing offline.

</div>

---

## ✅ Success!

You’ve completed a full privacy-preserving identity check using VeriMeZK.

Want to go deeper?

- [Explore core features](../features/document-scanning.md)
- [Understand the architecture](../architecture.md)
- [Integrate the SDK](../api/sdk-overview.md)
