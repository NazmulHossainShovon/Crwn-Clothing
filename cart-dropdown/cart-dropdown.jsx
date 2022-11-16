import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../context/cart.context";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={() => navigate("/checkout")}>Checkout</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
