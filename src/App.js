import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './components/Store/ui-slice';
import Notification from './components/UI/Notification'

let isInitial = true;

function App() {
  const showCart = useSelector((state)=>state.ui.showCart)
  const cart = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state)=>state.ui.notification)

  useEffect(()=>{
    const sendData =async ()=>{
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data'
      }))
      const response = await fetch('https://cart-redux-5d371-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body: JSON.stringify(cart)
      });
      if(!response.ok){
        throw new Error('Sending cart data failed.')
      }

      dispatch(uiActions.showNotification({
        status:'success',
        title:'Success!',
        message:'Saved cart data successfully!'
      }))
    }
    if(isInitial){
      isInitial = false;
      return;
    }
    sendData().catch(error => {
      dispatch(uiActions.showNotification({
        status:'error',
        title:'Error!',
        message:'Sending cart data failed!'
      }))
    })
    
  },[cart,dispatch])

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
