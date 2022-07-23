import React from 'react';
import Product from './Product';

export default function Main(props) {
  const {products, onAdd, changeDisp} = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map(product => (
          <Product key={product.id} product={product} onAdd={onAdd} changeDisp={changeDisp}></Product>
        ))}
      </div>
    </main>
  )
}
