// Footer.js
// This component shows the footer at the bottom of every page

import React from "react";

function Footer({ setCurrentPage }) {
  return (
    <footer style={styles.footer}>
      {/* Top section with columns */}
      <div style={styles.footerTop}>

        {/* Column 1: About */}
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>📚 BookStore</h3>
          <p style={styles.columnText}>
            Your one-stop destination for all kinds of books. From classics to contemporary, we have it all.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Quick Links</h4>
          <button style={styles.footerLink} onClick={() => setCurrentPage("home")}>
            Home
          </button>
          <button style={styles.footerLink} onClick={() => setCurrentPage("cart")}>
            Cart
          </button>
          <button style={styles.footerLink} onClick={() => setCurrentPage("contact")}>
            Contact Us
          </button>
        </div>

        {/* Column 3: Categories */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Categories</h4>
          <p style={styles.columnText}>📖 Fiction</p>
          <p style={styles.columnText}>🔬 Science</p>
          <p style={styles.columnText}>📜 History</p>
          <p style={styles.columnText}>💼 Business</p>
          <p style={styles.columnText}>🧙 Fantasy</p>
          <p style={styles.columnText}>🌱 Self-Help</p>
        </div>

        {/* Column 4: Contact Info */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Contact</h4>
          <p style={styles.columnText}>📍 751024 Book Lane, Bhubaneswar</p>
          <p style={styles.columnText}>📞 +91 91247 69332</p>
          <p style={styles.columnText}>✉️ paridasandeep.in@bookstore.com</p>
          <p style={styles.columnText}>🕐 Mon-Sat: 9 AM - 6 PM</p>
        </div>
      </div>

      {/* Divider line */}
      <div style={styles.divider}></div>

      {/* Bottom section: copyright */}
      <div style={styles.footerBottom}>
        <p style={styles.copyright}>
          © 2024 BookStore. All rights reserved. Made for book lovers.
        </p>
      </div>
    </footer>
  );
}

// CSS styles for Footer
const styles = {
  footer: {
    backgroundColor: "#1a1a2e",
    color: "#ccc",
    padding: "40px 40px 20px 40px",
    marginTop: "auto",
  },
  footerTop: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: "30px",
  },
  column: {
    flex: 1,
    minWidth: "170px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  columnTitle: {
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    margin: "0 0 10px 0",
  },
  columnText: {
    fontSize: "13px",
    color: "#aaa",
    margin: 0,
    lineHeight: "1.6",
  },
  footerLink: {
    background: "none",
    border: "none",
    color: "#aaa",
    fontSize: "13px",
    cursor: "pointer",
    textAlign: "left",
    padding: "3px 0",
  },
  divider: {
    borderTop: "1px solid #333",
    marginBottom: "20px",
  },
  footerBottom: {
    textAlign: "center",
  },
  copyright: {
    fontSize: "13px",
    color: "#777",
    margin: 0,
  },
};

export default Footer;
