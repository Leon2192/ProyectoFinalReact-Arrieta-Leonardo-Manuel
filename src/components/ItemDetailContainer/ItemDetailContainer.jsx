import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Contador from "../Contador/Contador";
import { useContext } from 'react';
import { ShoppingOutlined} from '@ant-design/icons';
import { CartContext } from '../../Provider/CartContext';
import {
  Col,
  Row,
  Image,
  message,
  Divider,
  Button,
} from "antd";
import { db } from "../../Firebase/Config";
import {doc, getDoc} from 'firebase/firestore/lite';

const ItemDetailContainer = () => {
    const {itemId } = useParams()
    const [counts, setCounts] = useState(0);
    const {AddToCart, RemoveItem, ClearCart, CalculatePrice, cart} = useContext(CartContext);

    const handleAumentar = () => {
        const value = counts + 1;
        setCounts(value);
    };
    const handleRestar = () => {
    if (counts > 0) {
      const value = counts - 1;
      setCounts(value);
  }}

    const handleAddProduct = () => {
    const dataToSend = {...details, amount: counts}
    AddToCart(dataToSend)
    message.success("Producto agregado");
    
}

    const handleDeleteProduct = (id) => {
    RemoveItem(id);
    console.log('Producto quitado')
};

    const handleVaciarCart = (key) => {
    ClearCart();
    console.log('Carrito vaciado')
};
    const [details, setDetails] = useState({
        id:0,
        title:'',
        price:'',
        category:'',
        description:'',
        image:'',
        count:''
    });
    
  useEffect(() => {
    const docRef = doc(db, 'productos', itemId)

    getDoc(docRef)
    .then((doc) => {
      console.log(doc.data())
      const items = {
        id:doc.id,
        ...doc.data()
      }
      setDetails(items)
    })
    .finally(() =>{
      
    })

  }, [itemId]);

return (
    <>
    <h4>Agregado/s {counts} productos</h4>
    <Row justify="center">
      <Col span={24} lg={{ span: 12 }}>
        <div style={{ marginTop: 20 }}>
          <Image
            style={{ objectFit: "scale-down", alignItems: "center" }}
            width={600}
            height={600}
            src={details.image}
          />
        </div>
      </Col>
      <Col span={24} lg={{ span: 12 }}>
        <div style={{ marginTop: 20 }}>
          <h1>{details.title}</h1>
          <h1>{`Total del carrito: $${CalculatePrice(cart)} `}</h1>
          <Divider />
          <h3>{details.description}</h3>
          <Divider />
          <h3>{`Precio: $${details.price}`}</h3>
          <h3>{`Cantidad: ${counts}`}</h3>
          <h3>{`Stock: ${details.stock}`}</h3>
          <Divider />
          <Contador
            handleAumentar={handleAumentar}
            handleRestar={handleRestar}
            handleVaciarCart={handleVaciarCart}
            handleDeleteProduct={handleDeleteProduct}
          />
          <div style={{ marginTop: 50, alignItems: "center" }}>
            {counts !== 0 && (
              <Button
                icon={<ShoppingOutlined />}
                type="primary"
                onClick={handleAddProduct}>
                Agregar al carrito
              </Button>
            )}
          </div>
        </div>
      </Col>
    </Row>
  </>
)}

export default ItemDetailContainer;
