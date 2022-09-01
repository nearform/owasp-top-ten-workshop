---
theme: slidev-theme-nearform
layout: default
highlighter: shiki
lineNumbers: false
---

<img class=logo src="/images/nearform.svg">

# TOWASP Top Ten Security Vulnerabilities Workshop

<img src="/assets/owasp.png" style="width: 30%;">

<div class="copyright">

© Copyright 2022 NearForm Ltd. All Rights Reserved.

</div>

---

# Introduction: OWASP

<div class="dense">

- The Open Web Application Security Project (OWASP) is a nonprofit foundation that works to improve the security of software.

- OWASP has community-led open-source software projects, hundreds of local chapters worldwide, tens of thousands of members, and leading educational and training conferences

</div>

---

# Introduction: OWASP Top Ten

<div class="dense">

- The [OWASP Top Ten](https://owasp.org/Top10/) is a standard awareness document for developers and web application security.
- It represents a broad consensus about the most critical security risks to web applications.

</div>

---

# Using the OWASP Top Ten

<div class="dense">

- On a new project, keeping the OWASP Top Ten in mind will help write resilient software from the start
- On an existing project, identify weaknesses and areas for improvement.
- Find the issues that need to be resolved immediately and those that can wait

</div>

---

# Workshop Setup

<div class="dense">

- This workshop will explain each of the 10 vulnerabilities
- There is a Fastify node.js server demonstrating the security issues
- At each step you are asked to fix the vulnerability in the server
- You will find the solution to each step in the `src/step-{n}-{name}` folder
- The 🏆 icon indicates bonus features
- The 💡 icon indicates hints

</div>

---

# Getting setup

<div class="dense">

#### Requirements

- Node LTS
- npm >= 7
- docker
- docker-compose

#### Setup

```bash
git clone https://github.com/nearform/the-fastify-workshop
npm ci

# make sure you're all set
npm test --workspaces
```

</div>

---

# Running the modules

- `cd src/step-{n}-{name}`

- Check out README.md

#### Example

```bash
cd src/step-01-hello-world

npm run start
```

---

# Testing the vulnerabilities

Some vulnerabilities will require sending customised requests to the server for testing

TODO: Add postman instructions

---

# A note before starting

<div class="dense">

- This workshop is a condensed explanation of each category of vulnerability in the top 10 for training
- Those vulnerabilities are broad and complex and can apply in a variety of scenarios that can't all be covered in those slides
- More research for project-specific concerns is encouraged, and more advanced tools are provided at the end of this workshop

</div>

---

# The Top 10

<div class="dense">

- Let's now look at the 10 vulnerabilities in the list
- Each section will explain one of them.
- This includes common vulnerabilities, consequences, and ways to prevent them

</div>

---

# A01: Broken Access Control

<div class="dense">

- [AO1:2021 - Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)
- Access control enforces that a user can only act based on specific permissions
- Incorrect permissions can lead to unauthorised access of data, or users performing actions they shouldn't be allowed to

</div>

---

# A01 Broken Access Control (2): Common vulnerabilities

<div class="dense">

- Not applying principle of least privilege: Access to a function of resource is available to anyone
- Access control checks bypassed by modifying a request or tampering with page content
- Permitting viewing or editing someone else's account, by providing its unique identifier
- CORS misconfiguration allows API access from unauthorized/untrusted origins.
- ... And more on the OWASP website

</div>

---

# A01 Broken Access Control (3): How to Prevent

<div class="dense">

- Deny access by default
- Implement access control once and re-use (avoid duplication of related code)
- Enforce user ownership when manipulating data
- ... And more on the OWASP website

</div>

---

# A01 Attack 1: Editing query parameters

TODO: Add exercise description for a "get to someone else's account page by editing GET parameters" issue

---

# A02: Cryptographic Failures

<div class="dense">

- [A02: Cryptographic Failures](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)
- Failures related to insufficient or lack of cryptography of sensitive data
- Passwords, credit card numbers, health records, personal information, business secrets
- Anything protected by privacy laws or other regulations

</div>

---

# A02 Cryptographic Failures (2): Common vulnerabilities

<div class="dense">

- Usage of weak or outdated cryptographic algorithms like md5
- Cryptographic key safety: Weak keys, default keys, keys from online tutorials, keys checked in source control...
- Lack of traffic encryption (HTTPS)
- Insufficient entropy in seed generation

</div>

---

# A02 Cryptographic Failures (3): How to Prevent

<div class="dense">

- Identify sensitive data and make sure it is encrypted. Avoid storing sensitive data unnecessarily
- Use up to date and strong standard algorithms
- Proper key/secrets management (no checking private keys in git!)
- Disable caching for responses that contain sensitive data. Do not transport sensitive data over legacy protocols like FTP and SMTP

</div>

---

# A02 Attack

TODO: Add md5 password hashing exercise

- Server has a vulnerable user route showing the encrypted password for a user (for testing purposes)
- Password is hashed in md5, so we can find the real password and login
- Objective is to fix the encryption

---

# A03: Injection

<div class="dense">

- Injections are a form of attack where a malicious payload is able to effectively inject an arbitrary bit of query or code on the target server
- Common targets: SQL, NoSQL, ORM, LDAP, JS eval

</div>

---

# A03 Injection (2): Common vulnerabilities

<div class="dense">

</div>

---

# A03 Injection (3): How to Prevent

<div class="dense">

</div>

---

# A03 Injection Attack

TODO: Server route passing unsanitised input to an eval or something which can be exploited to drop some js variables

---

# A04: Insecure Design

<div class="dense">

</div>

---

# A05: Security Misconfiguration

<div class="dense">

</div>

---

# A06: Vulnerable and Outdated Components

<div class="dense">

</div>

---

# A07: Identification and Authentication Failures

<div class="dense">

</div>

---

# A08: Software and Data Integrity Failures

<div class="dense">

</div>

---

# A09: Security Logging and Monitoring Failures

<div class="dense">

</div>

---

# A10: Server Side Request Forgery

<div class="dense">

</div>

---

# Beyond the Top 10

<div class="dense">

- The OWASP Top 10 is a good introduction to the most common issues to keep in mind while developing
- By its nature, the Top 10 is a series of guidelines but can't be tested easily as its applications are broad
- On the other hand the [OWASP Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/) is a comprehensive list of security criteria
- Those are specific, standardised and verifiable security requirements on which on app can be tested to either pass or fail

</div>

---

# Other useful OWASP resources

<div class="dense">

- The [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org) provides condensed information on specific security topics related to OWASP standards
- The [OWASP Software Assurance Maturity Model](https://owaspsamm.org) can help an organization analyze and improve their software security

</div>

---

# Thanks For Having Us!

## 👏👏👏
