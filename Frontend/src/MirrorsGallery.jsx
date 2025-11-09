import React, { useState, useEffect } from "react";
import styles from "./MirrorsGallery.module.css";

function MirrorsGallery() {
  const [mirrors, setMirrors] = useState([]);
  const [selectedMirror, setSelectedMirror] = useState(null);
  const [cart, setCart] = useState([]);

  // 🔹 Load mirror items from localStorage
  useEffect(() => {
    const allItems = JSON.parse(localStorage.getItem("adminItems")) || [];

    // Filter only mirrors
    const mirrorItems = allItems.filter(
      (item) =>
        item.category.toLowerCase() === "mirrors" ||
        item.category.toLowerCase() === "mirror"
    );

    setMirrors(mirrorItems);
  }, []);

  // 🔹 Add to cart function
  const handleAddToCart = (mirror) => {
    const updatedCart = [...cart, mirror];
    setCart(updatedCart);
    localStorage.setItem("userCart", JSON.stringify(updatedCart));
    alert(`${mirror.name} added to cart ✅`);
  };

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.heading}>🪞 Mirrors Gallery</h1>
        <p className={styles.filterLabel}>Showing all Mirrors</p>
      </div>

      {/* Mirrors Grid */}
      <div className={styles.container}>
        {mirrors.length === 0 ? (
          <p className={styles.noItems}>
            No mirrors available. Please ask the admin to add some items.
          </p>
        ) : (
          mirrors.map((mirror) => (
            <div key={mirror.id} className={styles.card}>
              <img
                src={mirror.image}
                alt={mirror.name}
                className={styles.image}
                onClick={() => setSelectedMirror(mirror)} // 🔹 Click to view details
              />
              <div className={styles.info}>
                <h3 className={styles.title}>{mirror.name}</h3>
                <p className={styles.price}>Rs {mirror.price}</p>
                <button
                  className={styles.button}
                  onClick={() => handleAddToCart(mirror)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 🔹 Modal View */}
      {selectedMirror && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedMirror(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMirror.name}</h2>
            <p>Price: Rs {selectedMirror.price}</p>
            <img
              src={selectedMirror.image}
              alt={selectedMirror.name}
              style={{ width: "100%", borderRadius: "12px" }}
            />
            <p style={{ marginTop: "10px" }}>{selectedMirror.description}</p>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedMirror(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MirrorsGallery;
