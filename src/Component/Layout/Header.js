import { Fragment } from "react"

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/main-image2.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
      <Fragment>
        <header className={classes.header}>
          <h1>ROMANIA KITCHEN</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
          <img src={mealsImage} alt='A table full of delicious food!' />
        </div>
      </Fragment>
    );
  };
  
  export default Header;