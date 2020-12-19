import React from 'react'
import styled from 'styled-components'
export const AvatarWrapper = styled.div`
margin:auto;
`;

export const AvatarTitle = styled.div`
  font-weight:bold;
  width:150px;
  color:${p => p.theme.colors.dark};
  text-transform:capitalize;
`

const AvatarImage = styled.img`
  width: ${(p) => (p.width ? p.width : 150)}px;
  height: ${(p) => (p.height ? p.height : 150)}px;
  objectFit: "cover";
  border-radius:50%;
  margin: 0;
`;
export const Avatar = ({ src , username, size, width, height, ...props }) => {
  return (
    <AvatarWrapper>
      <AvatarImage src={src} width={width} height={height} {...props} />
      <AvatarTitle>{ username } </AvatarTitle>
    </AvatarWrapper>
  );
};
