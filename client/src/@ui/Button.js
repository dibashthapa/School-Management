import styled from 'styled-components'

export const Button = styled.button`
width:100%;
height:fit-content;
margin:10px 0;
font-weight:600;
padding:10px 15px;
border:1px solid ${p=>p.theme.colors.light};
line-height:1;
font-size:14px;
transition:0.2s;
color:${p=>p.theme.colors.white};
background-color:${p=>p.theme.colors.primary};
cursor:pointer;


`
