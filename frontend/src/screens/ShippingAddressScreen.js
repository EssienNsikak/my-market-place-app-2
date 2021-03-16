import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../actions/cartActions';

export default function ShippingAddressScreen(props) {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    props.history.push('/sign-in');
  }

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({fullName, address, city, postalCode, country})
    );
    props.history.push('/payment')
    // TODO: dispatch save shipping address action
  }

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>

      <form className='form' onSubmit={submitHandler}>

        <div>
          <h1>Shipping Address</h1>
        </div>

        <div>
          <label htmlFor='fullName'>Full Name</label>
          <input 
            type='text' 
            id='fullName' 
            placeholder='Enter your full name' 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            required
          ></input>
        </div>

        <div>
          <label htmlFor='address'>Address</label>
          <input 
            type='text' 
            id='address' 
            placeholder='Enter your address' 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required
          ></input>
        </div>

        <div>
          <label htmlFor='city'>City</label>
          <input 
            type='text' 
            id='city' 
            placeholder='Enter your city' 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            required
          ></input>
        </div>

        <div>
          <label htmlFor='postalCode'>Postal Code</label>
          <input 
            type='text' 
            id='postalCode' 
            placeholder='Enter your postal code' 
            value={postalCode} 
            onChange={(e) => setPostalCode(e.target.value)} 
            required
          ></input>
        </div>

        <div>
          <label htmlFor='country'>Country</label>
          <input 
            type='text' 
            id='country' 
            placeholder='Enter your country' 
            value={country} 
            onChange={(e) => setCountry(e.target.value)} 
            required
          ></input>
        </div>

        <div>
          <label />
          <button className='primary' type='submit'>Continue</button>
        </div>

      </form>

    </div>
  )
}
