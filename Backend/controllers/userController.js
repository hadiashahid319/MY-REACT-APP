export const viewuser = (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("📩 Login data received:");
    console.log("Email:", email);
    console.log("Password:", password);

    res.json({ message: "Login successful!" });

  } catch (error) {
    console.error("Error:", error);
  }
};
