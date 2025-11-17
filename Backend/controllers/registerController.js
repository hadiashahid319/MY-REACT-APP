export const registerUser = (req, res) => {
  try {
    console.log("✅ Registration Data Received:");
    console.log(req.body);  // 👈 Sab data ek saath print hoga

    res.send("Registration data received successfully");
  } catch (error) {
    console.error("Error:", error);
    res.send("Server error");
  }
};
