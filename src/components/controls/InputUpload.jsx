import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import InputLabel from './InputLabel';
import Lightbox from 'react-image-lightbox';

const Input = styled('input')({
  display: 'none',
});

const InputUpload = (props) => {
  const { styleWrap, textLabel, srcUploaded } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box sx={styleWrap}>
      {textLabel && (
        <InputLabel
          text={textLabel}
          styleWrap={{
            marginBottom: '12px',
          }}
        />
      )}
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.13)',
          padding: '28px 28px',
          borderRadius: '8px',
          border: '1px dashed #FFFFFF',
          width: '100%',
        }}
      >
        {isOpen && (
          <Lightbox
            mainSrc={
              srcUploaded
                ? srcUploaded
                : 'https://dummyimage.com/600x400/e8e8e8/e6e6e6'
            }
            onCloseRequest={() => setIsOpen(false)}
          />
        )}

        <CardMedia
          component="img"
          src={
            srcUploaded
              ? srcUploaded
              : 'https://dummyimage.com/600x400/e8e8e8/e6e6e6'
          }
          sx={{
            width: '100%',
            height: '80px',
            objectFit: 'cover',
            borderRadius: '8px',
            mb: '12px',
          }}
          onClick={(e) => setIsOpen(true)}
        />

        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
              }}
            >
              <CardMedia
                component="img"
                image="https://anima-uploads.s3.amazonaws.com/projects/6183b51d6b5cbed22d564e6f/releases/618a04ee1ebc77dda1e390a7/img/icon@2x.svg?v=1636444489397&v=1636444489800&v=1636446995761&v=1636447000710&v=1636453494937&v=1636453495631"
                sx={{
                  width: '20px',
                  height: '20px',
                  paddingRight: '8px',
                }}
              />
              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  fontSize: '14px',
                  fontWeight: '700',
                  fontStyle: 'normal',
                }}
              >
                Upload
              </Typography>
            </Box>
          </Box>
        </label>
      </Box>
    </Box>
  );
};

export default InputUpload;
