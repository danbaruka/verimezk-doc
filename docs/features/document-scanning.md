---
title: Document Scanning
description: Learn how VeriMeZK extracts identity data from passports and ID cards using MRZ recognition.
keywords:
  [VeriMeZK, document scanning, MRZ, identity document, OCR, zero-knowledge]
slug: /features/document-scanning
---

# 🧾 Document Scanning

VeriMeZK supports scanning of identity documents such as passports and ID cards using **MRZ (Machine Readable Zone)** recognition. This is the first step in the identity verification flow.

---

## 🧠 How it works

- The user scans or uploads a document (e.g. passport)
- The system extracts the MRZ zone using OCR (Optical Character Recognition)
- The extracted data is parsed into structured fields:
  - Full name
  - Date of birth
  - Nationality
  - Document number
  - Expiration date

<div class="tip">

💡 **Tip**: VeriMeZK uses a lightweight OCR engine optimized for browser environments. No data is sent to any server.

</div>

---

## 📷 Supported input methods

- **Webcam capture** (live scan)
- **Image upload** (JPG, PNG, PDF)

<div class="warning">

⚠️ **Note**: Make sure the MRZ zone is clearly visible and well-lit. Blurry or cropped images may fail to parse.

</div>

---

## 🧪 Sample MRZ

Example of a valid MRZ (from a passport):

```
P<UTOERIKSSON<<ANNA<MARIA<<<<<<<<<<<<<<<<<<<
L898902C36UTO7408122F1204159ZE184226B<<<<<10
```

---

## 🔐 Privacy

- All scanning and parsing happens **locally in the browser**
- No document data is stored or transmitted
- Only the extracted fields are used to generate ZK proofs

---

## ⏭️ Next step

Once the document is scanned, the user proceeds to [Face Verification](./face-verification.md) to confirm liveness and identity match.
