import React from 'react';
import { styled, InputBase, NativeSelect, Box } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
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
    height: '65.75px',
    outline: 'none',
    fontFamily: 'var(--font-family-montserrat)',
    backgroundColor: '#18223b',
    fontSize: '16px',
    color: '#464e62',
    fontWeight: 700,
  },
  '& .MuiSvgIcon-root': {
    right: '21px',
    transform: 'rotate(0)',
    color: '#464e62',
  },
  '& .MuiInputBase-input option': {
    backgroundColor: '#FFFFFF !important',
    color: 'var(--fiord)',
    fontSize: 'var(--font-size-s2)',
    fontStyle: 'normal',
    fontFamily: 'var(--font-family-montserrat)',
    fontWeight: 600,
    textTransform: 'capitalize',
  },
}));

const InputSelectArtist = (props) => {
  const {
    defaultValue,
    list,
    placeholder,
    styleWrap,
    textLabel,
    getSelectValue,
  } = props; // getSelectValue is function to get value from child

  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
    getSelectValue && getSelectValue(event.target.value);
  };

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
        sx={{
          width: '100%',
          color: '#06102B',
          fontWeight: '700',
          fontSize: '12px',
          height: '65.75px',
          fontFamily: 'var(--font-family-montserrat)',
        }}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
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
    </Box>
  );
};

export default InputSelectArtist;
