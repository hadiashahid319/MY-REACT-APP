import React, { useState } from "react";
import { z } from "zod";
import styles from "./RatingPage.module.css";

// 🧠 Define validation schema using Zod
const ratingSchema = z.object({
  userName: z.string().min(1, "Please enter your name"),
  itemName: z.string().min(1, "Item name is required"),
  rating: z.number().min(1, "Please select at least 1 star").max(5),
  comment: z.string().optional(),
});

function RatingPage() {
  const [formData, setFormData] = useState({
    userName: "",
    itemName: "",
    rating: 0,
    comment: "",
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // ⭐ Handle star click
  const handleRateClick = (value) => {
    setFormData({ ...formData, rating: value });
  };

  // 🧾 Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit with Zod validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Validate with Zod
    const result = ratingSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      setMessage("");
      return;
    }

    // 🔹 If validation passes
    const newRating = {
      id: Date.now(),
      userName: formData.userName,
      itemName: formData.itemName,
      stars: formData.rating,
      comment: formData.comment || "No comment provided.",
    };

    // Save to localStorage
    const existingRatings = JSON.parse(localStorage.getItem("userRatings")) || [];
    const updatedRatings = [newRating, ...existingRatings];
    localStorage.setItem("userRatings", JSON.stringify(updatedRatings));

    setMessage("✅ Rating submitted successfully!");
    setErrors({});

    // Reset form
    setFormData({ userName: "", itemName: "", rating: 0, comment: "" });
  };

  return (
    <div className={styles.ratingWrapper}>
      <div className={styles.ratingContainer}>
        <h2 className="heading mb-3 text-center">🌟 Rate an Item</h2>

        <form onSubmit={handleSubmit}>
          {/* 👤 Name */}
          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            className="form-control mb-2 input-box"
            value={formData.userName}
            onChange={handleChange}
          />
          {errors.userName && (
            <div className="text-danger small">{errors.userName}</div>
          )}

          {/* 🏷️ Item Name */}
          <input
            type="text"
            name="itemName"
            placeholder="Enter item name"
            className="form-control mb-2 input-box"
            value={formData.itemName}
            onChange={handleChange}
          />
          {errors.itemName && (
            <div className="text-danger small">{errors.itemName}</div>
          )}

          {/* 💬 Comment */}
          <textarea
            name="comment"
            placeholder="Write your comment..."
            className="form-control mb-3"
            value={formData.comment}
            onChange={handleChange}
            rows="3"
          ></textarea>

          {/* ⭐ Star Rating */}
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((value) => (
              <i
                key={value}
                onClick={() => handleRateClick(value)}
                className={`bi bi-star-fill ${styles.starIcon} ${
                  value <= formData.rating ? styles.active : ""
                }`}
              ></i>
            ))}
          </div>
          {errors.rating && (
            <div className="text-danger small">{errors.rating}</div>
          )}

          <button
            type="submit"
            className="btn btn-warning w-100 fw-semibold mt-3"
          >
            Submit Rating
          </button>
        </form>

        {/* 🟢 Status message */}
        {message && <div className="alert alert-info mt-3">{message}</div>}
      </div>
    </div>
  );
}

export default RatingPage;
