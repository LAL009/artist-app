import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';

const WallDetailsHeadInfo = (props) => {
  const { styleWrap, textLocation, textListed, textTotalProposal } = props;
  return (
    <Box
      sx={{
        ...styleWrap,
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        flexWrap: 'nowrap',
      }}
    >
      <Box
        sx={{
          flex: '0 1 auto',
          padding: {
            xs: '0 0 12px 0',
            sm: '0 14px 0 0',
          },
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'center',
          borderRight: {
            sm: textListed && '1px solid rgba(255, 255, 255, 0.5)',
          },
        }}
      >
        <CardMedia
          component="img"
          image="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/frame@2x.svg"
          sx={{
            width: {
              xs: '16px',
              md: '24px',
            },
            height: {
              xs: '16px',
              md: '25px',
            },
            flex: '0 1 auto',
          }}
        />

        <Typography
          component="h4"
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontFamily: 'var(--font-family-montserrat)',
            fontSize: {
              xs: '12px',
              md: '20px',
            },
            fontWeight: '600',
            fontStyle: 'normal',
            flex: '0 1 auto',
            padding: {
              xs: '0 0 0 8px',
              md: '0 0 0 12px',
            },
          }}
        >
          {textLocation}
        </Typography>
      </Box>

      {textListed && (
        <Box
          sx={{
            flex: '0 1 auto',
            padding: {
              xs: '0 0 12px 0',
              sm: '0 14px 0 14px',
            },
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            borderRight: {
              sm: textTotalProposal && '1px solid rgba(255, 255, 255, 0.5)',
            },
          }}
        >
          <CardMedia
            component="img"
            image="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/frame-1@2x.svg"
            sx={{
              width: {
                xs: '16px',
                md: '24px',
              },
              height: {
                xs: '16px',
                md: '25px',
              },
              flex: '0 1 auto',
            }}
          />

          <Typography
            component="h4"
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: {
                xs: '12px',
                md: '20px',
              },
              fontWeight: '600',
              fontStyle: 'normal',
              flex: '0 1 auto',
              padding: {
                xs: '0 0 0 8px',
                md: '0 0 0 12px',
              },
            }}
          >
            Listed : {textListed}
          </Typography>
        </Box>
      )}

      {textTotalProposal && (
        <Box
          sx={{
            flex: '0 1 auto',
            padding: {
              xs: '0 0 12px 0',
              sm: '0 14px 0 14px',
            },
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component="img"
            image="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/frame-6@2x.svg"
            sx={{
              width: {
                xs: '16px',
                md: '24px',
              },
              height: {
                xs: '16px',
                md: '25px',
              },
              flex: '0 1 auto',
            }}
          />

          <Typography
            component="h4"
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: {
                xs: '12px',
                md: '20px',
              },
              fontWeight: '600',
              fontStyle: 'normal',
              flex: '0 1 auto',
              padding: {
                xs: '0 0 0 8px',
                md: '0 0 0 12px',
              },
            }}
          >
            Proposals Sent : {textTotalProposal}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default WallDetailsHeadInfo;
