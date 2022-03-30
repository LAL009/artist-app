import React, { useState } from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import { useSwitch } from '@mui/core/SwitchUnstyled';

const SwitchRoot = styled('span')(`
  display: inline-block;
  position: relative;
  width: 212px;
  height: 41px;
  padding: 4px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.5);
  border: none;
`);

const SwitchInput = styled('input')(`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`);

const SwitchThumb = styled('span')(
  ({ theme }) => `
  position: absolute;
  display: flex;
  border-radius: 8px;
  text-align: center;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(79.45deg, #5700FF 6.96%, #64E1DC 108.67%);

  &:before {
    display: flex;
    content: "artist";
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
    line-height: 240%;
    align-items: center;
    justify-content: center;
    transform: translateX(23px);
    text-transform: capitalize;
  }

  &:after {
    color: #06102b;
    display: flex;
    content: "walls";
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 600;
    line-height: 240%;
    align-items: center;
    justify-content: center;
    transform: translateX(77px);
    text-transform: capitalize;
  }

  &.checked {
    transform: translateX(2px);
    background: transparent !important;
    &:before {
      color: #06102b;
      content: "Artist";
      transform: translateX(0px);
    }
    &:after {
        color: #ffffff;
        background: linear-gradient(79.45deg, #64E1DC 6.96%, #5700FF 108.67%) !important;
        border-radius: 8px;
        display: flex;
        position: absolute;
        transform: translateX(97px);
    }
  }
`
);

const SwitchTrack = styled('span')(
  ({ theme }) => `
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: block;
`
);

function WxSwitch(props) {
  const { getInputProps, checked, focusVisible } = useSwitch(props);

  const stateClasses = {
    checked,
    focusVisible,
  };

  return (
    <SwitchRoot
      className={clsx(stateClasses)}
      sx={{
        width: {
          xs: '200px',
          sm: '200px',
          md: '212px',
          lg: '212px',
          xl: '212px',
        },
        height: {
          xs: '38px',
          sm: '38px',
          md: '41px',
          lg: '41px',
          xl: '41px',
        },
      }}
    >
      <SwitchTrack>
        <SwitchThumb
          className={clsx(stateClasses)}
          sx={{
            width: {
              xs: '92px',
              sm: '92px',
              md: '102px',
              lg: '102px',
              xl: '102px',
            },
            height: {
              xs: '30px',
              sm: '30px',
              md: '33px',
              lg: '33px',
              xl: '33px',
            },
          }}
        />
      </SwitchTrack>
      <SwitchInput
        checked={checked}
        {...getInputProps()}
        aria-label="Artist/Wxlls"
      />
    </SwitchRoot>
  );
}

const UseSwitchesCustom = (props) => {
  const [checked, setChecked] = useState(props.searchType === 'walls');
  const [value, setValue] = useState('artists');

  React.useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const handleChange = (event) => {
    console.log('event.target.checked', event.target.checked);
    props.onChange(!event.target.checked ? 'artists' : 'walls');
    // setChecked(event.target.checked);
    // setValue(event.target.checked ? 'artists' : 'walls');
    // console.log(event.target.checked ? 'artists' : 'walls');
    // props.onChange(event.target.checked ? 'artists' : 'walls');
  };

  return (
    <WxSwitch
      value={props.searchType}
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
};

UseSwitchesCustom.propTypes = {
  onChange: PropTypes.func,
};

UseSwitchesCustom.defaultProps = {
  onChange: () => undefined,
};

export default UseSwitchesCustom;
