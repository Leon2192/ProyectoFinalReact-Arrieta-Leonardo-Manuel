import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../ItemList/ItemList";
import { db } from "../../Firebase/Config";
import {getDocs, collection, query, where} from 'firebase/firestore/lite';
import { Loader } from "../Loader/Loader";

const ItemCategoriasContainer = () => {
    const {categoryId} = useParams();
    const [categorias, setCategorias] = useState([]);
    const [isLoading, setLoading] = useState(false)

   useEffect(() => {
    setLoading(true) 
    const productosRef = collection(db, 'productos') 
    const q = query(productosRef, where('category', '==', categoryId))
    getDocs(q)
    .then( (resp) => {
     const items = resp.docs.map((doc) => ({
         id:doc.id,
          ...doc.data()}))
     console.log(items);
     setCategorias(items)
 })
    .finally(() => {
     setLoading(false)
 })
       
   }, [categoryId])

   console.log(categorias)
   
    return ( 
        <>
        {
        isLoading
        ? <Loader/>
        : <ItemList products={categorias} />
        }
        </>
    )}

export default ItemCategoriasContainer;

