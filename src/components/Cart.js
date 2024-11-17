// src/components/Cart.js

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
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map(item => (
              <div key={item._id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
                <p className="flex-1">{item.name} - ${item.price}</p>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleClear}
            className="mt-4 bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
