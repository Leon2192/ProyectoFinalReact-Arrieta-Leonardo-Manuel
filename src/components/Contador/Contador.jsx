import { Button } from 'antd';
import styles from './CartButtons.module.css';

const Contador = ({handleAumentar, handleRestar}) => {
    return (
       <div className={styles.cartButtons}>
        <Button onClick={handleAumentar} type="primary" danger> +</Button>
        <Button onClick={handleRestar} danger>-</Button>
    </div>
    )
}

export default Contador;
  



