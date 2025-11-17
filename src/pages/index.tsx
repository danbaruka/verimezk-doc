import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title="VeriMeZK Documentation"
      description="Privacy-first identity verification using zero-knowledge proofs and Midnight blockchain"
    >
      <main className={styles.hero}>
        <section className={styles.intro}>
          <img
            src="/img/logo.png"
            alt="VeriMeZK Logo"
            className={styles.logo}
          />
          <h1>Welcome to VeriMeZK Docs 👋</h1>
          <p>
            VeriMeZK is a lightweight, open-source toolkit for
            privacy-preserving identity verification using zero-knowledge proofs
            — all processed locally, with optional on-chain verification via the
            Midnight blockchain.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary" to="/docs/intro">
              🚀 Get Started
            </Link>
            <Link
              className="button button--secondary"
              to="/docs/concepts/zk-proofs"
            >
              🔐 Learn ZK Basics
            </Link>
          </div>
        </section>

        {/* <section className={styles.features}>
          <h2>🔍 Explore the Docs</h2>
          <ul>
            <li>
              <Link to="/getting-started/quickstart">⚡ Quickstart</Link>
            </li>
            <li>
              <Link to="/features/document-scanning">🧾 Document Scanning</Link>
            </li>
            <li>
              <Link to="/features/face-verification">🧑‍🦰 Face Verification</Link>
            </li>
            <li>
              <Link to="/features/proof-generation">🧠 Proof Generation</Link>
            </li>
            <li>
              <Link to="/features/midnight-verification">
                ⛓️ Midnight Integration
              </Link>
            </li>
            <li>
              <Link to="/features/custom-checks">🧩 Custom Checks</Link>
            </li>
            <li>
              <Link to="/architecture">🏗️ Architecture Overview</Link>
            </li>
            <li>
              <Link to="/api/sdk-overview">🧰 SDK Reference</Link>
            </li>
          </ul>
        </section>

        <section className={styles.community}>
          <h2>💬 Join the Community</h2>
          <p>We’re open-source and community-driven. Come build with us!</p>
          <ul>
            <li>
              <a href="https://github.com/VeriMeZK/VeriMeZK">GitHub</a>
            </li>
            <li>
              <a href="https://verimezk.org/discord">Discord</a>
            </li>
            <li>
              <a href="https://verimezk.org/blog">Blog</a>
            </li>
          </ul>
        </section> */}
      </main>
    </Layout>
  );
}
