# PrimeChoice E-commerce Frontend

This is the frontend application for **PrimeChoice**, a modern e-commerce web platform built using React and Vite. This frontend interfaces with a Java Spring Boot backend and provides a seamless shopping experience for customers.

## 🌐 Live Demo


## 🛠️ Tech Stack

- **Frontend Framework**: React.js + Vite
- **Styling**: CSS Modules
- **Routing**: React Router DOM
- **State Management**: Context API 
- **HTTP Client**: Axios 
- **Hosting**: Vercel  

## 📁 Folder Structure

```plaintext
frontend/
├── public/                  # Static files served directly
│   ├── background.jpg
│   ├── login-illustration.png
│   ├── shipped.jpg
│   └── vite.svg
├── src/                     # Application source code
│   ├── assets/                  # Extra images and icons
│   ├── AdminDashboard.jsx       # Admin dashboard UI
│   ├── AdminLogin.jsx           # Admin login page
│   ├── App.css
│   ├── App.jsx                  # Main App component
│   ├── CartIcon.jsx
│   ├── CartPage.css
│   ├── CartPage.jsx             # Shopping cart page
│   ├── CategoryNavigation.jsx   # Category listing/navigation
│   ├── CustomerHomePage.jsx     # Home page for customers
│   ├── CustomModal.jsx          # Modal/dialog component
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── index.css
│   ├── LoginPage.jsx            # Customer login page
│   ├── Logo.jsx
│   ├── logo.png
│   ├── main.jsx                 # Entry point
│   ├── OrderPage.jsx            # Order history/details
│   ├── ProductList.jsx          # Product listings
│   ├── ProfileDropdown.jsx      # User/admin profile menu
│   ├── RegistrationPage.jsx     # User registration
│   ├── Routes.jsx               # App route definitions
│   └── useravatar.png
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```



## 🚀 Features

- 🔐 User Registration and Login (JWT-based)
- 🛍️ Product Listing with Filters
- 🧾 Shopping Cart and Checkout Flow
- 👤 Admin Dashboard (accessible only to admin users)
- 📦 Order History
- 📱 Fully Responsive UI

## 📦 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/VaddiNaveenKumar/PrimeChoice_Ecommerce_frontend.git
cd PrimeChoice_Ecommerce_frontend
npm install
```

### Running Locally

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Environment Variables

Create a `.env` file in the root with:

```
VITE_BACKEND_URL=http://localhost:9090/api
```

## 🔄 API Integration

- All API calls are configured to communicate with the Spring Boot backend.
- Axios is used for HTTP requests.



## 📤 Deployment

Hosted on Vercel. Connect this repo to your Vercel dashboard and deploy.

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.


---

**Frontend for the [PrimeChoice Ecommerce](https://github.com/VaddiNaveenKumar/PrimeChoice_Ecommerce_backend)** backend.

## 👨💻 Author

Naveen Kumar Vaddi  
GitHub: [VaddiNaveenKumar](https://github.com/VaddiNaveenKumar)
