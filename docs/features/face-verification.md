---
title: Face Verification
description: Perform liveness detection and biometric matching to verify the user's identity against the scanned document.
keywords:
  [
    VeriMeZK,
    face verification,
    liveness detection,
    biometric match,
    identity check,
  ]
slug: /features/face-verification
---

# 🧑‍🦰 Face Verification

After scanning the identity document, VeriMeZK performs **face verification** to ensure the user is real and matches the document photo.

---

## 🎯 Goals

- Confirm the user is physically present (liveness detection)
- Match the live face with the document photo
- Prevent spoofing (e.g. printed photos, deepfakes)

---

## 🧬 How it works

1. The user grants camera access
2. The system captures a live video stream
3. Liveness detection is performed (e.g. blink, head turn)
4. A biometric match is computed between:
   - The live face
   - The document photo (from MRZ or chip)

<div class="tip">

💡 **Tip**: The face verification module is optimized for speed and privacy. All processing is done locally.

</div>

---

## 🔒 Privacy & Security

- No face data is uploaded or stored
- No external API calls are made
- Only a **yes/no match result** is used for proof generation

---

## 🧰 Troubleshooting

- Ensure good lighting and a neutral background
- Avoid sunglasses, masks, or hats
- Use a high-resolution webcam if possible

<div class="warning">

⚠️ **Warning**: If liveness detection fails, the user will be prompted to retry. This is a security measure to prevent spoofing.

</div>

---

## ⏭️ Next step

Once the face is verified, the user can [generate a ZK proof](./proof-generation.md) based on selected identity attributes.
