import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>장바구니</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}원 x {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>제거</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;