import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./AdminItems.module.css";
import { addItem} from "./services/api.js";
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

// 🔹 Organize in arrays
export const imageOptions = {
  candles: [candle1,candle2,candle3,candle4,candle5,candle6,candle7,candle8,candle9,candle10,
            candle11,candle12,candle13,candle14,candle15,candle16,candle17,candle18],
  mirrors: [mirror1,mirror2,mirror3,mirror4,mirror5,mirror6,mirror7,mirror8,mirror9,mirror10,
            mirror11,mirror12,mirror13,mirror14,mirror15,mirror16,mirror17,mirror18],
  vases: [vase1,vase2,vase3,vase4,vase5,vase6,vase7,vase8,vase9,vase10,
          vase11,vase12,vase13,vase14,vase15,vase16,vase17,vase18],
  frames: [frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9,frame10,
           frame11,frame12,frame13,frame14,frame15,frame16,frame17,frame18],
};


// 🔹 Validation schema
const itemSchema = z.object({
  name: z.string().min(2, "Item name is required"),
  description: z.string().min(5, "Description too short"),
  price: z.string().refine(val => !isNaN(Number(val)) && Number(val) > 0, { message: "Enter a valid price" }),
  category: z.string().min(1, "Select category"),
  image: z.string().min(1, "Select image"),
});
export default function AdminItems() {
  // 🔹 Static array of items (initial)
  const [items, setItems] = useState([
    { id: 1, name: "Candle 1", price: 500, description: "Beautiful candle", category: "candles", image: candle1 },
    { id: 2, name: "Candle 2", price: 600, description: "Decor candle", category: "candles", image: candle2 },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm({
    resolver: zodResolver(itemSchema),
  });


const onSubmit = async (data) => {
  console.log("Submitting item:", data); // Before sending
try {
  const response = await addItem(data);
  console.log("Backend response:", response.data);
} catch (error) {
  console.log("Full error:", error.response || error.message);
}

};


  return (
    <div className={styles.adminpage}>
      {/* Add Item Form */}
      <div className={styles.adminCard}>
        <h3 className={styles.title}>🛋️ Admin — Add Product</h3>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input {...register("name")} placeholder="Item Name" className={styles.input} />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}

          <input {...register("price")} placeholder="Price (Rs)" className={styles.input} />
          {errors.price && <p className={styles.error}>{errors.price.message}</p>}

          <select {...register("category")} className={styles.select} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select Category</option>
            {Object.keys(imageOptions).map(cat => (
              <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
            ))}
          </select>
          {errors.category && <p className={styles.error}>{errors.category.message}</p>}

          {selectedCategory && (
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <select {...field} className={styles.select}>
                  <option value="">Select Image</option>
                  {imageOptions[selectedCategory].map((img, idx) => (
                    <option key={idx} value={img}>Image {idx + 1}</option>
                  ))}
                </select>
              )}
            />
          )}
          {errors.image && <p className={styles.error}>{errors.image.message}</p>}

          <textarea {...register("description")} placeholder="Description..." className={styles.textarea} />
          {errors.description && <p className={styles.error}>{errors.description.message}</p>}

          <button type="submit" className={styles.addBtn}>➕ Add Item</button>
        </form>
      </div>

     
       
    </div>
  );
}
