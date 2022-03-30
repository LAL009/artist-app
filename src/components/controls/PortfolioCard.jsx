import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';
import { MontserratBoldWhite16px, ValignTextMiddle } from './ArtistCard';

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
      fontWeight: 400,
      fontSize: 'var(--font-size-xs)',
      color: 'var(--white-42)',
      letterSpacing: 0,
      whiteSpace: 'normal',
      textTransform: 'uppercase',
    },
    [theme.breakpoints.up('md')]: {
      fontFamily: 'var(--font-family-montserrat)',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 'var(--font-size-l)',
      color: 'var(--white-42)',
      letterSpacing: 0,
      whiteSpace: 'normal',
      textTransform: 'uppercase',
    },
  },
}));

const PortfolioCard = (props) => {
  const { portfolioImage, title, address, styleWrap } = props;
  const classes = useStyles();
  return (
    <CardWrap>
      <Box
        sx={{
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          backgroundImage: `url(${portfolioImage})`,
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          height: '274px',
          ...styleWrap,
        }}
      >
        {(title || address) && (
          <Group3316>
            {title && (
              <Typography className={classes.artistName}>{title}</Typography>
            )}
            {address && (
              <Location>
                <Typography className={classes.artistLocation}>
                  {address}
                </Typography>
              </Location>
            )}
          </Group3316>
        )}
      </Box>
    </CardWrap>
  );
};

export default PortfolioCard;

const Group3316 = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 20px;
  right: 20px;
  left: 20px;
  padding: 15.5px 20px;
  background-color: #00000069;
  backdrop-filter: blur(40px) brightness(100%);
  -webkit-backdrop-filter: blur(40px) brightness(100%);
  text-align: left;
  border-radius: 10px;
  transition: opacity 0.5s;
`;

const CardWrap = styled.div`
  position: relative;
  &:hover ${Group3316} {
    opacity: 1;
  }
`;

const Location = styled.div`
  ${ValignTextMiddle}
  ${MontserratBoldWhite16px}
  letter-spacing: 0;
  line-height: 90px;
  white-space: normal;
`;
