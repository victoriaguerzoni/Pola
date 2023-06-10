import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [ cart, setCart ] = useState([])
    console.log (cart)

    const isInCart = (id) => {
        return cart.some(pr => pr.id === id)
    }

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev=>[...prev,{...item,quantity}])
        }else {
            console.log("el producto ya fue agregado al carrito")
        }
    }

    const removeItem = (id) => {
        const products = cart.filter(pr => pr.id !== id)
        setCart([...products])
    }

    const clear = () => {
        setCart([])
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.quantity, 0)
    }

    const priceTotal = () => {
        return cart.reduce((total, item) => total += item.quantity * item.price , 0)
    }
    

    return (
        <CartContext.Provider value={{cart,setCart, addItem, removeItem, clear,cartTotal, priceTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider