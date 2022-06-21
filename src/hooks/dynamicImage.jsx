import React from 'react';
import { Image } from 'semantic-ui-react';
import useImage from './useImage';

const dynamicImage = (filePath) => {
  let { loading, error, image } = useImage(filePath);
  if (error || loading) return <>Hata</>;
  return <Image size="medium" src={image} />;
};

export default dynamicImage;
