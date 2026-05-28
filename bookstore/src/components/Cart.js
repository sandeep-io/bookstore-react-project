// Cart.js
// This component shows the Shopping Cart page
// Props: cartItems (array), removeFromCart (function), clearCart (function)

import React, { useState } from "react";

function Cart({ cartItems, removeFromCart, clearCart }) {
  // State to show order success message
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate total price of all items in cart
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Calculate total number of items
  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  // Handle Place Order button click
  function handlePlaceOrder() {
    setOrderPlaced(true);
    clearCart(); // Empty the cart
  }

  // If order was placed, show success message
  if (orderPlaced) {
    return (
      <div style={styles.successContainer}>
        <div style={styles.successBox}>
          <div style={styles.successIcon}>✅</div>
          <h2 style={styles.successTitle}>Order Placed Successfully!</h2>
          <p style={styles.successText}>
            Thank you for shopping at BookStore! Your books will be delivered within 3-5 business days.
          </p>
          <p style={styles.successText}>
            📧 A confirmation email has been sent to your registered email address.
          </p>
        </div>
      </div>
    );
  }

  // If cart is empty
  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <div style={styles.emptyBox}>
          <div style={styles.emptyIcon}>🛒</div>
          <h2 style={styles.emptyTitle}>Your Cart is Empty</h2>
          <p style={styles.emptyText}>
            Looks like you haven't added any books yet. Go back to the Home page and explore our collection!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Shopping Cart ({totalItems} items)</h2>

      <div style={styles.cartLayout}>
        {/* ===== CART ITEMS LIST ===== */}
        <div style={styles.itemsList}>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              {/* Book Image */}
              <img
                src={item.image}
                alt={item.title}
                style={styles.itemImage}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/70x100?text=Book";
                }}
              />

              {/* Book Info */}
              <div style={styles.itemInfo}>
                <h3 style={styles.itemTitle}>{item.title}</h3>
                <p style={styles.itemAuthor}>by {item.author}</p>
                <p style={styles.itemCategory}>{item.category}</p>
                <p style={styles.itemPrice}>₹{item.price} × {item.quantity}</p>
              </div>

              {/* Right side: Total and Remove */}
              <div style={styles.itemRight}>
                <span style={styles.itemTotal}>₹{item.price * item.quantity}</span>
                <button
                  style={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕ Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ===== ORDER SUMMARY BOX ===== */}
        <div style={styles.summary}>
          <h3 style={styles.summaryTitle}>Order Summary</h3>

          <div style={styles.summaryRow}>
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </div>

          <div style={styles.summaryRow}>
            <span>Subtotal:</span>
            <span>₹{totalPrice}</span>
          </div>

          <div style={styles.summaryRow}>
            <span>Delivery Charges:</span>
            <span style={{ color: "green" }}>
              {totalPrice >= 500 ? "FREE" : "₹50"}
            </span>
          </div>

          {totalPrice < 500 && (
            <p style={styles.freeDeliveryNote}>
              Add ₹{500 - totalPrice} more for FREE delivery!
            </p>
          )}

          <div style={styles.divider}></div>

          <div style={styles.totalRow}>
            <span>Grand Total:</span>
            <span style={styles.grandTotal}>
              ₹{totalPrice >= 500 ? totalPrice : totalPrice + 50}
            </span>
          </div>

          {/* Place Order Button */}
          <button style={styles.orderBtn} onClick={handlePlaceOrder}>
            Place Order
          </button>

          {/* Clear Cart Button */}
          <button style={styles.clearBtn} onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// CSS styles for Cart
const styles = {
  container: {
    padding: "30px 40px",
    backgroundColor: "#f9f9f9",
    minHeight: "80vh",
  },
  heading: {
    fontSize: "26px",
    color: "#222",
    marginBottom: "25px",
  },
  cartLayout: {
    display: "flex",
    gap: "30px",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  itemsList: {
    flex: 1,
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  cartItem: {
    backgroundColor: "white",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    padding: "15px",
    display: "flex",
    gap: "15px",
    alignItems: "center",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },
  itemImage: {
    width: "70px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "5px",
    border: "1px solid #eee",
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#222",
    margin: "0 0 5px 0",
  },
  itemAuthor: {
    fontSize: "13px",
    color: "#666",
    margin: "0 0 4px 0",
  },
  itemCategory: {
    fontSize: "12px",
    color: "#1a73e8",
    margin: "0 0 6px 0",
    fontWeight: "500",
  },
  itemPrice: {
    fontSize: "14px",
    color: "#555",
    margin: 0,
  },
  itemRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "10px",
  },
  itemTotal: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1a73e8",
  },
  removeBtn: {
    backgroundColor: "#fff0f0",
    color: "#e53935",
    border: "1px solid #ffcdd2",
    padding: "5px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "13px",
  },
  summary: {
    backgroundColor: "white",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    padding: "25px",
    width: "280px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  summaryTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "20px",
    margin: "0 0 20px 0",
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    fontSize: "14px",
    color: "#555",
  },
  freeDeliveryNote: {
    fontSize: "12px",
    color: "#e65100",
    backgroundColor: "#fff3e0",
    padding: "8px 10px",
    borderRadius: "5px",
    margin: "5px 0",
  },
  divider: {
    borderTop: "1px dashed #ccc",
    margin: "15px 0",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "20px",
  },
  grandTotal: {
    color: "#1a73e8",
    fontSize: "20px",
  },
  orderBtn: {
    backgroundColor: "#1a73e8",
    color: "white",
    border: "none",
    padding: "14px",
    width: "100%",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  clearBtn: {
    backgroundColor: "white",
    color: "#e53935",
    border: "1px solid #e53935",
    padding: "10px",
    width: "100%",
    fontSize: "14px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  emptyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
    backgroundColor: "#f9f9f9",
  },
  emptyBox: {
    textAlign: "center",
    padding: "60px 40px",
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    maxWidth: "400px",
  },
  emptyIcon: {
    fontSize: "60px",
    marginBottom: "20px",
  },
  emptyTitle: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
    margin: "0 0 10px 0",
  },
  emptyText: {
    fontSize: "15px",
    color: "#777",
    lineHeight: "1.6",
  },
  successContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
    backgroundColor: "#f9f9f9",
  },
  successBox: {
    textAlign: "center",
    padding: "60px 40px",
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    maxWidth: "450px",
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
    margin: "0 0 10px 0",
  },
};

export default Cart;
