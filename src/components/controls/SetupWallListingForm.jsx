import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { LoadingButton } from '@mui/lab';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';

import ControlledInputTextField from 'src/components/controls/ControlledInputTextField';
import ControlledInputSelect from 'src/components/controls/ControlledInputSelect';
import ControlledInputMultiSelect from 'src/components/controls/ControlledInputMultiSelect';
import ControlledInputUpload from 'src/components/controls/ControlledInputUpload';
import {
  WALL_CONSTRUCTION_TYPES,
  WALL_CONDITIONS,
} from 'src/constants/listingConstants';

import {
  selectListingDetails,
  REQUEST_STATUS,
} from 'src/reducers/submitListingReducers';

import { styled as muiStyledSystem } from '@mui/system';
import InputLabel from './InputLabel';

import { DATE_REQUIRED } from 'src/constants/errorMessage';

const useFormLabelStyles = makeStyles({
  submitButton: {
    fontFamily: 'var(--font-family-montserrat)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    backgroundColor: 'transparent',
    padding: '0',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '34px',
    letterSpacing: '0em',
    textAlign: ['center', 'center'],
    width: '100%',
    height: '70px',
    background:
      'linear-gradient(91.35deg, #86FFFF 1.34%, #33F7F7 19.62%, #2CDEDE 38.09%, #0AC5C5 65.12%, #04A9A9 97.99%)',
    borderRadius: '8px',
    cursor: 'pointer',
  },
});

const validationSchema = Yup.object().shape({
  endDate: Yup.date().nullable().required(DATE_REQUIRED),
  description: Yup.string().nullable().required('Description is required.'),
  wallMade: Yup.string().nullable().required('Wall made of is required.'),
  height: Yup.number().min(1).nullable().required('Height is required.'),
  width: Yup.number().min(1).nullable().required('Width is required.'),
  propertyType: Yup.string().nullable().required('Property type is required.'),
  location: Yup.string().nullable().required('Location of wall is required.'),
  condition: Yup.string().nullable().required('Condition of wall is required.'),
  propertyPhoto: Yup.array()
    .min(1, 'At least 1 photo is required.')
    .nullable()
    .required(),
  direction: Yup.string().nullable(),
  colorPalette: Yup.string().nullable(),
  artStyle: Yup.array().nullable(),
  availability: Yup.array().nullable(),
});

