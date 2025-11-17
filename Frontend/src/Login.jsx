import { useState } from "react";
import styles from "./Login.module.css";
import sideImage from "./assets/HOM/login.jpg";
import logo from "./assets/HOM/logo.png";
import { viewuser } from "./services/api.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  const data = { email, password };

  try {
    console.log("Sending data to backend:", data);

    const response = await viewuser(data);

  } catch (error) {
    console.error("Error sending data:", error);
  }
};


  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.loginBox} shadow-lg rounded-3 d-flex`}>
        <div className={styles.formSection}>
          <div className="text-center mb-3">
            <img src={logo} alt="logo" className={styles.logo} />
          </div>

          <h2 className="fw-bold text-center" style={{ color: "black" }}>COZY CORNER</h2>
          <h5 className={styles.subHeading}>WELCOME BACK</h5>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control mb-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="pass">Password</label>
            <input
              id="pass"
              type="password"
              className="form-control mb-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <small className="d-block mb-2 text-end text-muted">
              Forgot Password?
            </small>

            <button type="submit" className={styles.signInBtn}>
              Sign In
            </button>
          </form>

          <p className="text-center mt-3">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </div>

        <div className={styles.imageSection}>
          <img src={sideImage} alt="side" className={styles.sideImage} />
        </div>
      </div>
    </div>
  );
}

export default Login;
