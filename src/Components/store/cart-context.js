import React from "react";


let CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    // afterOrder: 0,
    addItem : (item) =>{},
    removeItem: (id)=> {}
})

export default CartContext