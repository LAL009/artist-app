import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SmallWallCard } from './SmallWallCard';
import { LargeWallCard } from './LargeWallCard';
import { Link } from 'react-router-dom';

const ProxyComponent = (props) => {
  const theme = useTheme();
  const betweenSmAndXlScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const onlySm = useMediaQuery(theme.breakpoints.only('sm'));
  const extraSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (extraSmallScreen) {
    return <SmallWallCard {...props} />;
  }

  if (onlySm) {
    return <SmallWallCard {...props} />;
  }

  if (betweenSmAndXlScreen) {
    return <LargeWallCard {...props} />;
  }

  return null;
};

export const WallCard = (props) => {
  const { slug } = props;

  return (
    <Link
      to={`/wall/${slug}`}
      style={{
        textDecoration: 'none',
      }}
    >
      <ProxyComponent {...props} />
    </Link>
  );
};
