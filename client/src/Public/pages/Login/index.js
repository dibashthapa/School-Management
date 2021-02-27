import React, { useState, useContext } from 'react';
import { withFormik } from 'formik';
import { Box } from '@material-ui/core';
import {
  TextField,
  Avatar,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { Button, Grid, Container } from '@material-ui/core';
import {
  AccountCircle,
  ExitToApp,
  VisibilityOff,
  Visibility,
} from '@material-ui/icons';
import { loginSchema as validationSchema } from './Schema';
import { Link } from 'react-router-dom';

import useStyles from './index.style';
import { AuthContext } from '../../../App/auth';
import PublicLayout from '../../../App/layout/PublicLayout';
const Login = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const { values, errors, handleChange, handleSubmit, isValid } = props;
  const context = useContext(AuthContext);

  const handleLogin = async (e) => {
    try {
      const loginRes = await context.loginUser(values);
      if (loginRes.token) {
        const res = await context.fetchLoggedInUser(loginRes.token);
        context.setToken(res.token);
        context.setUserData(res.user);
      } else {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <PublicLayout>
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={0}
          direction="column"
          style={{ minHeight: '100vh' }}
        >
          <Grid item className={classes.gridItem} xs={12} md={12} lg={4}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Avatar alt="Login">
                <AccountCircle />
              </Avatar>
            </Box>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Enter Email "
                color="primary"
                variant="standard"
                required
                fullWidth
                onChange={handleChange}
                id="email"
                name="email"
                autoComplete="email"
                margin="normal"
                error={errors.email ? true : false}
                value={values.email || ''}
                helperText={errors.email}
              />
              <TextField
                label="Enter password"
                color="primary"
                variant="standard"
                required
                fullWidth
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                onChange={handleChange}
                autoComplete="password"
                margin="normal"
                error={errors.password ? true : false}
                value={values.password || ''}
                style={{ marginBottom: '5%' }}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                color={'primary'}
                fullWidth
                type="submit"
                disabled={isValid ? false : true}
                onClick={isValid ? handleLogin : null}
              >
                Login
              </Button>
            </form>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button
                fullWidth
                style={{ marginTop: '2%' }}
                endIcon={<ExitToApp />}
              >
                Create an account
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </PublicLayout>
  );
};
const intitialValues = {
  email: '',
  password: '',
};
const isInitialValid = validationSchema.isValidSync(intitialValues);
export default withFormik({
  isInitialValid,
  mapPropsToValues: ({ user }) => ({ ...user }),
  validationSchema,
  handleSubmit: (payload) => {
    console.log(payload);
  },
  displayName: 'Login',
})(Login);
