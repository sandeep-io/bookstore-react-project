// Home.js
// This is the main Home page component
// It shows the Hero banner at the top, then the book listing below
// Props: books (array), addToCart (function)

import React from "react";
import BookList from "./BookList";

function Home({ books, addToCart }) {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to 📚 BookStore</h1>
          <p style={styles.heroSubtitle}>
            Discover your next favorite book. Browse our collection of over 1000+ titles
            across Fiction, Science, History, Business, and more.
          </p>
          <div style={styles.heroStats}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>1000+</span>
              <span style={styles.statLabel}>Books</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>50+</span>
              <span style={styles.statLabel}>Categories</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>Free</span>
              <span style={styles.statLabel}>Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FEATURES SECTION ===== */}
      <div style={styles.features}>
        <div style={styles.featureItem}>
          <span style={styles.featureIcon}>🚚</span>
          <span style={styles.featureText}>Free Delivery on Orders above ₹500</span>
        </div>
        <div style={styles.featureItem}>
          <span style={styles.featureIcon}>🔄</span>
          <span style={styles.featureText}>Easy 30-Day Returns</span>
        </div>
        <div style={styles.featureItem}>
          <span style={styles.featureIcon}>🔒</span>
          <span style={styles.featureText}>Secure Payment</span>
        </div>
        <div style={styles.featureItem}>
          <span style={styles.featureIcon}>⭐</span>
          <span style={styles.featureText}>Top Rated Books</span>
        </div>
      </div>

      {/* ===== BOOK LIST SECTION ===== */}
      <BookList books={books} addToCart={addToCart} />
    </div>
  );
}

// CSS styles for the Home page
const styles = {
  hero: {
    background: "linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)",
    padding: "60px 40px",
    textAlign: "center",
    color: "white",
  },
  heroContent: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  heroTitle: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "15px",
    margin: "0 0 15px 0",
  },
  heroSubtitle: {
    fontSize: "18px",
    color: "#c5d8ff",
    lineHeight: "1.7",
    marginBottom: "35px",
  },
  heroStats: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    marginTop: "30px",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  statNumber: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#ffd700",
  },
  statLabel: {
    fontSize: "14px",
    color: "#c5d8ff",
  },
  features: {
    backgroundColor: "white",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
    borderBottom: "1px solid #eee",
    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    color: "#444",
    fontWeight: "500",
  },
  featureIcon: {
    fontSize: "22px",
  },
  featureText: {
    fontSize: "14px",
  },
};

export default Home;
