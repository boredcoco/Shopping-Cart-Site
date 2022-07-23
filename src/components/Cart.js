import React from 'react';

export default function Cart(props) {
  const {cartItems, onAdd, onRemove} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const deliveryFee = 5;
  const totalPrice = itemsPrice + deliveryFee;

  function checkout() {
    alert('Checked Out');
    console.log("Total Cost: " + totalPrice);
  }

  return (
    <aside className="block col-1">
      <h2>Items from cart</h2>
        <div>
          {cartItems.length == 0 && <div>Cart is currently empty</div>}
          {cartItems.map(item => (
              <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                  <button onClick={()=>onAdd(item)} className="add">+</button>
                  <button onClick={()=>onRemove(item)} className="remove">-</button>
                </div>
                <div className="col-2 text-right">
                  {item.qty} x SGD{item.price}
                </div>
              </div>
          )
          )}
        </div>
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Total Cost of Groceries</div>
              <div className="col-1">{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Delivery Fee</div>
              <div className="col-1">{deliveryFee.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2"><strong>Total Cost</strong></div>
              <div className="col-1"><strong>{totalPrice.toFixed(2)}</strong></div>
            </div>
            <div className="row">
              <button onClick={checkout}>
                Checkout
              </button>
            </div>

          </>
        )}
    </aside>
  )
}
