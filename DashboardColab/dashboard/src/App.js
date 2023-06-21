
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav'

import About from './sidepages/Analytics';
import Analytics from './sidepages/Analytics.jsx';
import Comment from './sidepages/Comment.jsx';
import Product from './sidepages/Product.jsx';
import ProductList from './sidepages/ProductList.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <SideNav>
        <Routes>
   
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
        
      </SideNav>
    </BrowserRouter>
    
  );
};

export default App;