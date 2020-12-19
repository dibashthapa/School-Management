import React  from 'react'
import {Route , Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


const AuthRoute = ({component, ...rest}) => {
  const token = localStorage.getItem("token"); 
  const Component = component
  const history = useHistory()

  return (
    <Route
      {...rest}
      render={
        props => token ? (
          <Component {...props} />
        ):(
          <Redirect to="/login" />
        )
      }
    />

  )
}

export default AuthRoute

