import React, { useContext } from 'react'
import { CartContext } from '../../Provider/CartContext';
import {Image} from "antd";
import { PageHeader, Button, Statistic, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export const CartItem = ({title, price, id, image, stock}) => {
    const {RemoveItem, cart , CalculatePrice, counts} = useContext(CartContext);

    return (
        <>
          <Image
            style={{ objectFit: "scale-down", alignItems: "center" ,marginLeft: '50px',
            marginTop:'55px',
            display: 'flex',}}
            width={60}
            height={60}
            src={image}
          />
<PageHeader
          className="site-page-header"
          onBack={() => window.history.back()}
          title={title}
          subTitle={counts}
          style={{
            marginLeft: '120px',
            display: 'flex',
            }}
          extra={[
            <Button key="2" 
            onClick={() => {RemoveItem(id)}}><DeleteOutlined
            style={{ fontSize: "17px", color: "red" }}
          /></Button>
          ]}
        >
        </PageHeader>
        <br />
        <PageHeader>
            <Row>
            <Statistic title="Stock" value={stock} />
            <br />
            <Statistic
              title="Precio"
              prefix="$"
              value={price}
              style={{
              margin: '0 32px',
              }}
            />
            <Row>
            <Statistic title="Cantidad" value={`Cantidad: ${cart.reduce((acc, prod) => acc + prod.amount, 0)}`} />
            </Row>
          </Row>
        </PageHeader>
        <Statistic
        title="Total" 
        prefix="$" 
        value={CalculatePrice(cart)}
        style={{
            float: 'right',
            }}
         />
      </>
    )
}