import React, { useEffect, useState } from 'react';
import { getProducts } from './apiProduct';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => {
        alert(err);
      });
  }, []);

  return <div></div>;
};

export default Product;
