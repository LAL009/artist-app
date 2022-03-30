import React from 'react';
import styled, { css } from 'styled-components';
import { Typography, Skeleton } from '@mui/material';

export const LargeWallCard = (props) => {
  const {
    wallImageSrc,
    status,
    budget,
    location,
    loading,
    state,
    area,
    dimension,
  } = props;

  if (loading) {
    return (
      <Container>
        <Skeleton
          width={'90%'}
          height={'283px'}
          sx={{
            margin: '0 auto',
          }}
        />
      </Container>
    );
  }

  return (
    <Container>
      <WallImageContainer style={{ backgroundImage: `url(${wallImageSrc})` }}>
        {status === 'just listed' && (
          <ListingStatus>
            <Typography
              component="p"
              variant="p"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontFamily: `var(--font-family-montserrat)`,
                fontWeight: 700,
                color: `var(--white)`,
                fontSize: 'var(--font-size-s2)',
                textAlign: 'center',
                letterSpacing: 0,
                lineHeight: '90px',
                whiteSpace: 'nowrap',
              }}
            >
              Just listed
            </Typography>
          </ListingStatus>
        )}
      </WallImageContainer>
      <Budget>
        <Text1>{budget}</Text1>
      </Budget>
      <Location>{location}</Location>

      <AddressAndDetails>
        <StateContainer>
          <Icon
            src={`${process.env.REACT_APP_S3_BASE_URL}/assets/home/state-icon.svg`}
          />
          <StateName>{state}</StateName>
        </StateContainer>

        <AreaContainer>
          <Icon
            src={`${process.env.REACT_APP_S3_BASE_URL}/assets/home/area-icon.svg`}
          />
          <Area>{area}</Area>
        </AreaContainer>

        <DimensionContainer>
          <Icon
            src={`${process.env.REACT_APP_S3_BASE_URL}/assets/home/dimension-icon.svg`}
          />
          <Dimension>{dimension}</Dimension>
        </DimensionContainer>
      </AddressAndDetails>
    </Container>
  );
};

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratMediumQuickSilver12px = css`
  color: var(--quick-silver);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s2);
  font-weight: 500;
  font-style: normal;
`;

const Container = styled.div`
  width: 321px;
  display: flex;
  flex-direction: column;
  padding: 15.8px 0;
  align-items: flex-start;
  min-height: 283px;
  border-radius: 16px;
  background: linear-gradient(#121c36, #121c36) padding-box,
    linear-gradient(
        144deg,
        rgba(0, 200, 200, 1) 0%,
        rgba(18, 28, 54, 1) 34%,
        rgba(18, 28, 54, 1) 70%,
        rgba(85, 126, 252, 1) 100%
      )
      border-box;
  border: 1px solid transparent;
`;

const WallImageContainer = styled.div`
  height: 141px;
  position: relative;
  align-self: center;
  display: flex;
  padding: 10px;
  align-items: flex-start;
  min-width: 289px;
  background-size: 100% 100%;
`;

const Budget = styled.div`
  height: 33px;
  margin-top: 14px;
  margin-left: 16px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 180px;
  background-color: var(--viking2);
  border-radius: 8px;
  backdrop-filter: blur(60px) brightness(100%);
  -webkit-backdrop-filter: blur(60px) brightness(100%);
`;

const Text1 = styled.div`
  ${ValignTextMiddle}
  width: 164px;
  height: 17px;
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  color: var(--viking-22);
  font-size: var(--font-size-s2);
  text-align: center;
  letter-spacing: 0;
  line-height: 90px;
  white-space: nowrap;
`;

const Location = styled.div`
  ${ValignTextMiddle}
  height: 24px;
  margin-top: 14px;
  margin-left: 16px;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xxl);
  letter-spacing: 0;
  line-height: 48px;
  white-space: nowrap;
`;

const AddressAndDetails = styled.div`
  align-self: center;
  margin-top: 14px;
  margin-right: 2.55px;
  display: flex;
  align-items: flex-end;
  min-width: 286px;
`;

const StateContainer = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 131px;
`;

const Icon = styled.img`
  width: 12px;
  height: 13px;
  margin-bottom: -0.5px;
`;

const StateName = styled.div`
  ${ValignTextMiddle}
  ${MontserratMediumQuickSilver12px}
            width: 111px;
  height: 12px;
  margin-left: 6px;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const AreaContainer = styled.div`
  margin-left: 2px;
  margin-bottom: 0;
  display: flex;
  align-items: flex-end;
  min-width: 74px;
`;

const Area = styled.div`
  ${ValignTextMiddle}
  ${MontserratMediumQuickSilver12px}
            width: 54px;
  height: 12px;
  margin-left: 6px;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const DimensionContainer = styled.div`
  margin-left: 2px;
  margin-bottom: 0;
  display: flex;
  align-items: flex-end;
  min-width: 80px;
`;

const Dimension = styled.div`
  ${ValignTextMiddle}
  ${MontserratMediumQuickSilver12px}
  width: 60px;
  height: 12px;
  margin-left: 6px;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const ListingStatus = styled.div`
  height: 34px;
  display: flex;
  padding: 10px 10px;
  justify-content: center;
  align-items: center;
  min-width: 94px;
  color: var(--white);
  background-color: var(--electric-violet);
  border-radius: 100px;
  backdrop-filter: blur(60px) brightness(100%);
  -webkit-backdrop-filter: blur(60px) brightness(100%);
`;
