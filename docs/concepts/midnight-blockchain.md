---
title: Midnight Blockchain
description: Learn how the Midnight blockchain enables private, on-chain verification of identity proofs in VeriMeZK.
keywords:
  [Midnight, blockchain, privacy, smart contracts, zero-knowledge, identity]
slug: /concepts/midnight-blockchain
---

# 🌑 Midnight Blockchain

**Midnight** is a privacy-first blockchain that supports confidential smart contracts and zero-knowledge proof verification. VeriMeZK uses Midnight to enable **on-chain identity verification** — without compromising user privacy.

---

## 🧠 Why Midnight?

Midnight is designed for:

- **Confidential smart contracts**
- **ZK-friendly architecture**
- **Decentralized identity use cases**
- **Regulatory compliance without data exposure**

---

## 🔗 How VeriMeZK uses Midnight

1. A user generates a ZK proof locally
2. The proof is submitted to a smart contract on Midnight
3. The contract verifies the proof against the rule
4. The result is stored or used in a dApp

<div class="tip">

💡 **Example**: A DAO on Midnight can require “over 18” proof to vote — without knowing your age.

</div>

---

## 🔒 Privacy by design

- No personal data is stored on-chain
- No document or biometric data is revealed
- Only the proof and rule are submitted

---

## 🧰 Integration requirements

- Wallet connection (Midnight-compatible)
- Smart contract with verification logic
- Optional: frontend dApp using VeriMeZK SDK

---

## 🧩 Related topics

- [Midnight Verification](../features/midnight-verification.md)
- [Architecture Overview](../architecture.md)
