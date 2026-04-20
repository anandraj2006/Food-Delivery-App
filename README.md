# Online Food Delivery App

A comprehensive full-stack online food delivery application. This platform allows users to browse restaurants, view menus, add items to their cart, and place orders securely. 

## 🚀 Features

*   **User Authentication**: Secure login and registration using JWT (JSON Web Tokens).
*   **Restaurant & Menu Browsing**: Explore different restaurants and their specific menus.
*   **Shopping Cart**: Add, update, and remove items from the cart.
*   **Order Management**: Place orders and view order history.
*   **Responsive Design**: A beautiful, modern, and dynamic UI built with Tailwind CSS.

## 🛠️ Tech Stack

### Frontend
*   **React** (via Vite)
*   **Tailwind CSS** for styling
*   **Context API** for state management (Cart state)

### Backend
*   **Spring Boot** (Java)
*   **Spring Security & JWT** for authentication and authorization
*   **MySQL** for the relational database
*   **Hibernate / Spring Data JPA** for database interactions

## 📂 Project Structure

```
online-food-delivery/
├── backend/          # Spring Boot Java Backend
│   ├── src/main/java # Source code (Controllers, Entities, Repositories, Security)
│   └── pom.xml       # Maven dependencies
└── frontend/         # React Frontend
    ├── src/          # Components, Pages, Context, Assets
    └── package.json  # NPM dependencies
```

## 💻 Getting Started

### Prerequisites
*   [Node.js](https://nodejs.org/) (v16+)
*   [Java Development Kit (JDK)](https://adoptium.net/) (v17+)
*   [Maven](https://maven.apache.org/)
*   [MySQL Server](https://www.mysql.com/)

### 1. Backend Setup
1. Open the `backend` folder in your IDE.
2. Update the `application.properties` file located in `backend/src/main/resources/` with your local MySQL database credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/food_delivery_db
   spring.datasource.username=your_mysql_username
   spring.datasource.password=your_mysql_password
   ```
3. Run the Spring Boot application using your IDE or via the terminal:
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```
   *The backend will typically start on `http://localhost:8080`.*

### 2. Frontend Setup
1. Open a new terminal and navigate to the `frontend` folder.
2. Install the required dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The frontend will typically start on `http://localhost:5173`.*

---
*Developed as a full-stack learning project.*