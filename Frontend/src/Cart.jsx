import React from "react";

function Cart({ cart }) {
  return (
    <div className="mt-5">
          <h3 className="text-center">🛍 Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-center">Cart is empty</p>
          ) : (
            <ul className="list-group">
              {cart.map((item, i) => (
                <li key={i} className="list-group-item d-flex justify-content-between">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
  );
}

export default Cart;
