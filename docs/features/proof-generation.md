---
title: Proof Generation
description: Learn how VeriMeZK generates zero-knowledge proofs locally to validate identity attributes without revealing personal data.
keywords: [VeriMeZK, proof generation, zero-knowledge, zk, identity, privacy]
slug: /features/proof-generation
---

# 🧠 Proof Generation

VeriMeZK allows users to generate **zero-knowledge proofs (ZKPs)** that confirm specific identity attributes — without revealing the underlying data.

---

## 🔍 What is a ZK Proof?

A **zero-knowledge proof** is a cryptographic method that lets someone prove a statement is true (e.g. “I’m over 18”) without revealing _why_ it’s true (e.g. their actual birthdate).

---

## ⚙️ How VeriMeZK generates proofs

1. The user selects a rule (e.g. "Over 18", "Is EU citizen")
2. The app uses scanned document data and face match result
3. A ZK proof is computed locally in the browser
4. The proof is formatted for on-chain or off-chain verification

<div class="tip">

🔐 **Privacy First**: No personal data is exposed. Only the proof and the rule are shared.

</div>

---

## 🧪 Example

Let’s say the user wants to prove they’re over 18:

- The app checks the birthdate from the scanned document
- It computes a ZK proof that confirms the age is ≥ 18
- The proof is valid for verification, but the birthdate is never revealed

---

## 📦 Output format

Each proof includes:

- The selected rule
- A cryptographic commitment
- A validity flag
- Optional metadata (e.g. timestamp, session ID)

---

## ⏭️ Next step

Once the proof is generated, the user can [verify it on-chain](./midnight-verification.md) or use it in an off-chain flow.
