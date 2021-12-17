import 'antd/dist/antd.css'; 
import './index.css';
import { CarritoContext } from './Provider/CartContext';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <>
     <CarritoContext>
      <Routes />
    </CarritoContext>
    </>
  )
}

export default App;


