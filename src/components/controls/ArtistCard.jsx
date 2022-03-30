import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { StatusIcon } from '../icons';
import { VerifiedBadgeIcon } from '../icons';
import { paramCase } from 'change-case';

const useStyles = makeStyles((theme) => ({
  artistName: {
    [theme.breakpoints.down('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: 'var(--font-size-l)',
      color: 'var(--white)',
      letterSpacing: 0,
      whiteSpace: 'nowrap',
    },
    [theme.breakpoints.up('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 900,
      fontSize: 'var(--font-size-xxxl)',
      color: 'var(--white)',
      letterSpacing: 0,
      whiteSpace: 'nowrap',
    },
  },
  artistLocation: {
    [theme.breakpoints.down('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 'var(--font-size-xs)',
      color: 'var(--white-42)',
      letterSpacing: 0,
      whiteSpace: 'nowrap',
      textTransform: 'uppercase',
    },
    [theme.breakpoints.up('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 'var(--font-size-l)',
      color: 'var(--white-42)',
      letterSpacing: 0,
      whiteSpace: 'nowrap',
      textTransform: 'uppercase',
    },
  },
}));

export const ArtistCard = (props) => {
  const { artistCard, available, name, city, state, loading } = props;

  const classes = useStyles();

  return (
    <Box
      sx={{
        maxWidth: {
          xs: '100%',
          xl: '336px',
        },
        width: '100%',
        height: '472px',
      }}
    >
      <Link
        to={`/artist/${paramCase(name)}`}
        style={{
          textDecoration: 'none',
        }}
      >
        <Box
          className={classes.container}
          sx={{
            backgroundImage: `url(${artistCard})`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: {
              xs: '0.6rem',
              sm: '0.6rem',
              md: '1rem',
              lg: '1rem',
              xl: '1rem',
            },
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            borderRadius: '24px',
          }}
        >
          <Box>
            <FlexRow>
              <StatusContainer>
                <StatusIcon />
                <StatusText>
                  {loading ? <Skeleton height={20} /> : available}
                </StatusText>
              </StatusContainer>

              <VerificationContainer>
                <VerifiedBadgeIcon />
              </VerificationContainer>
            </FlexRow>
          </Box>

          <Box>
            <OverlapGroup>
              <Typography className={classes.artistName}>
                {loading ? <Skeleton /> : name}
              </Typography>
              <Location>
                <Typography className={classes.artistLocation}>
                  {loading ? <Skeleton width={150} /> : `${city}, ${state}`}
                </Typography>
              </Location>
            </OverlapGroup>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratBoldWhite12px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s2);
  font-weight: 700;
  font-style: normal;
`;

export const MontserratBlackWhite24px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xxxl);
  --font-size-l
  font-weight: 900;
  font-style: normal;
`;

export const MontserratBoldWhite16px = css`
  color: var(--white-42);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const StatusContainer = styled.div`
  height: 41px;
  display: flex;
  padding: 0 12px;
  align-items: center;
  min-width: 105px;
  background-color: var(--alto);
  border-radius: 100px;
  backdrop-filter: blur(60px) brightness(100%);
  -webkit-backdrop-filter: blur(60px) brightness(100%);
`;

const StatusText = styled.div`
  ${ValignTextMiddle}
  ${MontserratBoldWhite12px}
  width: 59px;
  height: 17px;
  margin-left: 10px;
  letter-spacing: 0;
  line-height: 90px;
  white-space: nowrap;
`;

const VerificationContainer = styled.div`
  display: flex;
  padding: 0 12px;
  align-items: center;
  width: 44px;
  height: 44px;
  margin-bottom: 0;
  background-color: var(--alto);
  border-radius: 100px;
  backdrop-filter: blur(60px) brightness(100%);
  -webkit-backdrop-filter: blur(60px) brightness(100%);
`;

const OverlapGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 15.8px 19.2px;
  background-color: var(--stack);
  border-radius: 20px;
  backdrop-filter: blur(60px) brightness(100%);
  -webkit-backdrop-filter: blur(60px) brightness(100%);
`;

const Location = styled.div`
  ${ValignTextMiddle}
  ${MontserratBoldWhite16px}
  height: 21px;
  letter-spacing: 0;
  line-height: 90px;
  white-space: nowrap;
`;
