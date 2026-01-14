```markdown
<!-- Security Badges -->
![Security Foundational](https://img.shields.io/badge/security-foundational-blue)

<!-- Activity Badges -->
![Last Commit](https://img.shields.io/badge/commit-current-brightgreen)

<!-- Technology Badges -->
![License](https://img.shields.io/badge/license-MIT-yellow)
```
```markdown
<!-- Security Badges -->
![Security Foundational](https://img.shields.io/badge/security-foundational-blue)
![Security Scanning](https://img.shields.io/badge/security-scanning-inactive-red)

<!-- Activity Badges -->
![Last Commit](https://img.shields.io/badge/commit-recent-yellow)
![Release Status](https://img.shields.io/badge/releases-none-red)

<!-- Technology Badges -->
![License](https://img.shields.io/badge/license-MIT-yellow)

<!-- Quality Badges -->
![Documentation](https://img.shields.io/badge/docs-minimal-orange)

<!-- Community Badges -->
![Governance](https://img.shields.io/badge/governance-partial-orange)
```


**Core Badge Verification Workflow** (`.github/workflows/badge-verification.yml`):
```yaml
name: Badge Verification

on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight UTC
  push:
    paths:
      - '.github/workflows/**'
      - 'package.json'
      - 'requirements.txt'
  workflow_dispatch:

jobs:
  badge-verification:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Collect Repository Metrics
        run: |
          node scripts/collect-metrics.js
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      
      - name: Generate Badge Status
        run: |
          node scripts/compute-badges.js
      
      - name: Upload Badge Status
        uses: actions/upload-artifact@v4
        with:
          name: badge-status
          path: badge-status.json
```


```markdown
<!-- Security Badges -->
![Security Foundational](https://img.shields.io/badge/security-foundational-blue)

<!-- Activity Badges -->
![Last Commit](https://img.shields.io/badge/commit-current-brightgreen)

<!-- Technology Badges -->
![License](https://img.shields.io/badge/license-MIT-yellow)
```


```markdown
<!-- Security Badges -->
![Security Foundational](https://img.shields.io/badge/security-foundational-blue)
![Security Scanning](https://img.shields.io/badge/security-scanning-active-green)
![Dependency Status](https://img.shields.io/badge/deps-up--to--date-brightgreen)

<!-- Activity Badges -->
![Last Commit](https://img.shields.io/badge/commit-recent-yellow)
![Issues Health](https://img.shields.io/badge/issues-healthy-brightgreen)
![PR Velocity](https://img.shields.io/badge/PR-velocity-fast-brightgreen)

<!-- Maturity Badges -->
![CI Status](https://img.shields.io/badge/CI-passing-brightgreen)
![Versioning](https://img.shields.io/badge/versioning-semver-blue)
![Test Coverage](https://img.shields.io/badge/coverage-comprehensive-brightgreen)

<!-- Technology Badges -->
![Containerized](https://img.shields.io/badge/containerized-Docker-blue)
![CI Platform](https://img.shields.io/badge/CI-GitHub_Actions-blue)

<!-- Quality Badges -->
![Linting](https://img.shields.io/badge/linting-passing-brightgreen)
![Documentation](https://img.shields.io/badge/docs-complete-brightgreen)
![Code Owners](https://img.shields.io/badge/codeowners-defined-blue)

<!-- Community Badges -->
![License](https://img.shields.io/badge/license-MIT-yellow)
```



# GitDigital Products

**GitDigital Products** is an open-source organization focused on building real-world infrastructure for Web3, AI, and compliance-first systems.

This repository powers our **GitHub Pages site** and serves as the public landing hub for GitDigital Products projects, documentation, and live demos.

🌐 **Live site:**  
https://gitdigital-products.github.io

---

## What This Repo Is

This repository is the **static website root** for GitDigital Products.  
It is intentionally lightweight, framework-free, and optimized for GitHub Pages.

It provides:
- A public landing page
- Project directory & status overview
- Links to live apps, SDKs, and documentation
- A clean entry point into the GitDigital Products ecosystem

---

## Featured Projects

### 🧩 Solana KYC & Compliance SDK
A Solana-native SDK for on-chain KYC, compliance enforcement, and regulatory-aware smart contracts.

- **Live Demo:** https://gitdigital-products.github.io/solana-kyc-compliance-sdk/
- **Repository:** https://github.com/Gitdigital-products/solana-kyc-compliance-sdk
- **Status:** Live / MVP

---

### 🤖 HustleGPT (AI PaaS)
A multi-tenant AI Platform-as-a-Service designed for:
- Containerized model execution
- GPU acceleration
- Secure multi-tenant billing
- Model marketplaces and white-labeling

- **Status:** In Development
- **Org:** https://github.com/Gitdigital-products

---

### 🌐 Web3 Infrastructure Modules
A growing set of modular repositories covering:
- DNS
- CDN architectures
- Testing frameworks
- IP management
- Decentralized ops tooling

Designed to be composable, auditable, and production-ready.

---

## Repository Structure

```text
/
├── index.html        # Main landing page
├── README.md         # This file
└── assets/           # (Optional) images, icons, styles
```

---

Deployment

This site is deployed automatically using GitHub Pages.

Source:

Branch: main

Path: / (root)


Any changes pushed to main will be reflected live.


---

Philosophy

GitDigital Products is built around a few core principles:

Compliance-aware by design

Infrastructure-first thinking

Open-source, auditable systems

Production over hype

Composable modules instead of monoliths


We focus on tools that developers can actually ship.


---

Contributing

Contributions, issues, and discussions are welcome across all GitDigital Products repositories.

Start here:

https://github.com/Gitdigital-products



---

License

This repository is licensed under the MIT License, unless otherwise stated in specific subprojects.


---

© GitDigital Products
