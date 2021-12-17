import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Item.module.css';
import { Button } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';

const Item = ({product}) => {
    return (
        <li className={styles.itemCard}>
            <Link to={'/item/' + product.id}>
            <img
            width={200}
            height={260}
             src={product.image}
             alt={product.id}
             className={styles.productImage}
             />
            <p className={styles.parrafo} >{product.title} </p>
            <h3 className={styles.precios} >{`Precio: $${product.price}`} </h3>
            <Button 
            style={{ justifyItems:'center', marginLeft:'25px'}}
            icon={<DollarCircleOutlined />}>Comprar</Button>
            </Link>
        </li>
    )
}

export default Item;