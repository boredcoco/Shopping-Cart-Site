import React from 'react';
import Details from './Details';

export default function Product(props) {
  const {product, onAdd, changeDisp} = props;

  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>SGD {product.price}</div>
      <br></br>
      <div>
        <button onClick={()=> changeDisp(product)}>View Product</button>
        <button onClick={()=> onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  )
}
