import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import InputLabel from './InputLabel';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/core/ButtonUnstyled';
import { styled as muiStyledSystem } from '@mui/system';

const Input = styled('input')({
  display: 'none',
});

const CustomButtonRoot = muiStyledSystem('button')(`
  background-color: lightgrey;
  color: black;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  border: none;
  height: 20px;
  width: 20px;
  margin: 5px;
  border-radius: 20px;

  &:hover {
    background-color: grey;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

const InputUpload = (props) => {
  const {
    textLabel,
    multiple,
    form: { setFieldValue, errors, values, touched },
    field: { name },
  } = props;

  const onChange = React.useCallback(
    async (e) => {
      let filesDataURL = Array.from(e.target.files).map((file) => {
        let reader = new FileReader();
        return new Promise((resolve) => {
          reader.onload = () => resolve({ file, dataURL: reader.result });
          reader.readAsDataURL(file);
        });
      });
      let res = await Promise.all(filesDataURL);
      setFieldValue(name, [...(multiple ? values[name] : []), ...res]);
    },
    [setFieldValue, name]
  );

  const onDelete = (id) => {
    const newFiles = values[name].filter((item) => item.file.name !== id);
    setFieldValue(name, newFiles);
  };

  return (
    <Box>
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
        <label htmlFor={name}>
          <Input
            name={name}
            accept="image/*"
            id={name}
            multiple={multiple}
            type="file"
            onChange={onChange}
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
      {values[name]?.length > 0 && (
        <Box sx={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
          {values[name].map((item) => (
            <Box key={item.file.name} sx={{ position: 'relative' }}>
              <img
                style={{ height: '140px', width: '140px' }}
                alt="previewImg"
                src={item.dataURL}
              />
              <ButtonUnstyled
                component={CustomButtonRoot}
                onClick={() => onDelete(item.file.name)}
                sx={{ position: 'absolute', top: 0, right: 0 }}
              >
                X
              </ButtonUnstyled>
            </Box>
          ))}
        </Box>
      )}
      {errors[name] && touched[name] && (
        <Typography
          className={'Mui-error'}
          sx={{ color: 'red', fontSize: '13px' }}
        >
          {errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default InputUpload;
