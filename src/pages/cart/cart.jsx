import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import { TextAlignCenter } from 'phosphor-react';

export const Cart = () => {
  const { cartItems, getTotalItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div>
      {getTotalItems() > 0 ? (
        <div className='cart'>
          <div>
            <h1>Your Cart Items</h1>
          </div>
          <div className="cartItems">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data={product} />;
              }
              return null;
            })}
          </div>
          <div className='checkout'>
            <p>Subtotal: ${getTotalItems()}</p>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: 'center' }}>Your Cart is Empty</h1>

      )}
    </div>
  );
};

export default Cart;
