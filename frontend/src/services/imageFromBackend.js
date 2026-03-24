import React from 'react';
import { Image } from 'semantic-ui-react';
import { baseUrl } from './serverUrl';

const loadImage = (filePath, imageId) => {
  let correctedFilePath = `${baseUrl}/${filePath}`.replace(/\\/g, '/'); //Changes backslashes(\) to forward(/) slashes
  return (
    <Image key={imageId} size="medium" src={`${correctedFilePath}`}></Image>
  );
};
export default loadImage;
