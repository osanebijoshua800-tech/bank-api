# Bank API — Minimalist Premium Sandbox Dashboard

A sleek, modern, full-stack sandbox banking application built to demonstrate high-integrity, transparent transactional workflows ("glass box" logic) without processing real currency. 

This repository hosts the decoupled frontend web client, which interfaces with a live Node.js microservice to handle secure, cryptographically verified payment states via Stripe webhooks.

## 🚀 Live Demo
Experience the live production build here: [https://bank-api-hdv2.onrender.com](https://bank-api-hdv2.onrender.com)

---

## ✨ Features
*   **Minimalist UI/UX:** A clean, dark-themed dashboard built with premium deep sapphire blue and bright teal accents.
*   **Secure Stripe Lifecycle:** Implements full checkout session creation routing users to official sandbox payment protocols.
*   **Webhook-Driven State Management:** Database values and client states are exclusively altered by cryptographically verified server-side Stripe webhook events (`checkout.session.completed`).
*   **Real-time Audit Trail:** Features a live system audit logging component to monitor data integrity and webhook synchronization.

---

## 🛠️ Tech Stack
*   **Frontend:** Vanilla HTML5, Semantic CSS3 (Flexbox/Grid), Modern Asynchronous JavaScript (Fetch API)
*   **Architecture:** Decoupled frontend, hosted as a high-performance static site on Render.

---

## 🔒 Security Philosophy ("Glass Box" Model)
To ensure absolute auditability and mitigate malicious frontend requests:
1. The frontend initiates a checkout payload containing a secure tracking identifier (`userId`).
2. The payload is offloaded entirely to a trusted backend environment.
3. Account upgrades are **never** updated directly via user interaction; database modifications only execute once Stripe securely relays an authenticated webhook receipt back to the infrastructure layer.
