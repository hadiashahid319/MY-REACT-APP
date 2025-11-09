import PIC from "./assets/HOM/mirror1.jpg";
import second from "./assets/HOM/5.jpg";
import third from "./assets/HOM/vase.jpg";
import fourth from "./assets/HOM/2.jpg";
import styles from "./MostSaledItems.module.css"; 

function MostSaledItem() {
  const items = [
    { src: PIC, name: "MIRRORS", price: "Rs. 1500" },
    { src: second, name: "CANDLES", price: "Rs. 800" },
    { src: third, name: "VASES", price: "Rs. 1200" },
    { src: fourth, name: "FRAMES", price: "Rs. 1000" },
    { src: PIC, name: "MIRRORS", price: "Rs. 1500" },
    { src: second, name: "CANDLES", price: "Rs. 800" },
    { src: third, name: "VASES", price: "Rs. 1200" },
    { src: PIC, name: "MIRRORS", price: "Rs. 1500" },
    { src: second, name: "CANDLES", price: "Rs. 800" },
    { src: third, name: "VASES", price: "Rs. 1200" },
    { src: PIC, name: "MIRRORS", price: "Rs. 1500" },
    { src: second, name: "CANDLES", price: "Rs. 800" },
  ];

  return (
    <section id="gallery" className={styles.section}>
      <div className="container py-5">
        <h2 className={styles.heading}>MOST SOLD ITEMS</h2>
        <div className="row g-4 justify-content-center">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div className={styles.card}>
                <img src={item.src} alt={item.name} className={styles.image} />
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}>{item.price}</p>
                <button className={styles.button}>🛒 Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MostSaledItem;
