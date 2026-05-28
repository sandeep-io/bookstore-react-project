// BookCard.js
// This component displays a single book as a card
// It receives: book (object with book details) and addToCart (function)

import React from "react";

function BookCard({ book, addToCart }) {
  return (
    <div style={styles.card}>
      {/* Book Cover Image */}
      <div style={styles.imageContainer}>
        <img
          src={book.image}
          alt={book.title}
          style={styles.image}
          onError={(e) => {
            // If image fails to load, show a placeholder
            e.target.src = "https://via.placeholder.com/180x260?text=Book+Cover";
          }}
        />
      </div>

      {/* Book Details */}
      <div style={styles.details}>
        {/* Category Badge */}
        <span style={styles.categoryBadge}>{book.category}</span>

        {/* Book Title */}
        <h3 style={styles.title}>{book.title}</h3>

        {/* Author */}
        <p style={styles.author}>by {book.author}</p>

        {/* Short Description */}
        <p style={styles.description}>{book.description}</p>

        {/* Price and Button Row */}
        <div style={styles.bottomRow}>
          <span style={styles.price}>₹{book.price}</span>
          <button
            style={styles.addBtn}
            onClick={() => addToCart(book)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// CSS styles for the BookCard
const styles = {
  card: {
    backgroundColor: "white",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    overflow: "hidden",
    width: "220px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
  },
  imageContainer: {
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    height: "200px",
  },
  image: {
    height: "170px",
    width: "120px",
    objectFit: "cover",
    borderRadius: "4px",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.15)",
  },
  details: {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flex: 1,
  },
  categoryBadge: {
    backgroundColor: "#e3f2fd",
    color: "#1a73e8",
    fontSize: "11px",
    fontWeight: "bold",
    padding: "3px 10px",
    borderRadius: "12px",
    display: "inline-block",
    width: "fit-content",
  },
  title: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#222",
    margin: 0,
    lineHeight: "1.3",
  },
  author: {
    fontSize: "13px",
    color: "#666",
    margin: 0,
  },
  description: {
    fontSize: "12px",
    color: "#888",
    margin: 0,
    lineHeight: "1.5",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    paddingTop: "10px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1a73e8",
  },
  addBtn: {
    backgroundColor: "#1a73e8",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "bold",
  },
};

export default BookCard;
