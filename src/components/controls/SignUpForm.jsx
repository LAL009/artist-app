import React from 'react';
import { Box, Grid } from '@mui/material';
import styled from 'styled-components';
import { styled as muiStyledSystem } from '@mui/system';
import { FacebookLoginIcon, GoogleLoginIcon } from '../../components/icons';
import SignUpArtistFormFirst from './SignUpArtistFormFirst';
import InputSelectLabel from './InputSelectLabel';
import SignUpOwnerFormFirst from './SignUpOwnerFormFirst';

const SignUpForm = () => {
  const [registerAs, setRegisterAs] = React.useState('artist'); // default is "artist"

  return (
    <Box sx={{ position: 'relative', zIndex: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Title>Sign up to get started!</Title>
        </Grid>

        {/* register as */}
        <Grid item xs={6}>
          <InputSelectLabel
            label="Artist"
            onClick={(e) => setRegisterAs('artist')}
            checked={registerAs === 'artist'}
          />
        </Grid>

        <Grid item xs={6}>
          <InputSelectLabel
            label="owner"
            onClick={(e) => setRegisterAs('owner')}
            checked={registerAs === 'owner'}
          />
        </Grid>

        {/* form artist */}
        <Grid item xs={12}>
          {registerAs === 'artist' && <SignUpArtistFormFirst />}
          {registerAs === 'owner' && <SignUpOwnerFormFirst />}
        </Grid>

        {false && (
          <>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Line />
                <Or>OR</Or>
                <Line />
              </Box>
            </Grid>

            {/* connect to facebook */}
            <Grid item xs={12}>
              <SocialLoginButton
                onClick={() => {
                  console.log('login with fb');
                }}
              >
                <Box>
                  <FacebookLoginIcon />
                  <LoginWithText>Sign Up with Facebook</LoginWithText>
                </Box>
              </SocialLoginButton>
            </Grid>

            {/* connect to google */}
            <Grid item xs={12}>
              <SocialLoginButton
                onClick={() => {
                  console.log('login with google');
                }}
              >
                <Box>
                  <GoogleLoginIcon />
                  <LoginWithText>Sign Up with Google</LoginWithText>
                </Box>
              </SocialLoginButton>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default SignUpForm;

const Title = styled.h1`
  font-family: var(--font-family-montserrat);
  font-weight: 800;
  color: var(--white);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
  margin-bottom: 12px;
`;

const Or = styled.div`
  margin: 0 10px;
  font-family: var(--font-family-montserrat);
  font-weight: 600;
  color: var(--white-2);
  font-size: 14px;
  letter-spacing: 0;
  line-height: 33.6px;
`;

const Line = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 2px;
`;

const LoginWithText = styled.div`
  margin-left: 10px;
  text-align: left;
  width: 170px;
`;

const SocialLoginButton = muiStyledSystem('button')(`
  font-family: var(--font-family-montserrat);
  color: white;
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;
  width: 100%;
  height: 70px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  cursor: pointer;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`);
