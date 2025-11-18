import Item from "../models/adminadditems.js";

// Add new item
export const createItem = async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;

    const newItem = new Item({ name, description, price, category, image });
    await newItem.save();

    res.status(201).json({ message: "Item added successfully!", item: newItem });
  } catch (error) {
    res.status(500).json({ message: "Error adding item", error: error.message });
  }
};
