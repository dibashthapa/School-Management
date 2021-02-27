import React, { useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/actions/';
import { useSnackbar } from 'notistack';
import { Redirect } from 'react-router-dom';
import useStyles from './index.styles';
const Login = (props) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.msg);
  const error = useSelector((state) => state.error);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const { values, errors, handleChange, handleSubmit, isValid } = props;
  useEffect(() => {
    if (error) enqueueSnackbar(error, { variant: 'error' });
    if (msg) {
      enqueueSnackbar('Success', { variant: 'success' });
    }
  }, [error, msg, enqueueSnackbar]);
  if (msg) return <Redirect to="/" />;

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = values;
    dispatch(loginUser({ email, password }));
  };
  return (
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
  );
};
const intitialValues = {
  email: '',
  password: '',
};
const isInitialValid = validationSchema.isValidSync(intitialValues);
export const LoginForm = withFormik({
  isInitialValid,
  mapPropsToValues: ({ user }) => ({ ...user }),
  validationSchema,
  handleSubmit: (payload) => {
    console.log(payload);
  },
  displayName: 'Login',
})(Login);