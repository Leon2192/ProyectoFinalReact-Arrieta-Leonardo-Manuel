import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Image.PreviewGroup>
  <Link to='/'> <Image width={100} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" /></Link>
</Image.PreviewGroup>
);

export default Logo;

