import React, { useState, useEffect } from "react";
import styles from "./AdminDelete.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function AdminDelete() {
  const [items, setItems] = useState([]);

  // 🔹 Fetch admin items from localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("adminItems")) || [];
    setItems(storedItems);
  }, []);

  // 🔹 Delete item
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
      localStorage.setItem("adminItems", JSON.stringify(updatedItems));
    }
  };

  return (
    <div className={styles.adminpage}>
      <div className={styles.adminCard}>
        <h4 className="mb-4">
          <i className="bi bi-trash3 text-danger me-2"></i> Delete Items
        </h4>

        {items.length === 0 ? (
          <p className="text-muted">No items available to delete.</p>
        ) : (
          <table className="table table-striped align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Price (Rs)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, index) => (
                <tr key={it.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={it.image} alt={it.name} width="50" height="50" />
                  </td>
                  <td>{it.name}</td>
                  <td>{it.category}</td>
                  <td>{it.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(it.id)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      <i className="bi bi-trash3-fill"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
