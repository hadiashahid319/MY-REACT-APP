export const addItem = (req, res) => {
  const itemData = req.body;

  console.log("Received item from frontend:", itemData);  // Print here

  // Save to database (optional)
  // const newItem = new ItemModel(itemData);
  // await newItem.save();

  // res.json({ message: "Item received successfully", itemData });
};

