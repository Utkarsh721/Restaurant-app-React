import React, { useContext } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartCntx from '../../Store/cart-context';

const MealItemForm = (props) => {
  const cartcntx = useContext(CartCntx)
  console.log('reinitialized cartctx', cartcntx);
  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById('amount' + props.id).value
    // cartcntx.items.push(props.item)
    cartcntx.addItem({...props.item, quantity:quantity})
    console.log(' after addItemToCart', cartcntx);
  };
  //  const [amountIsValid,setAmountISValid]= useState(true)
  // const amountInputRef=useRef();

  //  const submitHandler=(event) =>{
  //    event.preventDefault();

  //    const enteredAmount=amountInputRef.current.value;
  //    const enteredAmountNumber = +enteredAmount;

  // if(enteredAmount.trim().length ===0 || enteredAmountNumber < 1 ||enteredAmountNumber >5) {
  //   setAmountISValid(false);
  //   return;
  // }


  return (
    <form className={classes.form} >
      {console.log('inside render', cartcntx.items)}
      <Input label="Amount" input={{
        id: 'amount' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <button onClick={addItemToCart} >+ Add</button>
      {/* {!amountIsValid && <p>Please enter a valid amount (1-5).</p>} */}

    </form>
  );

}
export default MealItemForm;