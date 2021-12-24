import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Provider/CartContext';
import { CartItem } from './CartItem';
import { Button, notification, message, } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons";
import styles from './cart.module.css';

const CartView = () => {

    const {cart, ClearCart } = useContext(CartContext)
        if (cart.length === 0) {
        return <div>
                    <h2>Carrito vacío</h2>
                    <hr/>
                   <Button><Link to="/">Ver productos</Link></Button> 
                </div>
    }

    const handleEliminar = (key) => {
        ClearCart();
        notification.close(key);
      };
    
      const handleSendMessage = () => {
        message.info("El carrito no se borrara");
      };
    
      const NotificationAlert = () => {
        const key = "open";
        const btn = (
          <Button
            danger
            type="primary"
            size="small"
            onClick={() => handleEliminar(key)}>
            Confirmar
          </Button>
        );
        notification.open({
          message: "¿Está seguro que desea eliminar?",
          description:
            "Si confirma, se eliminarán todos los productos seleccionados.",
          btn,
          key,
          onClose: handleSendMessage,
        });
      };
    return (
       <>
            <h2 className={styles.cartTitle} >Carrito</h2>
            <hr/>
            <section>
                {
                    cart.map((prod) => <CartItem key={prod.id} {...prod}/>)
                }
            </section>
            <hr/>
            <Button
            icon={<ShoppingCartOutlined />}
            onClick={NotificationAlert}
            danger
            type="primary">
            Vaciar carrito
          </Button>
                <Button><Link to="/" className=".cartButtons">Seguir comprando</Link></Button>
                <Button><Link to="/checkout"> Finalizar compra</Link></Button>
        </>
    )
}

export default CartView;