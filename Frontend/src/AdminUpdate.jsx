import React, { useState, useEffect } from "react";
import styles from "./AdminUpdate.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function AdminUpdate() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  // Load items from localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("adminItems")) || [];
    setItems(storedItems);
  }, []);

  // Fill form when item selected
  const handleSelect = (item) => {
    setSelectedItem(item);
    setFormData({
      name: item.name,
      price: item.price,
      description: item.description,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update item
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedItem) {
      alert("Please select an item to update");
      return;
    }
    const updatedItems = items.map((item) =>
      item.id === selectedItem.id ? { ...item, ...formData } : item
    );
    setItems(updatedItems);
    localStorage.setItem("adminItems", JSON.stringify(updatedItems));
    alert("✅ Item updated successfully");
    setSelectedItem(null);
    setFormData({ name: "", price: "", description: "" });
  };

  return (
    <div className={styles.adminpage}>
      <div className={styles.updateBox}>
        <h2 className="text-center mb-4">
          <i className="bi bi-pencil-square"></i> Update Items
        </h2>

        {/* Items List with Update Buttons & Images */}
        <div className="mb-4">
          {items.length === 0 ? (
            <p>No items added yet.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded"
              >
                <div className="d-flex align-items-center">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      width="40"
                      height="40"
                      style={{ objectFit: "cover", marginRight: "10px", borderRadius: "4px" }}
                    />
                  )}
                  <span>
                    <strong>{item.name}</strong> — Rs {item.price}
                  </span>
                </div>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleSelect(item)}
                >
                  <i className="bi bi-pencil-square"></i> Update
                </button>
              </div>
            ))
          )}
        </div>

        {/* Update Form */}
        {selectedItem && (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Item Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                name="price"
                className="form-control"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-control"
                rows="3"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success px-4">
                <i className="bi bi-save"></i> Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
