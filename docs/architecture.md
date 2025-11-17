---
title: Architecture Overview
description: Understand the modular, privacy-first architecture of VeriMeZK and how its components interact.
keywords: [VeriMeZK, architecture, design, modules, privacy, client-side, ZK]
slug: /architecture
---

# 🏗️ Architecture Overview

VeriMeZK is designed as a **modular, client-side toolkit** for privacy-preserving identity verification using zero-knowledge proofs.

---

## 🧱 Key Components

- **Document Scanner**: Extracts MRZ data from passports/IDs
- **Face Verifier**: Performs liveness detection and biometric match
- **Proof Engine**: Generates ZKPs based on selected rules
- **Verifier**: Validates proofs on-chain (Midnight) or off-chain
- **UI Layer**: Demo interface and SDK hooks

---

## 🔄 Data Flow

1. User scans document → MRZ extracted
2. Face is verified → biometric match confirmed
3. Rule is selected → ZK proof generated
4. Proof is verified → result returned

<div class="tip">

💡 **All processing is local**. No data is sent to external servers.

</div>

---

## 🔐 Privacy by Design

- No backend required
- No data storage
- No third-party APIs
- All logic runs in the browser

---

## 🧩 Extensibility

- Add new rules via [Custom Checks](./features/custom-checks.md)
- Integrate with dApps via [SDK](./api/sdk-overview.md)
