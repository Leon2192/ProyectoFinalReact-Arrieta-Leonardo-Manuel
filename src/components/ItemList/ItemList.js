import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({products}) => {
    return (
        <ul className={styles.Grilla}>
            {products.map(producto  => {
            return  <Item product={producto} />
            })}
        </ul>
    )
}

export default ItemList;