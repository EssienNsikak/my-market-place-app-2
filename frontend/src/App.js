import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
 
function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='row'>

          <div>
            <Link className='brand' to='/'>market-place.com</Link>
          </div>

          <div>
            <Link to='/cart'>
              cart
              {
                cartItems.length > 0 && (
                  <span className='badge'>{cartItems.length}</span>
                )
              }
            </Link>
            <Link to='/signIn'>sign in</Link>
          </div>

        </header>

        <main>
          <Route path='/' component={HomeScreen} exact></Route>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/cart/:id?' component={CartScreen}></Route>
        </main>

        <footer className='row center'>
          All rights reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
