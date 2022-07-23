import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import Details from './components/Details';

import data from './data';

import { useState } from 'react';

function App() {
  const {products} = data;
  const[cartItems, setCartItems] = useState([]);
  const[currentProduct, setCurrProduct] = useState(1);

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id == product.id)
    if (exist) {
      setCartItems(
        cartItems.map(x => x.id == product.id ? {...exist, qty: exist.qty + 1} : x
      )
    );
  } else {
    setCartItems([...cartItems, {...product, qty: 1}]);
  }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const changeDisp = (product) => {
    setCurrProduct(product);
  }

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products} changeDisp={changeDisp}></Main>
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart>
      </div>
      <div className="row">
        <Details product={currentProduct}></Details>
      </div>
    </div>
  );
}

export default App;
