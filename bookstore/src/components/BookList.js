// BookList.js
// This component shows the list of all books
// It also handles the Search bar and Category filter
// Props: books (array), addToCart (function)

import React, { useState } from "react";
import BookCard from "./BookCard";

function BookList({ books, addToCart }) {
  // State to store what user types in the search box
  const [searchText, setSearchText] = useState("");

  // State to store the selected category filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique category list from books array (with "All" at the beginning)
  const categories = ["All", ...new Set(books.map((book) => book.category))];

  // Filter books based on search text AND selected category
  const filteredBooks = books.filter((book) => {
    // Check if book title or author matches search text (case-insensitive)
    const matchesSearch =
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase());

    // Check if book category matches selected filter
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;

    // Book must match BOTH search and category filter
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={styles.container}>
      {/* Section Heading */}
      <h2 style={styles.heading}>📖 Our Book Collection</h2>

      {/* Search and Filter Controls */}
      <div style={styles.controls}>
        {/* Search Box */}
        <input
          type="text"
          placeholder="🔍 Search by title or author..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.searchInput}
        />

        {/* Category Filter Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={styles.selectBox}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Show how many results found */}
      <p style={styles.resultText}>
        Showing <strong>{filteredBooks.length}</strong> book(s)
        {selectedCategory !== "All" && ` in "${selectedCategory}"`}
        {searchText && ` for "${searchText}"`}
      </p>

      {/* Book Cards Grid */}
      {filteredBooks.length > 0 ? (
        <div style={styles.grid}>
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} addToCart={addToCart} />
          ))}
        </div>
      ) : (
        // Show message if no books found
        <div style={styles.noResults}>
          <p>😕 No books found. Try a different search or category.</p>
        </div>
      )}
    </div>
  );
}

// CSS styles for BookList
const styles = {
  container: {
    padding: "30px 40px",
    backgroundColor: "#f9f9f9",
    minHeight: "80vh",
  },
  heading: {
    fontSize: "28px",
    color: "#222",
    marginBottom: "20px",
    textAlign: "center",
  },
  controls: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    marginBottom: "15px",
    flexWrap: "wrap",
  },
  searchInput: {
    padding: "10px 16px",
    fontSize: "15px",
    border: "1px solid #ccc",
    borderRadius: "25px",
    width: "320px",
    outline: "none",
  },
  selectBox: {
    padding: "10px 16px",
    fontSize: "15px",
    border: "1px solid #ccc",
    borderRadius: "25px",
    backgroundColor: "white",
    cursor: "pointer",
    outline: "none",
  },
  resultText: {
    textAlign: "center",
    color: "#555",
    fontSize: "14px",
    marginBottom: "25px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
    justifyContent: "center",
  },
  noResults: {
    textAlign: "center",
    padding: "60px",
    color: "#888",
    fontSize: "18px",
  },
};

export default BookList;
