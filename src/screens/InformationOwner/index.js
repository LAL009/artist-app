import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import StepperCustom from 'src/components/controls/StepperCustom';
import SignUpOwnerForm from 'src/components/controls/SignUpOwnerForm';
import SetupWallListingForm from 'src/components/controls/SetupWallListingForm';

import { submitListing } from 'src/actions/listingActions';

const InformationOwner = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [step, setStep] = useState(0);
  const [aboutCompanyInitialValues, setAboutCompanyInitialValues] = useState({
    companyName: null,
    companyInstagram: null,
    companyWebsite: null,
    phoneNumber: null,
    budget: null,
    crypto: 'no',
    address: null,
  });
  const [listingInitialValues, setListingInitialValues] = useState({
    endDate: null,
    description: null,
    wallMade: 'Brick',
    height: null,
    width: null,
    propertyType: 'Industrial',
    location: 'Indoor',
    availability: [],
    condition: 'Brand new development',
    direction: null,
    artStyle: [],
    profilePhoto: [],
    logo: [],
    colorPalette: null,
    propertyPhoto: [],
  });

  const onSubmit = (val, { setSubmitting }) => {
    const newValues = { ...aboutCompanyInitialValues, ...val };
    const {
      companyName,
      phoneNumber,
      budget = 0,
      endDate,
      description,
      wallMade,
      height,
      width,
      propertyType,
      location,
      availability,
      condition,
      direction,
      artStyle,
      colorPalette,
      propertyPhoto = newValues.propertyPhoto,
      address,
    } = newValues;

    const newAddress = address.split(',');
    const info = {
      listing_type: 'comissioned', // TODO: Missing UI
      wall_type: wallMade, // TODO: Duplicate with construction
      offered: budget,
      art_styles: artStyle.map((item) => item.value),
      wxllownerName: companyName,
      wxllownerEmail: userInfo.email,
      wxllowner_phone: phoneNumber,
      description,
      location_of_wall: location,
      size: (width * height).toString(),
      height,
      width,
      direction_face: direction,
      start_end_date: endDate,
      condition,
      construction: wallMade,
      property_type: propertyType,
      dimension: `${height}H X ${width}L`,
    };

    const details = {
      info: info,
      address: {
        street_address: newAddress[0]?.trim(),
        city: newAddress[1]?.trim(),
        state: newAddress[2]?.trim(),
        zipcode: newAddress[3]?.trim(),
        country: newAddress[4]?.trim(),
      },
      images: propertyPhoto
        .filter((item, index) => index !== 0)
        .map((item) => item.file),
      featureImage: propertyPhoto.map((item) => item.file)[0],
      amenities: availability.map((item) => item.label),
      colorscheme: colorPalette?.split(','),
    };

    dispatch(
      submitListing(details, (success, slug) => {
        setSubmitting(success);
        success && history.push(`wall/${slug}`);
      })
    );
  };

  return (
    <Box
      sx={{
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto',
        padding: '160px 20px 140px 20px',
      }}
    >
      <Box
        sx={{
          padding: '40px',
          width: '100%',
          background:
            'linear-gradient(#121c36, #121c36) padding-box, linear-gradient(144deg, rgba(0,200,200,1) 0%, rgba(18,28,54,1) 34%, rgba(18,28,54,1) 70%, rgba(85,126,252,1) 100%) border-box',
          borderRadius: '32px',
          border: '1px solid transparent',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StepperCustom
              listText={['about your company', 'set up your wall listing']}
              activeStep={step}
            />
          </Grid>
          {step === 0 ? (
            <SignUpOwnerForm
              initialValues={aboutCompanyInitialValues}
              onSubmit={(val) => {
                setStep(1);
                setAboutCompanyInitialValues({
                  ...aboutCompanyInitialValues,
                  ...val,
                });
              }}
            />
          ) : (
            <SetupWallListingForm
              initialValues={listingInitialValues}
              onBack={(val) => {
                setStep(0);
                setListingInitialValues({ ...listingInitialValues, ...val });
              }}
              onSubmit={(val, setSubmitting) => onSubmit(val, setSubmitting)}
            />
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default InformationOwner;
