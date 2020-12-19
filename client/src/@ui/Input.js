import React from "react";
import styled from "styled-components";

export const  Input= styled.input`
  width: 100%;
  border:1px solid ${p=>p.theme.colors.light};
  padding:5px 10px;
`;

export const FormGroup = styled.div`
  display:block;
  padding:10px 20px;

  label {
    font-weight:600;
  }
`


