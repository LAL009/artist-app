import React from 'react';
import styled, { css } from 'styled-components';
import { makeStyles } from '@mui/styles';

const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratBoldWhite16px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;
`;

const Title = styled.div`
  ${ValignTextMiddle}
  ${MontserratBoldWhite16px}
  width: 89px;
  height: 25px;
  letter-spacing: 0;
  line-height: 90px;
  white-space: nowrap;
`;

const useStyles = makeStyles((theme) => ({
  description: {
    [theme.breakpoints.only('xs')]: {
      letterSpacing: '0',
      lineHeight: '28.8px',
      color: 'var(--white)',
      fontFamily: 'var(--font-family-montserrat)',
      fontSize: 'var(--font-size-s2)',
      fontWeight: 400,
      fontStyle: 'normal',
      marginTop: '14px',
    },
    [theme.breakpoints.only('sm')]: {
      letterSpacing: '0',
      lineHeight: '28.8px',
      color: 'var(--white)',
      fontFamily: 'var(--font-family-montserrat)',
      fontSize: 'var(--font-size-s2)',
      fontWeight: 400,
      fontStyle: 'normal',
      marginTop: '14px',
    },
    [theme.breakpoints.only('md')]: {
      letterSpacing: '0',
      lineHeight: '28.8px',
      color: 'var(--white)',
      fontFamily: 'var(--font-family-montserrat)',
      fontSize: 'var(--font-size-s2)',
      fontWeight: 400,
      fontStyle: 'normal',
      marginTop: '14px',
    },
    [theme.breakpoints.only('lg')]: {
      width: '100%',
      marginTop: '20px',
      fontFamily: 'var(--font-family-montserrat)',
      fontWeight: 400,
      color: 'var(--iron)',
      fontSize: 'var(--font-size-m)',
      letterSpacing: '0',
      lineHeight: '30.8px',
      marginBottom: '-5px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.only('xl')]: {
      width: '100%',
      marginTop: '20px',
      fontFamily: 'var(--font-family-montserrat)',
      fontWeight: 400,
      color: 'var(--iron)',
      fontSize: 'var(--font-size-m)',
      letterSpacing: '0',
      lineHeight: '30.8px',
      marginBottom: '-5px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
}));

export const ArtistBio = (props) => {
  const classes = useStyles();

  return (
    <Root>
      <Title>Artist bio</Title>
      <p className={classes.description}>{props.children}</p>
    </Root>
  );
};
