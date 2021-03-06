import React, { useState } from 'react';
import { withFormik } from 'formik';
import {
  Box,
  Button,
  Grid,
  Container,
  TextField,
  Avatar,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import {
  AccountCircle,
  ExitToApp,
  VisibilityOff,
  Visibility,
} from '@material-ui/icons';
import { registerSchema as validationSchema } from './Schema';
import { Link } from 'react-router-dom';
import useStyles from './index.style';

const Register = (props) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const { values, errors, handleChange, handleSubmit, isValid } = props;

  const handleRegister = (e) => {
    e.preventDefault();
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
            <Avatar alt="Register">
              <AccountCircle />
            </Avatar>
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              color="primary"
              variant="standard"
              required
              fullWidth
              onChange={handleChange}
              id="name"
              name="name"
              autoComplete="text"
              margin="normal"
              error={errors.name ? true : false}
              value={values.name || ''}
              helperText={errors.name}
            />
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
              label="Enter Grade "
              color="primary"
              variant="standard"
              required
              fullWidth
              onChange={handleChange}
              id="grade"
              name="grade"
              autoComplete="text"
              margin="normal"
              error={errors.grade ? true : false}
              value={values.grade || ''}
              helperText={errors.grade}
            />
            <TextField
              label="Enter Role "
              color="primary"
              variant="standard"
              required
              fullWidth
              onChange={handleChange}
              id="role"
              name="role"
              autoComplete="text"
              margin="normal"
              error={errors.role ? true : false}
              value={values.role || ''}
              helperText={errors.role}
            />

            <TextField
              label="Enter stream "
              color="primary"
              variant="standard"
              required
              fullWidth
              onChange={handleChange}
              id="stream"
              name="stream"
              autoComplete="text"
              margin="normal"
              error={errors.stream ? true : false}
              value={values.stream || ''}
              helperText={errors.stream}
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
              color="primary"
              fullWidth
              type="submit"
              disabled={isValid ? false : true}
              onClick={isValid ? handleRegister : null}
            >
              "Register"
            </Button>
          </form>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button
              fullWidth
              style={{ marginTop: '2%' }}
              endIcon={<ExitToApp />}
              href="/login"
            >
              Login
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

const intitialValues = {
  name: '',
  email: '',
  grade: '',
  role: '',
  stream: '',
  password: '',
};
const isInitialValid = validationSchema.isValidSync(intitialValues);

export default withFormik({
  isInitialValid,
  mapPropsToValues: ({ user }) => ({ ...user }),
  validationSchema,
  handleSubmit: (payload) => {},
  displayName: 'Register',
})(Register);
