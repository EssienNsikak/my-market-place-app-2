import { 
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { 
  productListReducer,
  productDetailsReducer
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';
import { orderCreateReducer, orderDetilsReducer } from './reducers/orderReducers';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')) 
      : null, 
  },

  cart: {
    cartItems: localStorage.getItem('cartItems') 
      ? JSON.parse(localStorage.getItem('cartItems')) 
      : [],
    shippingAddress: localStorage.getItem('shippingAddress') 
      ? JSON.parse(localStorage.getItem('shippingAddress')) 
      : {},
    paymentMethod: 'PayPal',
  }
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetilsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
