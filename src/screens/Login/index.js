import React, { useState } from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';

import LoginTypeSwitch from '../../components/controls/LoginTypeSwitch';
import { SignInForm } from '../../components/controls/SignInForm';
import SignUpForm from 'src/components/controls/SignUpForm';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.only('xs')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.only('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.only('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.only('lg')]: {
      justifyContent: 'end',
    },
    [theme.breakpoints.only('xl')]: {
      justifyContent: 'end',
    },
  },
  wallImage: {
    minHeight: '100vh',
    width: '60%',
    backgroundSize: 'cover',
    backgroundImage: `url("${process.env.REACT_APP_S3_BASE_URL}/assets/login-page-background-image.png")`,
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.only('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.only('md')]: {
      display: 'none',
    },
  },
  loginContainer: {
    position: 'relative',
    backgroundColor: 'var(--black-pearl)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '50px 40px',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      maxWidth: '700px',
    },
    [theme.breakpoints.only('sm')]: {
      width: '100%',
      maxWidth: '700px',
    },
    [theme.breakpoints.only('md')]: {
      width: '100%',
      maxWidth: '700px',
    },
    [theme.breakpoints.only('lg')]: {
      minWidth: '500px',
      width: '40%',
      maxWidth: '623px',
    },
    [theme.breakpoints.only('xl')]: {
      minWidth: '500px',
      width: '40%',
      maxWidth: '623px',
    },
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const [loginType, setloginType] = useState('sign-in');

  return (
    <Box className={classes.root}>
      <Box className={classes.loginContainer}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Link to="/">
              <Logo
                src={`${process.env.REACT_APP_S3_BASE_URL}/assets/logo-identity-blue.png`}
              />
            </Link>
          </Box>
          <LoginTypeSwitch
            checked={loginType === 'sign-in'}
            onChange={(val) => setloginType(val)}
          />
        </Box>
        {loginType == 'sign-in' && <Title>Welcome back</Title>}
        {loginType === 'sign-in' ? <SignInForm /> : <SignUpForm />}
        <Background />
      </Box>
      <Box className={classes.wallImage} />
    </Box>
  );
};

export default LoginPage;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 268px;
  height: 238px;
  margin-top: 156px;
  background-color: #5d1df1;
  filter: blur(500px); ;
`;

const Logo = styled.img`
  width: 58px;
  height: 52px;
  object-fit: cover;
`;

const Title = styled.h1`
  font-family: var(--font-family-montserrat);
  font-weight: 800;
  color: var(--white);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
`;
