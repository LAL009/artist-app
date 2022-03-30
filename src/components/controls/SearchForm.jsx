import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import styled, { css } from 'styled-components';
import { SmallSearchForm } from './SmallSearchForm';
import { SearchButton } from './SearchButton';
import { Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import InputBase from '@mui/material/InputBase';
import { useHistory } from 'react-router-dom';

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratSemiBoldWhite12px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s2);
  font-weight: 600;
  font-style: normal;
`;

export const MontserratSemiBoldWhite16px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-l);
  font-weight: 600;
  font-style: normal;
`;

export const MontserratSemiBoldWhite14px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m);
  font-weight: 600;
  font-style: normal;
`;

const Container = styled.div`
  width: 699px;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  align-items: center;
  min-height: 163px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(60px);
`;

const SearchWXLLSPACE = styled.div`
  ${ValignTextMiddle}
  ${MontserratSemiBoldWhite16px}
  width: 174px;
  height: 24px;
  margin-top: 6px;
  margin-left: 0;
  letter-spacing: 0;
  line-height: 75px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  width: 659px;
  height: 64px;
  position: relative;
  margin-top: 29px;
  border-radius: 1000px;
`;

const SearchByLocation = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 146px;
  height: 17px;
  top: 24px;
  left: 246px;
  font-family: var(--font-family-montserrat);
  font-weight: 500;
  color: var(--white-42);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 75px;
  white-space: nowrap;
`;

const SearchInputBorder = styled.div`
  position: absolute;
  width: 659px;
  height: 64px;
  top: 0;
  left: 0;
  border-radius: 1000px;
  border: 1px solid rgba(255, 255, 255, 0.17);
  z-index: -1;
`;

const SearchBySwitch = styled.div`
  ${MontserratSemiBoldWhite12px}
  position: absolute;
  height: 41px;
  top: 7px;
  left: 11px;
  display: flex;
  padding: 3.6px 3.6px;
  align-items: flex-start;
  min-width: 212px;
  border-radius: 100px;
`;

const ProxyComponent = () => {
  const history = useHistory();
  const theme = useTheme();
  const largerThanSm = useMediaQuery(theme.breakpoints.up('sm'));
  const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [switchValue, setSwitchValue] = React.useState('walls');
  const [selectedCity, setSelectedCity] = React.useState('');

  const homepage = useSelector((state) => state.homepage);
  const registeredCities = homepage.results?.cities?.map((data) => ({
    label: data,
  }));

  const handleSearchFormChange = (value) => {
    setSelectedCity(value);
  };

  const handleSearchButtonClick = () => {
    history.push(`/marketplace?city=${selectedCity}`);
  };

  if (largerThanSm) {
    return (
      <Container>
        <SearchWXLLSPACE>Search WXLLSPACE</SearchWXLLSPACE>
        <OverlapGroup1>
          <SearchByLocation>
            <Autocomplete
              disablePortal
              isOptionEqualToValue={(option, value) =>
                option.label === value.label
              }
              options={registeredCities}
              onInputChange={(event, newInputValue) => {
                handleSearchFormChange(newInputValue);
              }}
              renderOption={(props, option) => {
                const { label } = option;
                return (
                  <span
                    {...props}
                    style={{ color: '#06102b', backgroundColor: '#fff' }}
                  >
                    {label}
                  </span>
                );
              }}
              renderInput={(params) => {
                return (
                  <InputBase
                    {...params}
                    sx={{
                      fontFamily: 'var(--font-family-montserrat) !important',
                      fontWeight: '600 !important',
                      lineHeight: '1.4375em',
                      background: 'transparent',
                      position: 'relative',
                      padding: '6px 35px 3px 8px',
                      width: '100%',
                      fontSize: '14px !important',
                    }}
                    placeholder="Search by city"
                    inputProps={params.inputProps}
                    ref={params.InputProps.ref}
                    value={selectedCity}
                    label="Search by city"
                  />
                );
              }}
            />
          </SearchByLocation>

          <SearchInputBorder></SearchInputBorder>

          <Box
            sx={{
              position: 'absolute',
              height: '48px',
              top: {
                sm: '15px',
                md: '8px',
                lg: '8px',
                xl: '8px',
              },
              left: {
                sm: '540px',
                md: '519px',
                lg: '519px',
                xl: '519px',
              },
            }}
          >
            <SearchButton onClick={handleSearchButtonClick} />
          </Box>

          {/*
          Temporarily disable the switch
          <SearchBySwitch
            onClick={(e) => {
              switchValue === 'walls' && setSwitchValue('artist');
              switchValue === 'artist' && setSwitchValue('walls');
            }}
          >
            <WxSwitch></WxSwitch>
          </SearchBySwitch> */}
        </OverlapGroup1>
      </Container>
    );
  }

  if (smallerThanSm) {
    return (
      <SmallSearchForm
        city={selectedCity}
        cities={registeredCities}
        onSubmitSearchFormChange={handleSearchFormChange}
        onSubmitSearchForm={handleSearchButtonClick}
      />
    );
  }

  return null;
};

export const SearchForm = (props) => <ProxyComponent {...props} />;
