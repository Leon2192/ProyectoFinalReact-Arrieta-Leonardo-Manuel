import React, { useContext } from "react";
import { Menu, Badge, Layout } from 'antd';
import { HomeOutlined, ShoppingCartOutlined, ShoppingOutlined, CustomerServiceTwoTone, WomanOutlined, ManOutlined,StarTwoTone, MoreOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { CartContext } from "../../Provider/CartContext";
const { SubMenu } = Menu;

const NavBar = () => {
    const {cart} = useContext(CartContext);
    return (
      <Layout>
      <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<HomeOutlined />}>
          <Link to={'/'}>Inicio</Link> 
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<MoreOutlined />} title="Categories">
          <Menu.ItemGroup>
            <Menu.Item icon={<CustomerServiceTwoTone />}  key="setting:1"><Link to='/category/electronics'>Electronics</Link></Menu.Item>
            <Menu.Item icon={<WomanOutlined />} key="setting:2"><Link to='/category/jewelery'>Jewelery</Link></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup>
            <Menu.Item icon={<ManOutlined />} key="setting:3"><Link to="/category/men's clothing">Men's clothing</Link></Menu.Item>
            <Menu.Item icon={<StarTwoTone />} key="setting:4"><Link to="/category/women's clothing">Women's clothing</Link></Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay" >
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer" >
          <Link to={'/cartview'}>Ver compra</Link><ShoppingOutlined />
          </a>
        </Menu.Item>
        <Menu.Item key="shop">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
           
          </a>
          <Link to={'/cartview'}>
        <Badge style={{fontSize: '12px',position:'absolute' ,left:'740px'}} count={cart.reduce((acc, prod) => acc + prod.amount, 0 )}>
            <ShoppingCartOutlined style={{ fontSize: '22px', color: '#08c',position:'absolute' ,left:'740px', bottom:'0.5px'}}/>
          </Badge>
          </Link>
        </Menu.Item>
      </Menu>
      </Layout>
     )
  }

export default NavBar;



