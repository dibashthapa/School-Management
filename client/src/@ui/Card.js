import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  margin-bottom: 30px;
  border:${p =>p.border ? `1px solid ${p.theme.colors.gray}` : 'transparent'};
  
  &.card-dark{
  background-color: ${(p) => p.theme.colors.dark};
  color:${p => p.theme.colors.white};
  }

  &.card-primary{
  background-color: ${(p) => p.theme.colors.primary};
  color:${p => p.theme.colors.white};
  }
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 0 1.5rem;
  font-size:35px;
  font-weight: 900;
`;

export const CardTitle = styled.div`
  padding: 0.5rem 1.5rem;
  font-weight: 500;
`;

export const CardFooter = styled.div`
  font-weight:500;
  padding:0.5rem 1.5rem;
`
