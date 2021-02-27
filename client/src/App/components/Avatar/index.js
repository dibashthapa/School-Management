import React from 'react';
import { AvatarImage, AvatarTitle, AvatarWrapper } from './index.style';

const Avatar = ({ src, username, size, width, height, ...props }) => {
  return (
    <AvatarWrapper>
      <AvatarImage src={src} width={width} height={height} {...props} />
      <AvatarTitle>{username} </AvatarTitle>
    </AvatarWrapper>
  );
};

export default Avatar;
