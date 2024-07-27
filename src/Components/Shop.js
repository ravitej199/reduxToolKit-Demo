import React from 'react'

import { addMoney, removeMoney } from '../store/slices/AmountSlice';
import store from '../store';


function Shop() {


const addmoney = (payload)=>{

  store.dispatch(addMoney(payload))



}
const removemoney = (payload)=>{

  store.dispatch(removeMoney(payload))



}






  return (
    <div>
      <h2>Buy Adidas Shoes 50 Rs</h2>
      <button className='btn btn-primary mx-2' onClick={()=>{addmoney(25)}}>-</button>
      Add to cart
      <button className='btn btn-primary mx-2' onClick={()=>{removemoney(25)}}>+</button>
    </div>
  )
}

export default Shop
