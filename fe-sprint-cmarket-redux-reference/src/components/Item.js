import React from 'react'

export default function Item({ item, handleClick }) {

  return (
    <li key={item.id} className="item">
      <img className="item-img" src={item.img} alt=""></img>
      <h3 className="item-name" data-testid={item.name}>{item.name}</h3>
      <span className="item-price">{item.price}</span>
      <button className="item-button" onClick={(e) => handleClick(e, item.id)}>장바구니 담기</button>
    </li>
  )
}
