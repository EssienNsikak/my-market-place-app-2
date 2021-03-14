import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
 
function App() {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='row'>

          <div>
            <a className='brand' href='/'>market-place.com</a>
          </div>

          <div>
            <a href='/cart'>cart</a>
            <a href='/signIn'>sign in</a>
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
