import React from 'react';
import PropTypes from 'prop-types';
import { Box, CardMedia, Typography } from '@mui/material';
import styled, { css } from 'styled-components';

export const ArtistCardSmall = (props) => {
  const { profileImage, name, location, status, rate, styleWrap } = props;
  const slug = name.replace(/\s+/g, '-').toLowerCase();

  return (
    <Root styleWrap={styleWrap}>
      <ProfileImage src={profileImage} />
      <UserDetailsContainer>
        {/* name container */}
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row nowrap',
          }}
        >
          <Name href={`/artist/${slug}`} target="_blank">
            {name}
          </Name>
          <VerifiedIcon
            src={`${process.env.REACT_APP_S3_BASE_URL}/assets/walls/verified-icon.png`}
          />
        </Box>

        {/* other detail container */}
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            marginTop: '12px',
          }}
        >
          <Location>{location}</Location>

          <Line />

          {/* status */}
          <Box
            sx={{
              display: 'flex',
              flex: '0 1 auto',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              paddingLeft: '8px',
            }}
          >
            <Box
              sx={{
                flex: '0 1 auto',
                paddingRight: '6px',
              }}
            >
              <CardMedia
                component="img"
                src={`${process.env.REACT_APP_S3_BASE_URL}/assets/walls/available-icon.svg`}
                sx={{
                  width: '8px',
                  height: '8px',
                }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: 'var(--font-family-montserrat)',
                fontWeight: 500,
                color: '#848484',
                fontSize: 'var(--font-size-s2)',
                letterSpacing: 0,
                lineHeight: '1',
                whiteSpace: 'nowrap',
                textTransform: 'capitalize',
                flex: '0 1 auto',
              }}
            >
              {status}
            </Typography>
          </Box>
        </Box>

        {rate && (
          <RateContainer>
            <Rate>{`$${rate} per SQFT`}</Rate>
          </RateContainer>
        )}
      </UserDetailsContainer>
    </Root>
  );
};

const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Root = (props) => (
  <Box
    sx={{
      minHeight: '125px',
      display: 'flex',
      padding: '15.6px 16px',
      alignItems: 'flex-start',
      width: {
        xs: '95%',
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
      },
      backgroundColor: 'var(--white)',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      ...props.styleWrap,
    }}
  >
    {props.children}
  </Box>
);

const ProfileImage = styled.img`
  width: 100px;
  height: 92px;
  object-fit: cover;
  border-radius: 12px;
`;

const UserDetailsContainer = styled.div`
  align-self: center;
  margin-left: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 93px;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 133px;
`;

const Name = styled.a`
  ${ValignTextMiddle}
  text-decoration:none;
  width: 100%;
  height: 20px;
  font-family: var(--font-family-montserrat);
  font-weight: 600;
  color: var(--black-pearl);
  font-size: var(--font-size-l2);
  letter-spacing: 0;
  line-height: 38.4px;
  white-space: nowrap;

  :hover {
    cursor: pointer;
  }
`;

const VerifiedIcon = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 8px;
  margin-top: -0.5px;
`;

const OtherDetailsContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

const Location = styled.div`
  ${ValignTextMiddle}
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  color: #9e9e9e;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 1.8;
  white-space: nowrap;
  text-transform: uppercase;
  flex: 0 1 auto;
`;

const Line = styled.div`
  width: 2px;
  height: 13px;
  margin-left: 9px;
  background-color: rgba(204, 204, 204, 1);
`;

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0 1 auto;
`;

const StatusIcon = styled.img`
  width: 9px;
  height: 9px;
`;

const Available = styled.div`
  ${ValignTextMiddle}
  width: 55px;
  height: 17px;
  margin-left: 6px;
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  color: #848484;
  font-size: var(--font-size-s2);
  letter-spacing: 0;
  line-height: 90px;
  white-space: nowrap;
  text-transform: capitalize;
`;

const RateContainer = styled.div`
  height: 33px;
  margin-top: 12px;
  display: flex;
  padding: 0 8px;
  align-items: center;
  min-width: 104px;
  background-color: #2196530f;
  border-radius: 8px;
  backdrop-filter: blur(60px) brightness(100%);
  -webkit-backdrop-filter: blur(60px) brightness(100%);
`;

const Rate = styled.div`
  ${ValignTextMiddle}
  width: 88px;
  height: 17px;
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  color: #219653;
  font-size: var(--font-size-s2);
  text-align: center;
  letter-spacing: 0;
  line-height: 90px;
  white-space: nowrap;
`;

ArtistCardSmall.propTypes = {
  profileImage: PropTypes.string,
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  status: PropTypes.oneOf(['available', 'busy']),
  rate: PropTypes.number,
};
