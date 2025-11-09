import { useState } from "react";
import styles from "./Login.module.css";
import sideImage from "./assets/HOM/login.jpg";
import logo from "./assets/HOM/logo.png";

function Login() {
  // 🔹 State variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both fields!");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.loginBox} shadow-lg rounded-3 d-flex`}>
        {/* LEFT SIDE (form) */}
        <div className={styles.formSection}>
          <div className="text-center mb-3">
            <img src={logo} alt="logo" className={styles.logo} />
          </div>

          <h2 className="fw-bold text-center" style={{color:"black"}}>COZY CORNER</h2>
          <h5 className={styles.subHeading}>WELCOME BACK</h5>

          {/* 🔹 Form starts here */}
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

        {/* RIGHT SIDE (image grid) */}
        <div className={styles.imageSection}>
          <img src={sideImage} alt="side" className={styles.sideImage} />
        </div>
      </div>
    </div>
  );
}

export default Login;
