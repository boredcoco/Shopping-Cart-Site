import React from 'react';

export default function Details(props) {
  const {product} = props;

  if (product === 1) {
    return ""
  } else {
    return (
      <div className="block col-2 row">
        <img className="large" src={product.image} alt={product.name} />
        <div className="row.text-center">
          <h1>{product.name}</h1>
          <br></br>
          <h3>SGD {product.price}</h3>
          <br></br>
          <h3>Country of Origin: {product.country}</h3>
        </div>
      </div>
    )
  }
}
