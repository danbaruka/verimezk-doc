---
title: Zero-Knowledge Proofs
description: Understand the fundamentals of zero-knowledge proofs and how VeriMeZK uses them for private identity verification.
keywords:
  [zero-knowledge, zk, zk-proof, privacy, cryptography, identity verification]
slug: /concepts/zk-proofs
---

# 🧠 Zero-Knowledge Proofs (ZKPs)

Zero-knowledge proofs (ZKPs) are the cryptographic foundation of VeriMeZK. They allow users to **prove something is true without revealing the underlying data**.

---

## 🧪 What is a ZKP?

A **zero-knowledge proof** is a method by which one party (the prover) can convince another party (the verifier) that a statement is true, **without revealing any additional information**.

---

## 🧍 Real-world analogy

Imagine you want to prove you're over 18 without showing your ID.  
A ZKP lets you do exactly that: prove the fact, not the data.

<div class="tip">

💡 **Example**: “I’m over 18” is proven without revealing your birthdate.

</div>

---

## 🔐 Why ZKPs matter for identity

- **Privacy**: No personal data is exposed
- **Security**: No sensitive info is transmitted or stored
- **Compliance**: Enables KYC/AML checks without data retention
- **User control**: The user decides what to prove and when

---

## 🧰 Types of proofs in VeriMeZK

- **Age verification** (e.g. over 18, over 21)
- **Nationality check** (e.g. is EU citizen)
- **Document validity** (e.g. not expired)
- **Biometric match** (e.g. face matches document)

---

## ⚙️ How it works in VeriMeZK

1. Document and face data are scanned locally
2. A rule is selected (e.g. “is adult”)
3. A ZK proof is generated in the browser
4. The proof is shared with a verifier (on-chain or off-chain)

---

## 🧩 Learn more

- [Proof Generation](../features/proof-generation.md)
- [Custom Checks](../features/custom-checks.md)
