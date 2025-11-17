export const viewuser = (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Received login data:" , req.body);
    console.log("Email:", email);
    console.log("Password:", password);

   
  } catch (error) {
    console.error("Error:", error);
  }
};

