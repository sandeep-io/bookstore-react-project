// Navbar.js
// This component shows the top navigation bar of the website
// It receives props: cartCount (number of items in cart), currentPage, and setCurrentPage

import React from "react";

function Navbar({ cartCount, currentPage, setCurrentPage }) {
  return (
    <nav style={styles.navbar}>
      {/* Store Logo / Name */}
      <div style={styles.logo} onClick={() => setCurrentPage("home")}>
        📚 BookStore
      </div>

      {/* Navigation Links */}
      <div style={styles.navLinks}>
        <button
          style={currentPage === "home" ? styles.activeLinkBtn : styles.linkBtn}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </button>

        <button
          style={currentPage === "contact" ? styles.activeLinkBtn : styles.linkBtn}
          onClick={() => setCurrentPage("contact")}
        >
          Contact
        </button>

        {/* Cart Button with item count badge */}
        <button
          style={currentPage === "cart" ? styles.activeCartBtn : styles.cartBtn}
          onClick={() => setCurrentPage("cart")}
        >
          🛒 Cart
          {cartCount > 0 && (
            <span style={styles.badge}>{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
}

// Simple inline styles for the Navbar
const styles = {
  navbar: {
    backgroundColor: "#1a73e8",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
    letterSpacing: "1px",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  linkBtn: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    padding: "8px 15px",
    borderRadius: "5px",
  },
  activeLinkBtn: {
    background: "rgba(255,255,255,0.25)",
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    padding: "8px 15px",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  cartBtn: {
    backgroundColor: "white",
    border: "none",
    color: "#1a73e8",
    fontSize: "16px",
    cursor: "pointer",
    padding: "8px 18px",
    borderRadius: "20px",
    fontWeight: "bold",
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  activeCartBtn: {
    backgroundColor: "#ffd700",
    border: "none",
    color: "#333",
    fontSize: "16px",
    cursor: "pointer",
    padding: "8px 18px",
    borderRadius: "20px",
    fontWeight: "bold",
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  badge: {
    backgroundColor: "#e53935",
    color: "white",
    borderRadius: "50%",
    padding: "2px 7px",
    fontSize: "12px",
    fontWeight: "bold",
    marginLeft: "4px",
  },
};

export default Navbar;
