import React, { useState, useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { CartContext } from '../../Provider/CartContext';
import { db } from '../../Firebase/Config';
import { addDoc, collection, Timestamp } from 'firebase/firestore/lite';
import { message } from 'antd';
import { Link } from 'react-router-dom';

export const Formulario = () => {
  const {cart, CalculatePrice, ClearCart} = useContext(CartContext);

    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const order = {
          buyer:values,
          items: cart ,
          total: CalculatePrice(),
          date: Timestamp.fromDate(new Date())
        }
        message.success("¡Gracias por su compra! Pronto nos pondremos en contacto con usted.");
        ClearCart()
        const orderRef = collection(db, 'order')
        addDoc(orderRef, order)
        .then((res) =>{
          console.log(res.id)
        })
    }
    
    return (
        <Form
      onSubmit={handleSubmit}
      name="basic"
      labelCol={{
        
      }}
      wrapperCol={{
       
      }}
      initialValues={{
        remember: true,
      }}
    
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Ingrese su nombre...',
          },
        ]}
      >
        <Input
        onChange={handleInputChange}
        name="name"
        value={values.name}
        type='text'
        />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Ingrese su tel...',
          },
        ]}
      >
        <Input
        onChange={handleInputChange}
        name="phone"
        value={values.phone}
        type='number'
        />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Ingrese su email...',
          },
        ]}
      >
        <Input
        onChange={handleInputChange}
        name="email"
        value={values.email}
        type='email'
        />
      </Form.Item>
        <Button onClick={handleSubmit} type="primary" htmlType="submit" >
          <Link to='/'>Enviar</Link>
        </Button>
    </Form>
    )
}

