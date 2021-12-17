import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartContextFunction = () => {
    return useContext(CartContext)
}

export const CarritoContext = ({children}) => {
    const [cart, setCart] = useState([])

    const AddToCart = (obj) => {
        if (!InCart(obj.id)) {
          setCart([...cart, obj]);
        } else {
          cart.forEach((product, index) => {
            if (product.id === obj.id) {
              cart[index].amount = product.amount + obj.amount;
              setCart([...cart]);
            }
          });
        }
      };
   
    console.log(cart)

    const RemoveItem = (id) => {
        const deleteItem = cart.filter((product) => product.id !== id);
        setCart(deleteItem);
    }

    const InCart = (id) => {
        const esIgual = cart.find((product) => product.id === id);
            return esIgual === undefined ? false : true;
    }

    const ClearCart = () => {
        setCart([]);
    }

    const CalculatePrice = () => {
        let total = 0;
        cart.forEach(({ amount, price }) => {
          total = total + amount * price;
        });
        return total;
      };

    return (
        <CartContext.Provider value={{
            cart,
            AddToCart, 
            RemoveItem,
            ClearCart,
            InCart,
            CalculatePrice,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

