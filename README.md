# 📦 Inventory Monitoring & Reporting System (JavaFX + Maven)

A complete **Inventory Monitoring, Management & Reporting System** built using **JavaFX**, **Maven**, **DAO Architecture**, **Service Layer**, and **CSV/SQL-based product storage**. This system provides a modern UI, inventory automation, reporting tools, and user management.

---

## 🌟 Key Highlights

✔ Fully Interactive **JavaFX UI**
✔ Structured **Maven project**
✔ **Product & User Management** with validation
✔ **DAO-Based Architecture** (ProductDAO, UserDAO)
✔ **Low Stock Alerts & Automatic Stock Checker**
✔ **JavaFX Screens** (Dashboard, Products, Reports, Settings, Users)
✔ CSV-backed Data Storage
✔ In-app **Report Generation (CSV)**

---

## 📁 Project Structure

```
Inventory Monitoring And Reporting System/
│ pom.xml
│ products.csv
│ products_queries.sql
│ UI-GUIDE.md
│
├── src/main
│   ├── java/com/inventory
│   │   ├── controller/
│   │   │   ├── InventoryController.java
│   │   │   ├── ProductController.java
│   │   │   ├── ReportController.java
│   │   │   ├── SettingsController.java
│   │   │   ├── UserController.java
│   │   │   └── InventoryApp.java
│   │   ├── model/
│   │   │   ├── Product.java
│   │   │   └── User.java
│   │   ├── service/
│   │   │   ├── InventoryManager.java
│   │   │   ├── UserService.java
│   │   │   ├── OTPService.java
│   │   │   └── StockAlertService.java
│   │   ├── DataAccessObject/
│   │   │   ├── ProductDAO.java
│   │   │   ├── UserDAO.java
│   │   │   └── impl/
│   │   │       └── UserDaoImpl.java
│   │   ├── utils/
│   │   │   ├── EmailUtil.java
│   │   │   ├── ProductDAOHelper.java
│   │   │   └── ReportGenerator.java
│   │   └── Main.java
│   └── resources/
│       ├── fxml/
│       │   ├── dashboard.fxml
│       │   ├── inventory_view.fxml
│       │   ├── products_view.fxml
│       │   ├── reports_view.fxml
│       │   ├── settings_view.fxml
│       │   └── user_dashboard.fxml
│       └── css/
│           ├── modern-style.css
│           └── style.css
```

---

## 🎨 JavaFX UI Screens Included

* **Dashboard**
* **Inventory View**
* **Products Management Page**
* **Report Generation Page**
* **User Dashboard**
* **Settings Page**

All fully connected with FXML + Controller classes.

---

## 🚀 How to Run the Project (Maven)

### **1️⃣ Clone the repository**

```
git clone https://github.com/SujanSp27/Inventory-Monitoring-And-Reporting-System.git
```

### **2️⃣ Open in IntelliJ IDEA / Eclipse**

* IntelliJ automatically loads Maven dependencies

### **3️⃣ Run the App**

Open:
`src/main/java/com/inventory/InventoryApp.java`

Click **Run ▶**.

---

## 🧠 Core Features

### 🔐 **1. User Login & OTP Verification**

* Secure login with email-based OTP
* Managed by `UserService` & `OTPService`

### 📦 **2. Inventory Management**

* Add / Update / Delete products
* Quantity validation
* Category & price management
* CSV-backed product database

### ⚠️ **3. Automatic Low Stock Alerts**

* `StockAlertService` checks for critical products
* Alerts user inside UI

### 📝 **4. Reports Module**

* Generates CSV reports such as:

  * Complete Inventory Report
  * Low Stock Report
  * Out-of-Stock Report
* Generated with timestamps

### 👥 **5. User Management**

* Add new users
* View user list
* Manage roles

---

## 📊 Example Report Output

```
Product ID,Name,Category,Price,Stock
101,HP Laptop,Electronics,45000,12
203,Whiteboard,Office,1500,2
```

Reports save to *inventory_report_YYYYMMDD.csv*

---

## 🛠️ Technologies Used

| Tech                    | Purpose                    |
| ----------------------- | -------------------------- |
| **Java 17+**            | Core backend & UI logic    |
| **JavaFX**              | User Interface             |
| **FXML**                | View layouts               |
| **CSS**                 | UI styling                 |
| **Maven**               | Dependency management      |
| **CSV / SQL**           | Product storage            |
| **DAO + Service Layer** | Clean modular architecture |

---

## 📌 Future Upgrades

* Full database migration (MySQL / PostgreSQL)
* Export reports as PDF
* Add charts & analytics in JavaFX
* Add multi-user role-based dashboard

---

## 🤝 Contribution

Pull requests are welcome.
Follow standard branching → commit → PR workflow.

---

## 📧 Contact

**Sujan Poojary**
GitHub:https://github.com/SujanSp27

---

⭐ *Don’t forget to star the repository if this project helped you!*
