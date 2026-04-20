# Project Report: Full-Stack Online Food Delivery Application

## 1. Abstract
The goal of this project was to design and develop a robust, user-friendly Online Food Delivery Application. With the rapid growth of the digital economy, having a reliable platform to order food has become essential for both customers and restaurant owners. This project is a complete full-stack web application built to simulate a real-world food ordering system. The frontend is powered by React and Tailwind CSS, ensuring a fast and responsive user interface, while the backend is driven by Java Spring Boot and MySQL, providing a secure and scalable architecture. The application supports user registration, secure authentication, restaurant browsing, cart management, and order placement.

---

## 2. Introduction
Over the last few years, the food delivery industry has seen massive growth. People prefer the convenience of browsing menus, customizing orders, and getting food delivered right to their doorstep. While there are giant platforms like Swiggy and UberEats, building a similar application from scratch serves as an excellent way to understand how modern e-commerce systems work under the hood.

The primary motivation behind this project was to learn how to connect a modern JavaScript framework (React) with a traditional, enterprise-grade backend framework (Spring Boot). The project focuses on creating a clean, intuitive interface for users while maintaining strict data security and validation on the server side.

### 2.1 Objectives
*   Build a Single Page Application (SPA) that doesn't require constant page reloads.
*   Implement secure user authentication so only logged-in users can place orders.
*   Design a relational database schema to handle users, restaurants, menu items, and complex order details.
*   Create a global state management system on the frontend to handle the shopping cart across different pages.

---

## 3. Technology Stack
Choosing the right tools was an important first step. I wanted technologies that are widely used in the industry today.

### 3.1 Frontend
*   **React.js**: Used as the core library for building the user interface. It allowed me to break down the UI into reusable components (like the Navbar, Cart, and Restaurant Cards).
*   **Vite**: I used Vite instead of Create React App because it offers much faster server start times and quicker hot module replacement during development.
*   **Tailwind CSS**: Instead of writing plain CSS, I used Tailwind. It’s a utility-first CSS framework that made it much easier to style the application and make it mobile-responsive without leaving the HTML/JSX files.
*   **React Context API**: Used for managing global state, specifically the shopping cart. This ensures that when a user adds an item to the cart, the cart icon in the navigation bar updates instantly, regardless of what page they are on.

### 3.2 Backend
*   **Java Spring Boot**: Chosen for its robustness and out-of-the-box configuration. Spring Boot makes it very easy to set up RESTful APIs.
*   **Spring Security & JWT (JSON Web Tokens)**: Used for securing the endpoints. When a user logs in, the server generates a JWT. The frontend then sends this token with every subsequent request to prove the user's identity.
*   **Spring Data JPA / Hibernate**: Used to interact with the database without writing raw SQL queries. It mapped my Java classes (Entities) directly to database tables.

### 3.3 Database
*   **MySQL**: A reliable relational database management system. Because an e-commerce app requires strong relationships (e.g., an order belongs to a user, and an order contains many order items), a SQL database was the logical choice over a NoSQL alternative.

---

## 4. System Architecture
The project follows a standard Client-Server architecture. 

1.  **Presentation Layer (Client)**: The React application running in the user's browser. It handles all UI rendering, form validations, and cart logic.
2.  **Application Layer (Server)**: The Spring Boot application. It exposes various REST API endpoints (like `GET /api/restaurants` or `POST /api/orders`). It contains the business logic, calculates totals, and verifies users.
3.  **Data Layer (Database)**: The MySQL server that persists all information.

### 4.1 Authentication Flow
When a user wants to register or log in, they submit a form on the React frontend. The frontend sends a POST request to `/api/auth/login`. The Spring Boot backend checks the credentials against the MySQL database. If they match, the backend generates a signed JWT and sends it back. The React app stores this token in local storage. For any action that requires authentication (like checking out), the frontend attaches this token to the `Authorization` header of the HTTP request. The backend's `JwtRequestFilter` intercepts the request, validates the token, and either allows or denies the action.

---

## 5. Implementation Details

### 5.1 Database Design
The database was structured using JPA entities. The main tables include:
*   **Users**: Stores user details and encrypted passwords.
*   **Restaurants**: Stores restaurant names, descriptions, and image URLs.
*   **MenuItems**: Linked to a specific restaurant. Stores the food name, price, and category.
*   **Orders**: Linked to a specific user. Stores the total price, order status, and order date.
*   **OrderItems**: A bridging table that links an Order to specific MenuItems, storing the quantity and price at the time of purchase.

### 5.2 Frontend Components
The frontend was divided into several key views:
*   **Home Page**: Displays a grid of available restaurants.
*   **Restaurant Details Page**: Fetches and displays the specific menu for a chosen restaurant. Users can add items to their cart from here.
*   **Cart Page**: Shows the current items in the cart, calculates the subtotal, and provides a checkout button.
*   **Authentication Pages**: Login and Registration forms with basic client-side validation.

### 5.3 Cart State Management
One of the core features was the shopping cart. I created a `CartContext` using React's Context API. This context wraps the entire application. It holds an array of cart items and provides functions like `addToCart`, `removeFromCart`, and `clearCart`. Because the state is held globally, a user can navigate between different restaurant pages without losing their selected items.

---

## 6. Challenges Faced
Building a full-stack application from scratch presented a few hurdles:

1.  **CORS (Cross-Origin Resource Sharing)**: Initially, the React app (running on port 5173) was blocked from making requests to the Spring Boot app (running on port 8080) by the browser. I had to configure global CORS settings in the Spring Boot security configuration to allow requests from the local frontend server.
2.  **JWT State Persistence**: I noticed that if a user refreshed the page, they would suddenly be logged out because React's state resets on refresh. I solved this by checking `localStorage` for a valid JWT when the application first mounts, automatically logging the user back in if the token is still valid.
3.  **Complex Entity Relationships**: Mapping the `Order` and `OrderItem` relationship in Hibernate was tricky. I had to carefully configure One-to-Many and Many-to-One annotations to ensure that when an order is saved, all its associated items are saved correctly without causing infinite recursion errors in the JSON response.

---

## 7. Conclusion and Future Scope
The project successfully meets its initial objectives. It functions as a complete platform where a user can register, browse food options, manage a cart, and place an order. Connecting React with Spring Boot proved to be a powerful combination, resulting in an application that is both fast on the front end and highly secure on the back end.

### 7.1 Future Enhancements
While the current version is functional, there are several features that could be added to make it production-ready:
*   **Payment Gateway Integration**: Integrating an API like Stripe or Razorpay to handle actual credit card transactions rather than just simulating a successful checkout.
*   **Admin Dashboard**: A separate interface for restaurant owners to log in, add new menu items, update prices, and view incoming orders.
*   **Real-time Order Tracking**: Using WebSockets to update the user in real-time when their order goes from "Preparing" to "Out for Delivery."
*   **Image Uploads**: Allowing restaurants to upload their own images to cloud storage (like AWS S3) instead of relying on static URLs.
