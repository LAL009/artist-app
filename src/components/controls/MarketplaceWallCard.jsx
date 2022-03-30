import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

export const MarketplaceWallCard = (props) => {
  const {
    wallImageSrc,
    status,
    budget,
    location,
    state,
    area,
    dimension,
    styleWrap,
    slug,
  } = props;

  return (
    <Card style={styleWrap}>
      <WallImage src={wallImageSrc}>
        <List status={status} />
      </WallImage>
      <BudgetCard>
        <BudgetTextWrapper>{`${budget} - Proposed Budget`}</BudgetTextWrapper>
      </BudgetCard>
      <WalltitleWrapper href={`/wall/${slug}`} target="_blank">
        {location}
      </WalltitleWrapper>

      <CardDetails>
        <LocationWrapper>
          <Icon
            src={`${process.env.REACT_APP_S3_BASE_URL}/assets/home/state-icon.svg`}
          />

          <DetailText>{state}</DetailText>
        </LocationWrapper>

        <SqftWrapper>
          <Icon
            src={`${process.env.REACT_APP_S3_BASE_URL}/assets/home/area-icon.svg`}
          />
          <DetailText>{area} SQFT</DetailText>
        </SqftWrapper>

        <MeasurementWrapper>
          <Icon
            src={`${process.env.REACT_APP_S3_BASE_URL}/assets/home/dimension-icon.svg`}
          />
          <DetailText>{dimension}</DetailText>
        </MeasurementWrapper>
      </CardDetails>
    </Card>
  );
};

const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MontserratMediumQuickSilver12px = css`
  color: var(--quick-silver);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s2);
  font-weight: 500;
  font-style: normal;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 321px;
  min-height: 283px;
  padding: 15.8px 0;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background-color: var(--white);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.37);
`;

const WallImage = (props) => {
  const { src } = props;
  const modifiedStyles =
    src.length === 0
      ? {
          backgroundColor: `var(--quick-silver)`,
        }
      : {
          backgroundImage: `url(${src})`,
        };

  const styles = {
    ...{
      display: 'flex',
      alignItems: 'flex-start',
      alignSelf: 'center',
      minWidth: '289px',
      height: '141px',
      padding: '20px',
      backgroundSize: '100% 100%',
    },
    ...modifiedStyles,
  };

  return <Box sx={styles}>{props.children}</Box>;
};

const List = (props) => {
  if (props.status !== 'new') {
    return null;
  }

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'var(--font-family-montserrat)',
    fontWeight: 700,
    fontSize: 'var(--font-size-s2)',
    textAlign: 'center',
    textTransform: 'capitalize',
    lineHeight: '90px',
    whiteSpace: 'nowrap',
    width: '95px',
    height: '33px',
    padding: '10px',
    borderRadius: '15px',
    color: 'var(--white)',
    backgroundImage: 'linear-gradient(50deg, #5700ff 40%, #64e1dc)',
  };

  return (
    <Box sx={styles}>
      {props.status === 'new' ? 'just listed' : props.status}
    </Box>
  );
};

const BudgetCard = styled.div`
  display: flex;
  align-items: center;
  min-width: 180px;
  height: 33px;
  margin-top: 14px;
  margin-left: 16px;
  padding: 0 8px;
  background-color: #2196530f;
  border-radius: 8px;
  backdrop-filter: blur(60px) brightness(100%);
  -webkit-backdrop-filter: blur(60px) brightness(100%);
`;

const BudgetTextWrapper = styled.div`
  ${ValignTextMiddle}
  width: 164px;
  height: 17px;
  font-size: var(--font-size-s2);
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 90px;
  color: #219653;
`;

const WalltitleWrapper = styled.a`
  ${ValignTextMiddle}
  text-decoration: none;
  font-size: var(--font-size-xxl);
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  text-transform: capitalize;
  line-height: 48px;
  white-space: nowrap;
  height: 24px;
  margin-top: 14px;
  margin-left: 16px;
  color: var(--black-pearl);
  :hover {
    cursor: pointer;
  }
`;

const CardDetails = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: center;
  min-width: 286px;
  margin-top: 14px;
  margin-right: 2.55px;
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 131px;
`;

const DetailText = styled.div`
  ${ValignTextMiddle}
  ${MontserratMediumQuickSilver12px}
  height: 12px;
  margin-left: 6px;
  line-height: 28.8px;
  text-decoration: capitalize;
  white-space: nowrap;
`;

const SqftWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 2px;
  min-width: 74px;
`;

const Icon = styled.img`
  width: 13px;
  height: 13px;
  margin-top: -0.5px;
`;

const MeasurementWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 2px;
  min-width: 80px;
`;

MarketplaceWallCard.propTypes = {
  wallImageSrc: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  dimension: PropTypes.string.isRequired,
};
