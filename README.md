# Product & Invoice Management App

## 📌 Project Overview
This is a **Single Page Application (SPA)** built using **Angular 18** and **Kendo UI for Angular**. 
It includes **user authentication, product management, and invoice creation**, all using a **mock server (`json-server`)** to simulate API interactions.

---

## 🚀 Features Implemented

### 🔑 Authentication (Login Page)
- Modern login interface with Tailwind CSS.
- Hardcoded user authentication.
- Show/Hide password feature.
- Redirects authenticated users to the Home page.

### 🏠 Home Page (Dashboard)
- **Navigation**: Provides access to **Product Management** and **Invoice Management**.
- **Responsive & User-Friendly UI**.

### 🛍️ Product Management
- **Create Product**: Add a new product with name, description, and price.
- **List Products**: Displays products fetched from `db.json`.
- **Edit Product**: Implemented **popup modal** for editing.
- **Delete Product**: Removes products with confirmation.
- **CRUD Operations**: Fully functional with JSON Server.

### 🧾 Invoice Management
- **List Invoices**: Displays invoices with invoice number, total amount, and date.
- **Create Invoice**: Adds a new invoice using a form.
- **Edit/Delete Invoice**: Modify and remove invoices.
- **View Invoice Details**: Display invoice info in a **popup modal**.
  
### 🎨 UI & Styling
- Used **Tailwind CSS** for professional styling.
- Fully **responsive** (mobile design).

---

## 🛠️ Technologies Used
- **Angular 18** (Standalone components, `app.config.ts`, `app.routes.ts`)
- **Kendo UI for Angular** (UI components)
- **Tailwind CSS** (Styling)
- **JSON Server (`db.json`)** (Mock API)
- **LocalStorage** (for authentication)

---

## 🔧 Setup & Installation

1️⃣ **Clone the repository**
```sh
git clone https://github.com/ahmedrabeh/products-task.git
cd products-task
```

2️⃣ **Install dependencies**
```sh
npm install
```

3️⃣ **Run the JSON Server**
```sh
npx json-server --watch db.json --port 3000
```

4️⃣ **Run the Angular App**
```sh
ng serve
```

5️⃣ **Access the Application**
- Open [http://localhost:4200](http://localhost:4200) in your browser.


