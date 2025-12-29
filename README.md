Playwright TypeScript automation framework for login and cart flow testing
# Playwright TypeScript Login & Cart Automation

This repository contains an end-to-end automation framework built using **Playwright with TypeScript**.  
The framework automates **login** and **cart flow** scenarios using the **Page Object Model (POM)** design pattern.

---

## 🔧 Tech Stack
- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

---

## 🧪 Test Scenarios Covered
- User login with valid credentials
- Add product to cart
- Navigate to cart and verify added item

---

## 📁 Project Structure
pages/
├── LoginPage.ts
└── CartPage.ts

tests/
├── login.spec.ts
└── cart.spec.ts

playwright.config.ts
package.json
tsconfig.json


---

 🚀 How to Run the Tests

 1️⃣ Install dependencies

npm install

2️⃣ Install Playwright browsers
npx playwright install

3️⃣ Run all tests
npx playwright test

🌐 Test Application

Automation is executed against the public demo site:
https://www.saucedemo.com
