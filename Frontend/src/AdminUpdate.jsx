import React, { useState, useEffect } from "react";
import styles from "./AdminUpdate.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { updateItem } from "./services/api";
// 🔹 Candles imports
import candle1 from "./assets/Hom/candles/candle1.jpg";
import candle2 from "./assets/Hom/candles/candle2.jpg";
import candle3 from "./assets/Hom/candles/candle3.jpg";
import candle4 from "./assets/Hom/candles/candle4.jpg";
import candle5 from "./assets/Hom/candles/candle5.jpg";
import candle6 from "./assets/Hom/candles/candle6.jpg";
import candle7 from "./assets/Hom/candles/candle7.jpg";
import candle8 from "./assets/Hom/candles/candle8.jpg";
import candle9 from "./assets/Hom/candles/candle9.jpg";
import candle10 from "./assets/Hom/candles/candle10.jpg";
import candle11 from "./assets/Hom/candles/candle11.jpg";
import candle12 from "./assets/Hom/candles/candle12.jpg";
import candle13 from "./assets/Hom/candles/candle13.jpg";
import candle14 from "./assets/Hom/candles/candle14.jpg";
import candle15 from "./assets/Hom/candles/candle15.jpg";
import candle16 from "./assets/Hom/candles/candle16.jpg";
import candle17 from "./assets/Hom/candles/candle17.jpg";
import candle18 from "./assets/Hom/candles/candle18.jpg";

// 🔹 Mirrors imports
import mirror1 from "./assets/Hom/mirrors/mirror1.jpg";
import mirror2 from "./assets/Hom/mirrors/mirror2.jpg";
import mirror3 from "./assets/Hom/mirrors/mirror3.jpg";
import mirror4 from "./assets/Hom/mirrors/mirror4.jpg";
import mirror5 from "./assets/Hom/mirrors/mirror5.jpg";
import mirror6 from "./assets/Hom/mirrors/mirror6.jpg";
import mirror7 from "./assets/Hom/mirrors/mirror7.jpg";
import mirror8 from "./assets/Hom/mirrors/mirror8.jpg";
import mirror9 from "./assets/Hom/mirrors/mirror9.jpg";
import mirror10 from "./assets/Hom/mirrors/mirror10.jpg";
import mirror11 from "./assets/Hom/mirrors/mirror11.jpg";
import mirror12 from "./assets/Hom/mirrors/mirror12.jpg";
import mirror13 from "./assets/Hom/mirrors/mirror13.jpg";
import mirror14 from "./assets/Hom/mirrors/mirror14.jpg";
import mirror15 from "./assets/Hom/mirrors/mirror15.jpg";
import mirror16 from "./assets/Hom/mirrors/mirror16.jpg";
import mirror17 from "./assets/Hom/mirrors/mirror17.jpg";
import mirror18 from "./assets/Hom/mirrors/mirror18.jpg";

// 🔹 Vases imports
import vase1 from "./assets/Hom/vases/vase1.jpg";
import vase2 from "./assets/Hom/vases/vase2.jpg";
import vase3 from "./assets/Hom/vases/vase3.jpg";
import vase4 from "./assets/Hom/vases/vase4.jpg";
import vase5 from "./assets/Hom/vases/vase5.jpg";
import vase6 from "./assets/Hom/vases/vase6.jpg";
import vase7 from "./assets/Hom/vases/vase7.jpg";
import vase8 from "./assets/Hom/vases/vase8.jpg";
import vase9 from "./assets/Hom/vases/vase9.jpg";
import vase10 from "./assets/Hom/vases/vase10.jpg";
import vase11 from "./assets/Hom/vases/vase11.jpg";
import vase12 from "./assets/Hom/vases/vase12.jpg";
import vase13 from "./assets/Hom/vases/vase13.jpg";
import vase14 from "./assets/Hom/vases/vase14.jpg";
import vase15 from "./assets/Hom/vases/vase15.jpg";
import vase16 from "./assets/Hom/vases/vase16.jpg";
import vase17 from "./assets/Hom/vases/vase17.jpg";
import vase18 from "./assets/Hom/vases/vase18.jpg";

// 🔹 Frames imports
import frame1 from "./assets/Hom/frames/frame1.jpg";
import frame2 from "./assets/Hom/frames/frame2.jpg";
import frame3 from "./assets/Hom/frames/frame3.jpg";
import frame4 from "./assets/Hom/frames/frame4.jpg";
import frame5 from "./assets/Hom/frames/frame5.jpg";
import frame6 from "./assets/Hom/frames/frame6.jpg";
import frame7 from "./assets/Hom/frames/frame7.jpg";
import frame8 from "./assets/Hom/frames/frame8.jpg";
import frame9 from "./assets/Hom/frames/frame9.jpg";
import frame10 from "./assets/Hom/frames/frame10.jpg";
import frame11 from "./assets/Hom/frames/frame11.jpg";
import frame12 from "./assets/Hom/frames/frame12.jpg";
import frame13 from "./assets/Hom/frames/frame13.jpg";
import frame14 from "./assets/Hom/frames/frame14.jpg";
import frame15 from "./assets/Hom/frames/frame15.jpg";
import frame16 from "./assets/Hom/frames/frame16.jpg";
import frame17 from "./assets/Hom/frames/frame17.jpg";
import frame18 from "./assets/Hom/frames/frame18.jpg";
export default function AdminUpdate() {
   const [items, setItems] = useState([
    {
      id: 1,
      name: "Mirror",
      price: 150,
      description: "Beautiful mirror",
      image: mirror1,
    },
    {
      id: 2,
      name: "Vase",
      price: 200,
      description: "Decorative vase",
      image: vase1,
    },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  // Select item
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

  // Update item in array only
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await updateItem({ id: selectedItem.id, ...formData });
    console.log("Frontend: Data updated");
    console.log("Backend response:", response.data.message);
  } catch (error) {
    console.log("Error:", error.response?.data || error.message);
  }

  // Update frontend array
  const updatedItems = items.map((item) =>
    item.id === selectedItem.id ? { ...item, ...formData } : item
  );
  setItems(updatedItems);
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
                  className={styles.button}
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
