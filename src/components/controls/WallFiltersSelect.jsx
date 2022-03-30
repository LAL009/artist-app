import React from 'react';
import PropTypes from 'prop-types';
import { styled, InputBase, NativeSelect } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  position: 'relative',
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input, & .MuiInputBase-input:focus': {
    border: '#e2e8f0 solid 2px',
    borderRadius: '8px',
    padding: '0 12px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '42px',
    outline: 'none',
    fontFamily: 'var(--font-family-montserrat)',
    boxShadow: 'inset 0px 0px 6px rgba(0, 0, 0, 0.5)',
    border: 'none',
  },
  '& .MuiSvgIcon-root': {
    right: '12px',
    transform: 'rotate(180deg)',
  },
}));

const WallFiltersSelect = (props) => {
  const { inputProps, defaultValue, list, placeholder, styleWrap, onChange } =
    props;

  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target);
  };
  return (
    <NativeSelect
      sx={{
        ...styleWrap,
        width: '100%',
        color: '#06102B',
        fontWeight: '700',
        fontSize: '12px',
        height: '42px',
        fontFamily: 'var(--font-family-montserrat)',
      }}
      value={value}
      onChange={handleChange}
      input={<BootstrapInput />}
      IconComponent={KeyboardArrowDown}
      {...inputProps}
    >
      <option value="">{placeholder}</option>
      {list.map((data, i) => (
        <option value={data} key={i}>
          {data}
        </option>
      ))}
    </NativeSelect>
  );
};

export default WallFiltersSelect;

WallFiltersSelect.propTypes = {
  onChange: PropTypes.func,
};

WallFiltersSelect.defaultProps = {
  onChange: () => undefined,
};
