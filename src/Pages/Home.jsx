import React from 'react';
import { Carousel, Image } from 'antd';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
    const contentStyle = {
        height: '260px',
        color: '#fff',
        lineHeight: '230px',
        textAlign: 'center',
        background: '#364d79',
      };
    return  (
      <>
        <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
          <Image preview={false} src="/Assets/1.webp" alt="imag" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
          <Image preview={false} src="/Assets/2.webp" alt="imag" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
          <Image preview={false} src="/Assets/3.webp" alt="imag" />
          </h3>
        </div>
      </Carousel>
      <ItemListContainer />
      </>
    )
}

export default Home;
 