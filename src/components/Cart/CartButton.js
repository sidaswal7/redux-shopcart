import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../Store/ui-slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const itemQuantity = useSelector((state)=>state.cart.totalQuantity)
  const cartHandler = ()=>{
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemQuantity}</span>
    </button>
  );
};

export default CartButton;
