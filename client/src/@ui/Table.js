import styled from "styled-components";

export const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  position: relative;
  margin-bottom: 15px;

  th , td {
    padding: 15px;
  }
  .odd {
    background-color:#f1f3fa;
    color: ${(p) => p.theme.colors.dark};
    font-weight:700;
  }

  .even {
    background-color:${p => p.theme.colors.white};
    color:${p => p.theme.colors.dark};
    font-weight:700;
  }
`;

export const TableRow = styled.tr`
  background-color: ${(p) => p.theme.colors.dark};
  color: ${(p) => p.theme.colors.light};
  border-bottom:1px solid ${p => p.theme.colors.light};

`;
