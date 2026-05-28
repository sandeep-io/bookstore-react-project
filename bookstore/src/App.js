// App.js
// This is the main file of our React application
// It manages:
//   1. Which page is currently visible (home / cart / contact)
//   2. The cart items (adding, removing, clearing)
// All other components are rendered from here

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import booksData from "./data/booksData";
import "./App.css";

function App() {
  // ===== STATE VARIABLES =====

  // Tracks which page to show: "home", "cart", or "contact"
  const [currentPage, setCurrentPage] = useState("home");

  // Stores items added to the cart
  // Each item is a book object PLUS a "quantity" field
  const [cartItems, setCartItems] = useState([]);

  // ===== CART FUNCTIONS =====

  // Add a book to the cart
  function addToCart(book) {
    // Check if this book is already in the cart
    const existingItem = cartItems.find((item) => item.id === book.id);

    if (existingItem) {
      // If book is already in cart, just increase its quantity by 1
      const updatedCart = cartItems.map((item) => {
        if (item.id === book.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCart);
    } else {
      // If book is NOT in cart, add it with quantity = 1
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }

    // Show a simple alert to confirm (beginner-friendly feedback)
    alert(`✅ "${book.title}" has been added to your cart!`);
  }

  // Remove a book from the cart by its id
  function removeFromCart(bookId) {
    const updatedCart = cartItems.filter((item) => item.id !== bookId);
    setCartItems(updatedCart);
  }

  // Clear all items from the cart
  function clearCart() {
    setCartItems([]);
  }

  // Calculate total number of items in cart (used for badge on cart button)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // ===== RENDER =====
  return (
    <div className="app-wrapper">
      {/* Navbar is always visible at the top */}
      <Navbar
        cartCount={cartCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Main content area - shows the correct page based on currentPage */}
      <main className="main-content">
        {currentPage === "home" && (
          <Home books={booksData} addToCart={addToCart} />
        )}

        {currentPage === "cart" && (
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        )}

        {currentPage === "contact" && <Contact />}
      </main>

      {/* Footer is always visible at the bottom */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
