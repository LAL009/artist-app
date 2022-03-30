import React from 'react';
import styled, { css } from 'styled-components';
import { Typography, Skeleton } from '@mui/material';

export const SmallWallCard = (props) => {
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
        <Skeleton width="100%" height={'187px'} />
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
                fontSize: `7.91px`,
                textAlign: 'center',
                letterSpacing: 0,
                lineHeight: '59.3px',
                whiteSpace: 'nowrap',
              }}
            >
              Just listed
            </Typography>
          </ListingStatus>
        )}
      </WallImageContainer>

      <Budget>
        <Typography
          component="p"
          variant="p"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '12px',
            fontFamily: `var(--font-family-montserrat)`,
            fontWeight: 500,
            color: `var(--viking-22)`,
            fontSize: '11px',
            textAlign: 'center',
            letterSpacing: 0,
            lineHeight: '59.3px',
            whiteSpace: 'nowrap',
          }}
        >
          {budget}
        </Typography>
      </Budget>
      <Location>{location}</Location>

      <AddressAndDetails>
        <StateContainer>
          <Icon src="https://anima-uploads.s3.amazonaws.com/projects/61686e84d5059459cbead39b/releases/617bf1c00e83495e51b63e54/img/frame@2x.svg" />
          <StateName>{state}</StateName>
        </StateContainer>

        <AreaContainer>
          <Icon src="https://anima-uploads.s3.amazonaws.com/projects/61686e84d5059459cbead39b/releases/617bee2a0e83495e51b63e4a/img/frame-1@2x.svg" />
          <Area>{area}</Area>
        </AreaContainer>

        <DimensionContainer>
          <Icon src="https://anima-uploads.s3.amazonaws.com/projects/61686e84d5059459cbead39b/releases/617bee2a0e83495e51b63e4a/img/full-screen-3@2x.svg" />
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

export const MontserratMediumQuickSilver79px = css`
  color: var(--quick-silver);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-style: normal;
`;

const Container = styled.div`
  width: 212px;
  display: flex;
  flex-direction: column;
  padding: 10.3px 10.5px;
  align-items: flex-start;
  min-height: 187px;
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
  border-radius: 10.54px;
`;

const WallImageContainer = styled.div`
  height: 93px;
  align-self: flex-end;
  display: flex;
  padding: 6.6px 6.6px;
  align-items: flex-start;
  min-width: 190px;
  background-size: 100% 100%;
`;

const ListingStatus = styled.div`
  height: 22px;
  display: flex;
  padding: 6.6px;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: var(--electric-violet);
  border-radius: 65.89px;
  backdrop-filter: blur(39.536399841308594px) brightness(100%);
  -webkit-backdrop-filter: blur(39.536399841308594px) brightness(100%);
`;

const Budget = styled.div`
  height: 22px;
  margin-top: 9px;
  margin-left: 0.03px;
  display: flex;
  padding: 5.3px;
  justify-content: center;
  align-items: center;
  background-color: var(--viking2);
  border-radius: 5.27px;
  backdrop-filter: blur(39.536399841308594px) brightness(100%);
  -webkit-backdrop-filter: blur(39.536399841308594px) brightness(100%);
`;

const Location = styled.div`
  ${ValignTextMiddle}
  height: 16px;
  margin-top: 9px;
  margin-left: 0.03px;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: var(--white);
  font-size: 13.18px;
  letter-spacing: 0;
  line-height: 31.6px;
  white-space: nowrap;
`;

const AddressAndDetails = styled.div`
  margin-top: 9px;
  margin-left: 0.03px;
  display: flex;
  align-items: flex-end;
  min-width: 189px;
`;

const StateContainer = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: flex-end;
  min-width: 87px;
`;

const Icon = styled.img`
  width: 9px;
  height: 9px;
  margin-left: -1px;
  margin-bottom: -0.55px;
`;

const StateName = styled.span`
  ${ValignTextMiddle}
  ${MontserratMediumQuickSilver79px}
  width: 73px;
  height: 8px;
  margin-left: 3px;
  margin-bottom: 0;
  letter-spacing: 0;
  line-height: 19px;
  white-space: nowrap;
  font-size: 7.91px;
`;

const AreaContainer = styled.span`
  margin-left: 1px;
  margin-bottom: 0;
  display: flex;
  align-items: flex-end;
  min-width: 49px;
  font-size: 7.91px;
`;

const Area = styled.div`
  ${ValignTextMiddle}
  ${MontserratMediumQuickSilver79px}
  width: 36px;
  height: 8px;
  margin-left: 3px;
  margin-bottom: 0;
  letter-spacing: 0;
  line-height: 19px;
  white-space: nowrap;
  font-size: 7.91px;
`;

const DimensionContainer = styled.div`
  margin-left: 1px;
  margin-bottom: 0;
  display: flex;
  align-items: flex-end;
  min-width: 53px;
`;

const Dimension = styled.div`
  ${ValignTextMiddle}
  ${MontserratMediumQuickSilver79px}
  width: 39px;
  height: 8px;
  margin-left: 4px;
  margin-bottom: 0;
  letter-spacing: 0;
  line-height: 19px;
  white-space: nowrap;
  font-size: 7.91px;
`;
