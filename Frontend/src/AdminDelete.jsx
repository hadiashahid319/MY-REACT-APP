import React, { useState } from "react";
import styles from "./AdminDelete.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { deleteItem } from "./services/api.js"; // adjust path
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
export default function AdminDelete() {
  // 🔹 Sample array of items
  const initialItems = [
    {
      id: 1,
      name: "Mirror",
      category: "Decor",
      price: 150,
      image: mirror1,
    },
    {
      id: 2,
      name: "Vase",
      category: "Decor",
      price: 200,
      image: vase1,
    },
    {
      id: 3,
      name: "Candle",
      category: "Home",
      price: 100,
      image: candle1,
    },
  ];

  const [items, setItems] = useState(initialItems);

  // 🔹 Delete item


const handleDelete = async (item) => {
  try {
    // Send whole item to backend
    const result = await deleteItem(item);
    console.log(result.message); // "Item deleted successfully"

    // Remove from frontend state
    setItems(items.filter((i) => i.id !== item.id));
  } catch (err) {
    console.error("Error deleting item:", err);
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
                      onClick={() => handleDelete(it)} // send whole item object
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
