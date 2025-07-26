# 🍽️ Restaurant Management System

> A full-stack **Restaurant Management Web App** built with the **MERN stack**, designed for both customers and restaurant vendors.  
> This platform enables users to browse, rate, and order from restaurants, while also allowing vendors to register and manage their own restaurant dashboards.
> This project was developed as part of a group effort. My contributions include frontend development and deployment.

🚀 [Live Demo] (https://local-eats-hub-amrish.netlify.app)
📁 [GitHub Repo](https://github.com/amrish19/Local-Eats-Hub.git)

---

## 📌 Features

### 🔐 User Authentication
- Secure **Login / Signup** system for both users and restaurant vendors.
- Role-based dashboard access.

### 🏠 Home Page
- Displays a list of all available restaurants in the user's current area.
- **Filter restaurants** by:
  - 📍 Location
  - 🍱 Food type

### 🧾 About Page
- Information about the development team and the project.

### 🏢 Register Restaurant
- Allows users to register as **vendors** with a restaurant.
- Adds the restaurant to the platform for customers to view.

### 🛠️ Manage Restaurant (Vendor Admin Panel)
- Each vendor has access to an **admin panel** to:
  - Add dishes
  - Manage orders
  - Update restaurant details

### 🍛 Restaurant Page
- On clicking a restaurant:
  - View available dishes
  - Rate dishes
  - Place an order

### 📧 Email Notification System
- Upon successful order:
  - Sends an **order summary email** to the vendor’s registered email address.

---

## ⚙️ Tech Stack

| Frontend       | Backend        | Database | Other Integrations     |
|----------------|----------------|----------|-------------------------|
| React.js       | Node.js        | MongoDB  | EmailJS                 |
| HTML/CSS       | Express.js     | Mongoose | JWT Authentication      |
| JavaScript     | REST API       |          | Netlify Deployment      |

---

## 🛠️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/Aslaan001/Food-Web
cd Food-Web

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Set up environment variables
# Create a `.env` file in both /client and /server as needed with:
# - MongoDB URI
# - JWT Secret
# - Email Service Credentials (EmailJS or other)

# Run the app
npm run dev  # runs both client and server concurrently
