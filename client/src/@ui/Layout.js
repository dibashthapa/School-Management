import styled from 'styled-components'

export const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin-right:15px;
  margin-left:15px;
  flex-wrap:no-wrap;

  
`

export const Col = styled.div`
  flex:0 0 calc(${p =>parseInt(p.lg)/12 * 100}%);
  width:${p=>parseInt(p.lg)/12*100}%;
  margin-left:15px;
  margin-right:15px;
  
  @media screen and (${p => p.theme.media.mobileS}){
  width:100%;
  }
  @media screen and (${p => p.theme.media.tablet}){
  width:100%;
  }
`
