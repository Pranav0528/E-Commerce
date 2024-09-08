import React, { useState } from 'react'
import { PRODUCTS } from '../products';
import { createContext } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalItems =()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = PRODUCTS.find((products)=>products.id === Number(item));
                totalAmount = cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }
    const updateItem = (newValue, itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:newValue}))
    }
    const contextValue = {cartItems, addToCart, removeFromCart, updateItem, getTotalItems}

    console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
