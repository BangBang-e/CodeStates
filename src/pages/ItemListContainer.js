import React from 'react';
import Item from '../components/Item';

function ItemListContainer({ items, cartItems, setCartItems }) {
  const handleClick = (e, idx) => {
    let addProduct = {};
    addProduct.itemId = idx;
    addProduct.quantity = 1;

    if (cartItems.length === 0) setCartItems([...cartItems, addProduct])

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].itemId === idx) {
        setCartItems([...cartItems])
        cartItems[i].quantity++
      } else setCartItems([...cartItems, addProduct])
    }
  }

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => <Item item={item} key={idx} handleClick={handleClick} />)}
      </div>
    </div>
  );
}

export default ItemListContainer;
