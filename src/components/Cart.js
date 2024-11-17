import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item._id}>
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => handleRemove(item._id)}>Remove</button>
            </div>
          ))}
          <button onClick={handleClear}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
