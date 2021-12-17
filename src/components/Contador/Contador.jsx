import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './CartButtons.module.css';

const Contador = ({handleAumentar, handleRestar, handleVaciarCart, handleDeleteProduct}) => {
    return (
       <div className={styles.cartButtons}>
        <Button onClick={handleAumentar} type="primary" danger> +</Button>
        <Button onClick={handleRestar} danger>-</Button>
        <Button danger onClick={handleDeleteProduct} >Quitar producto</Button>
        <Button><Link to='/cartview'> Ver Carrito</Link></Button>
        <Button danger onClick={handleVaciarCart} >Vaciar Carrito</Button>
    </div>
    )
}

export default Contador;
  



