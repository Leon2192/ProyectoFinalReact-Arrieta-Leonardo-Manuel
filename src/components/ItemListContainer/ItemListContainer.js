import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { Loader } from "../Loader/Loader";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../Firebase/Config";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    
   useEffect(() => {
   setLoading(true) 
   const productosRef = collection(db, 'productos')
   getDocs(productosRef)
   .then( (resp) => {
    const items = resp.docs.map((doc) => ({
        id:doc.id,
         ...doc.data()}))
    console.log(items);
    setProducts(items)
})
   .finally(() => {
    setLoading(false)
})
    
   }, [])

   console.log(products);
   
    return ( 
        <>
        {loading 
        ? <Loader/> 
        : <ItemList products={products} />
        }
        </>
    )
    }

export default ItemListContainer;

