import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([
    { name: "Barberton Daisy", sku: "1995751877966", price: 238.00, quantity: 2 },
    { name: "Blushing Bromeliad", sku: "19957518757065", price: 834.00, quantity: 6 },
    { name: "Aluminum Plant", sku: "1995751877786", price: 1611.00, quantity: 9 },
    { name: "Aluminum Plant", sku: "1995751877787", price: 1611.00, quantity: 2 },
    { name: "Aluminum Plant", sku: "1995751877788", price: 1611.00, quantity: 1 },
    { name: "Aluminum Plant", sku: "1995751877789", price: 1611.00, quantity: 10 },
  ]);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;