---
title: Midnight Verification
description: Learn how VeriMeZK integrates with the Midnight blockchain to verify zero-knowledge proofs on-chain.
keywords:
  [VeriMeZK, Midnight, blockchain, zk verification, smart contract, privacy]
slug: /features/midnight-verification
---

# ⛓️ Midnight Verification

VeriMeZK integrates with the **Midnight blockchain** to allow on-chain verification of zero-knowledge proofs — without compromising user privacy.

---

## 🧠 Why Midnight?

Midnight is a privacy-focused blockchain designed for confidential smart contracts. It supports ZKPs and ensures that sensitive data is never exposed on-chain.

---

## 🔗 How on-chain verification works

1. The user connects a wallet (e.g. via dApp interface)
2. The ZK proof is submitted to a smart contract
3. The contract verifies the proof against the selected rule
4. A result (valid/invalid) is returned

<div class="tip">

💡 **Tip**: Midnight contracts are designed to verify logic like “is over 18” or “is citizen of X” without storing any personal data.

</div>

---

## 🧰 Requirements

- Wallet connector (e.g. Midnight-compatible Web3 wallet)
- Testnet funds (for gas fees)
- Smart contract deployed with verification logic

---

## 🧪 Example use case

A dApp wants to restrict access to users over 21:

- The user generates a ZK proof locally
- The proof is submitted to the Midnight contract
- If valid, access is granted — without revealing age or identity

---

## 🔒 Privacy

- No document data is stored on-chain
- No face data or biometric info is transmitted
- Only the proof and rule are used in the transaction

---

## ⏭️ Next step

You can also define [custom verification rules](./custom-checks.md) to tailor the logic to your app’s needs.
