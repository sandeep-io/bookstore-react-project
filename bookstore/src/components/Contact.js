// Contact.js
// This is the Contact page with a basic form
// It has fields: Name, Email, Subject, and Message

import React, { useState } from "react";

function Contact() {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State to show success message after form submit
  const [submitted, setSubmitted] = useState(false);

  // State for simple validation error
  const [error, setError] = useState("");

  // This function runs whenever user types in any input field
  function handleChange(e) {
    // e.target.name gives which field changed (name, email, etc.)
    // e.target.value gives the new value typed
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // This function runs when user clicks Submit button
  function handleSubmit() {
    // Simple validation: check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("⚠️ Please fill in all fields before submitting.");
      return;
    }

    // Simple email format check
    if (!formData.email.includes("@")) {
      setError("⚠️ Please enter a valid email address.");
      return;
    }

    // Clear error and show success
    setError("");
    setSubmitted(true);
  }

  // Show thank you message after form is submitted
  if (submitted) {
    return (
      <div style={styles.pageContainer}>
        <div style={styles.successBox}>
          <div style={styles.successIcon}>💌</div>
          <h2 style={styles.successTitle}>Message Sent!</h2>
          <p style={styles.successText}>
            Thank you, <strong>{formData.name}</strong>! We have received your message.
            Our team will get back to you at <strong>{formData.email}</strong> within 24 hours.
          </p>
          <button
            style={styles.backBtn}
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", subject: "", message: "" });
            }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.pageContainer}>
      {/* Page Header */}
      <div style={styles.header}>
        <h1 style={styles.pageTitle}>📬 Contact Us</h1>
        <p style={styles.pageSubtitle}>
          Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div style={styles.contentLayout}>
        {/* ===== CONTACT INFO CARDS ===== */}
        <div style={styles.infoSection}>
          <h3 style={styles.infoTitle}>Get In Touch</h3>

          <div style={styles.infoCard}>
            <span style={styles.infoIcon}>📍</span>
            <div>
              <p style={styles.infoLabel}>Address</p>
              <p style={styles.infoValue}>123 Book Lane, Library Road,<br />Bhubaneswar, Odisha - 751001</p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <span style={styles.infoIcon}>📞</span>
            <div>
              <p style={styles.infoLabel}>Phone</p>
              <p style={styles.infoValue}>+91 98765 43210</p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <span style={styles.infoIcon}>✉️</span>
            <div>
              <p style={styles.infoLabel}>Email</p>
              <p style={styles.infoValue}>support@bookstore.com</p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <span style={styles.infoIcon}>🕐</span>
            <div>
              <p style={styles.infoLabel}>Working Hours</p>
              <p style={styles.infoValue}>Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* ===== CONTACT FORM ===== */}
        <div style={styles.formBox}>
          <h3 style={styles.formTitle}>Send a Message</h3>

          {/* Show error message if validation fails */}
          {error && <p style={styles.errorMsg}>{error}</p>}

          {/* Name Field */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Email Field */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Subject Field */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Subject *</label>
            <input
              type="text"
              name="subject"
              placeholder="What is your message about?"
              value={formData.subject}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Message Field */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Message *</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              style={styles.textarea}
            />
          </div>

          {/* Submit Button */}
          <button style={styles.submitBtn} onClick={handleSubmit}>
            Send Message 📤
          </button>
        </div>
      </div>
    </div>
  );
}

// CSS styles for Contact page
const styles = {
  pageContainer: {
    backgroundColor: "#f9f9f9",
    minHeight: "80vh",
    padding: "0 0 50px 0",
  },
  header: {
    backgroundColor: "#1a73e8",
    padding: "50px 40px",
    textAlign: "center",
    color: "white",
  },
  pageTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "0 0 12px 0",
  },
  pageSubtitle: {
    fontSize: "16px",
    color: "#c5d8ff",
    maxWidth: "500px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  contentLayout: {
    display: "flex",
    gap: "30px",
    padding: "40px",
    maxWidth: "1000px",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  infoSection: {
    flex: "1",
    minWidth: "260px",
  },
  infoTitle: {
    fontSize: "20px",
    color: "#222",
    marginBottom: "20px",
    margin: "0 0 20px 0",
  },
  infoCard: {
    display: "flex",
    gap: "15px",
    alignItems: "flex-start",
    backgroundColor: "white",
    padding: "18px",
    borderRadius: "10px",
    marginBottom: "15px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.07)",
  },
  infoIcon: {
    fontSize: "24px",
    marginTop: "2px",
  },
  infoLabel: {
    fontSize: "12px",
    color: "#888",
    margin: "0 0 4px 0",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  infoValue: {
    fontSize: "14px",
    color: "#333",
    margin: 0,
    lineHeight: "1.5",
  },
  formBox: {
    flex: "2",
    minWidth: "300px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },
  formTitle: {
    fontSize: "20px",
    color: "#222",
    marginBottom: "20px",
    margin: "0 0 20px 0",
  },
  errorMsg: {
    backgroundColor: "#ffebee",
    color: "#c62828",
    padding: "10px 15px",
    borderRadius: "6px",
    fontSize: "14px",
    marginBottom: "15px",
  },
  fieldGroup: {
    marginBottom: "18px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    color: "#444",
    marginBottom: "6px",
  },
  input: {
    width: "100%",
    padding: "11px 14px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "7px",
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: "#fafafa",
  },
  textarea: {
    width: "100%",
    padding: "11px 14px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "7px",
    outline: "none",
    resize: "vertical",
    boxSizing: "border-box",
    backgroundColor: "#fafafa",
    fontFamily: "inherit",
  },
  submitBtn: {
    backgroundColor: "#1a73e8",
    color: "white",
    border: "none",
    padding: "13px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
  },
  successBox: {
    textAlign: "center",
    padding: "60px 40px",
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    maxWidth: "450px",
    margin: "80px auto",
  },
  successIcon: {
    fontSize: "60px",
    marginBottom: "20px",
  },
  successTitle: {
    fontSize: "26px",
    color: "#2e7d32",
    margin: "0 0 15px 0",
  },
  successText: {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.7",
    marginBottom: "25px",
  },
  backBtn: {
    backgroundColor: "#1a73e8",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
  },
};

export default Contact;
