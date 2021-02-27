import styled from 'styled-components';
export const AvatarWrapper = styled.div`
  margin: auto;
`;

export const AvatarTitle = styled.div`
  font-weight: bold;
  width: 150px;
  color: ${(p) => p.theme.colors.dark};
  text-transform: capitalize;
`;

export const AvatarImage = styled.img`
  width: ${(p) => (p.width ? p.width : 150)}px;
  height: ${(p) => (p.height ? p.height : 150)}px;
  objectfit: 'cover';
  border-radius: 50%;
  margin: 0;
`;
