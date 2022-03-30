import React from 'react';
import {
  styled,
  InputBase,
  NativeSelect,
  Box,
  Typography,
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { fieldToSelect } from 'formik-mui';

import InputLabel from './InputLabel';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  position: 'relative',
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input, & .MuiInputBase-input:focus': {
    border: 'none',
    borderRadius: '8px',
    padding: '0 18px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '52px',
    outline: 'none',
    fontFamily: 'var(--font-family-montserrat)',
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
    fontSize: '12px',
    color: '#FFF',
  },
  '& .MuiSvgIcon-root': {
    right: '12px',
    transform: 'rotate(0)',
    color: '#FFFFFF',
  },
  '& .MuiInputBase-input option': {
    backgroundColor: '#3f4962 !important',
  },
}));

const InputSelect = (props) => {
  const {
    styleWrap,
    textLabel,
    placeholder,
    list,
    defaultValue,
    form: { setFieldValue, errors, values, touched },
    field: { name },
  } = props;

  const onChange = React.useCallback(
    (event) => {
      const { value } = event.target;
      setFieldValue(name, value || '');
    },
    [setFieldValue, name]
  );

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
      <NativeSelect
        {...fieldToSelect(props)}
        sx={{
          width: '100%',
          color: '#06102B',
          fontWeight: '700',
          fontSize: '12px',
          height: '42px',
          fontFamily: 'var(--font-family-montserrat)',
        }}
        defaultValue={values[name] || defaultValue}
        onChange={onChange}
        input={<BootstrapInput />}
        IconComponent={KeyboardArrowDown}
      >
        <option value="">{placeholder}</option>
        {list.map((data, i) => (
          <option value={data} key={i}>
            {data}
          </option>
        ))}
      </NativeSelect>
      {errors[name] && touched[name] && (
        <Typography sx={{ color: 'red', fontSize: '13px' }}>
          {errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default InputSelect;
