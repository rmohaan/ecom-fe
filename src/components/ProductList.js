import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import { addToCart } from '../redux/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(state => state.products);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {products.map(product => (
        <div key={product._id}>
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
