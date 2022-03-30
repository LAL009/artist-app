import * as React from 'react';
import { useInput } from '@mui/core/';
import { styled as muiStyled } from '@mui/system';

const StyledInputElement = muiStyled('input')(`
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  width: 200px;
  font-size: var(--font-size-l);
  line-height: 1.4375em;
  background: transparent;
  border: unset;
  color: var(--white-42);
  transition: width 300ms ease;
  white-space: nowrap;
  line-height: 75px;
  letter-spacing: 0;

  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props, ref);

  return (
    <div {...getRootProps()}>
      <StyledInputElement {...props} {...getInputProps()} />
    </div>
  );
});

export default function SearchFormTextField({ placeholder }) {
  return (
    <CustomInput
      disabled={false}
      aria-label={placeholder}
      placeholder={placeholder}
    />
  );
}
