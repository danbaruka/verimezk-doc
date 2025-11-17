---
title: Custom Checks
description: Define your own identity verification rules using VeriMeZK's flexible proof engine.
keywords: [VeriMeZK, custom checks, identity logic, zk rules, verification]
slug: /features/custom-checks
---

# 🧩 Custom Checks

VeriMeZK lets developers define **custom identity verification rules** — enabling flexible, privacy-preserving logic tailored to their app.

---

## 🧠 What is a custom check?

A custom check is a logical rule that can be verified using ZKPs. Examples:

- “Is over 21”
- “Is from France”
- “Document is not expired”
- “Face matches document photo”

---

## 🛠️ How to define a rule

Each rule includes:

- A **name** (e.g. `isAdult`)
- A **condition** (e.g. `birthdate ≤ today - 18 years`)
- A **data source** (e.g. MRZ field, biometric match)
- A **proof template** (used to generate ZKP)

<div class="tip">

💡 **Tip**: You can combine multiple conditions to create compound rules (e.g. “is adult AND is EU citizen”).

</div>

---

## 🧪 Example

```json
{
  "rule": "isAdult",
  "condition": "birthdate ≤ today - 18y",
  "source": "document.MRZ.birthdate",
  "proof": "zkAgeProof"
}
```

---

## 🔄 Reusable logic

Custom checks can be reused across:

- Multiple apps
- Different user flows
- On-chain and off-chain verification

---

## 🔐 Privacy

- All checks are evaluated locally
- Only the result and proof are shared
- No raw data is exposed

---

## ⏭️ Next step

To integrate these checks into your app, explore the [SDK methods](../api/methods.md) and [architecture](../architecture.md).
