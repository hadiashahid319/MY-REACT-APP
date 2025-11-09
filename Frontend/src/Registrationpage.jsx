import { useState } from "react";
import styles from "./RegistrationPage.module.css";
import bgImage from "./assets/HOM/login.jpg";

function Registrationpage() {
  // State for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [agree, setAgree] = useState(false);

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert("Please fill all required fields!");
      return;
    }
    if (!agree) {
      alert("Please agree to the Terms & Conditions!");
      return;
    }

    console.log("✅ Registration Data:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Address 1:", address1);
    console.log("Address 2:", address2);
    console.log("City:", city);
    console.log("Province:", province);
    console.log("Agreed to Terms:", agree);
  };

  return (
    <div
      className={styles.page_container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.registration_container}>
        <form className={styles.registration_form} onSubmit={handleSubmit}>
          <h2 className={styles.form_title}>Create Your Account</h2>
          <p className={styles.form_subtitle}>Fill in the details below to sign up</p>

          <div className={styles.form_row}>
            <div className={styles.form_col}>
              <label htmlFor="first name">First Name</label>
              <input
                id="first name"
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className={styles.form_col}>
              <label htmlFor="last name">Last Name</label>
              <input
                 id="last name"
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.form_row}>
            <div className={styles.form_col}>
              <label htmlFor="email">Email</label>
              <input
              id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.form_col}>
              <label htmlFor="pass">Password</label>
              <input
                id="pass"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.form_row}>
            <div className={`${styles.form_col} ${styles.full}`}>
              <label htmlFor="address" >Address 1</label>
              <input
                id="address"
                type="text"
                placeholder="1234 Main St"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.form_row}>
            <div className={`${styles.form_col} ${styles.full}`}>
              <label htmlFor="address2">Address 2</label>
              <input
                 id="address2"
                type="text"
                placeholder="Apartment, studio, or floor"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.form_row}>
            <div className={styles.form_col}>
              <label htmlFor="city">City</label>
              <input 
                id="city"
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className={styles.form_col}>
              <label htmlFor="province">Province</label>
              <select
                id="province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              >
                <option value="">Choose...</option>
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
                <option value="KPK">KPK</option>
                <option value="Balochistan">Balochistan</option>
              </select>
            </div>
          </div>

          <div className={styles.checkbox_row}>
            <input
              type="checkbox"
              id="gridCheck"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="gridCheck">I agree to the Terms & Conditions</label>
          </div>

          <button type="submit" className={styles.submit_btn}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registrationpage;
