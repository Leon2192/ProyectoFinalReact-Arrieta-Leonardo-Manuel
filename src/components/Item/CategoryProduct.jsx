import React from 'react';
import styles from './ItemList.module.css';

const CategoryProduct = ({categorias}) => {
    return (
        <ul className={styles.Grilla}>
            {categorias.map(categoria  => {
            return  <Item categoria={categoria} />
            })}
        </ul>
    )
}

export default CategoryProduct;