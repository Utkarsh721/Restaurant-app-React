import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";

import classes from './HeaderCartButton.module.css';
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  // const cartCtx = useContext(CartContext);

  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);
 const cartCntxt = useContext(CartContext)
 let quantity=0;
 cartCntxt.items.forEach(item =>{
  quantity=quantity + Number (item.quantity)
 })
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>{cartCntxt.message}</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
