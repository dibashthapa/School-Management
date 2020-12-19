import React from 'react'
import styled from 'styled-components'
import  {Flex } from '../@ui/Flex'

const Image = styled.img`
  height:30%;
  width:30%;
`
const NotFound = () => {
  return(
    <Flex justify="center" direction="column" align="center">
      <Image src="/404.png" />
      <h4 style={{textAlign:"center"}}> Page not found</h4>
    </Flex>
  )
}

export default NotFound