const SetupWallListingForm = (props) => {
  const styles = useFormLabelStyles();
  const { onBack, onSubmit } = props;
  const listing = useSelector(selectListingDetails);

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setSubmitting, handleSubmit }) => (
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-family-montserrat)',
                  lineHeight: 2,
                }}
              >
                Thanks for giving us some details. Now lets build your landing
                page so we have a summarized page to showcase all your work and
                accomplishments to the universe.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Field
                component={ControlledInputTextField}
                textLabel="When do you need this project completed by?"
                name="endDate"
                typeInput="date"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={ControlledInputTextField}
                textLabel="Tell us a little about your property and what you are looking for?"
                name="description"
                multiline
                inputProps={{
                  minRows: 6,
                  maxRows: 6,
                }}
                typeInput="textarea"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={ControlledInputUpload}
                textLabel="Show us photos, elevations or renderings of your property/wall:"
                name="propertyPhoto"
                multiple
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={ControlledInputSelect}
                textLabel="What is this wall made of?"
                placeholder="choose wall"
                name="wallMade"
                list={WALL_CONSTRUCTION_TYPES}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel text="What are the dimensions of the wall?" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={ControlledInputTextField}
                textLabel="Height"
                placeholder="24"
                name="height"
                typeInput="number"
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={ControlledInputTextField}
                textLabel="Width"
                placeholder="24"
                name="width"
                typeInput="number"
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={ControlledInputTextField}
                textLabel="Do you have a favorite color palette?"
                placeholder="List of colors in HEX format separated by comma"
                name="colorPalette"
                typeInput="textarea"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={ControlledInputSelect}
                textLabel="Where is this located?"
                name="location"
                list={['Indoor', 'Outdoor']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                component={ControlledInputMultiSelect}
                textLabel="What is available at the property?"
                name="availability"
                list={facilityList}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={ControlledInputSelect}
                textLabel="What is the condition of the wall?"
                name="condition"
                list={WALL_CONDITIONS}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={ControlledInputSelect}
                textLabel="What kind of property is this?"
                name="propertyType"
                list={propertyTypeList}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={ControlledInputSelect}
                textLabel="Do you know what direction this wall faces?
                (If building faces direct sunlight, we may need
                to prepare UV shield to protect from sun damage)"
                name="direction"
                list={directionList}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={ControlledInputMultiSelect}
                textLabel="Describe the artistic style you are interested in:"
                name="artStyle"
                list={styleList}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BackButton onClick={() => onBack(values)}>
                <Box sx={{ textAlign: 'center', width: '100%' }}>Back</Box>
              </BackButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LoadingButton
                className={styles.submitButton}
                onClick={handleSubmit}
                loading={listing.status === REQUEST_STATUS.LOADING}
                disabled={listing.status === REQUEST_STATUS.LOADING}
              >
                <Box sx={{ textAlign: 'center', width: '100%' }}>Finish</Box>
              </LoadingButton>
            </Grid>
            <Grid item xs={12}>
              {listing.status === REQUEST_STATUS.FAILED && (
                <Typography sx={{ color: 'red', marginBottom: '5px' }}>
                  {listing.error}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default SetupWallListingForm;

const BackButton = muiStyledSystem('button')(`
  font-family: var(--font-family-montserrat);
  color: #33F7F7;
  display: flex;
  align-items: center;
  border: 1px solid #33F7F7;
  background-color: transparent;
  padding: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;
  width: 100%;
  height: 70px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`);

const propertyTypeList = [
  'Industrial',
  'Schools & Universities',
  'Commercial',
  'Residential',
  'Multifamily',
  'Garage',
  'Office',
  'Hotel',
  'Retail & Restaurant',
];

const facilityList = [
  {
    label: 'Wifi',
    value: 'wifi',
  },
  {
    label: 'Bathroom',
    value: 'bathroom',
  },
  {
    label: 'Slop Sink',
    value: 'Slop Sink',
  },
  {
    label: 'Parking - Paid ',
    value: 'Parking - Paid ',
  },
  {
    label: 'Parking - Free',
    value: 'Parking - Free',
  },
  {
    label: 'Ladder Onsite',
    value: 'Ladder Onsite',
  },
];

const directionList = ['North', 'South', 'East', 'West'];
const styleList = [
  {
    label: '3D',
    value: '3D',
  },
  {
    label: 'Abstract',
    value: 'Abstract',
  },
  {
    label: 'Anamorphic',
    value: 'Anamorphic',
  },
  {
    label: 'Calligraphy',
    value: 'Calligraphy',
  },
  {
    label: 'Cartoon',
    value: 'Cartoon',
  },
  {
    label: 'Contemporary',
    value: 'Contemporary',
  },
  {
    label: 'Cubism',
    value: 'Cubism',
  },
  {
    label: 'Fantasy',
    value: 'Fantasy',
  },
  {
    label: 'Figurative',
    value: 'Figurative',
  },
  {
    label: 'Geometric',
    value: 'Geometric',
  },
  {
    label: 'Graffiti',
    value: 'Graffiti',
  },
  {
    label: 'Impressionist',
    value: 'Impressionist',
  },
  {
    label: 'Landscape',
    value: 'Landscape',
  },
  {
    label: 'Lettering',
    value: 'Lettering',
  },
  {
    label: 'Modern',
    value: 'Modern',
  },
  {
    label: 'Optical Illusion',
    value: 'Optical Illusion',
  },
  {
    label: 'Pop Art',
    value: 'Pop Art',
  },
  {
    label: 'Portrait',
    value: 'Portrait',
  },
  {
    label: 'Realism',
    value: 'Realism',
  },
  {
    label: 'Surrealism',
    value: 'Surrealism',
  },
  {
    label: 'Typography',
    value: 'Typography',
  },
];
