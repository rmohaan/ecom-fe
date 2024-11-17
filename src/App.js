import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AddProduct from './pages/AddProduct';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
        <Header />
        <div className="container mx-auto p-4">
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/signup" element={
                    <Signup />
            } />
            <Route path="/login" element={
                <PrivateRoute>
                    <Login />
                </PrivateRoute> } 
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
