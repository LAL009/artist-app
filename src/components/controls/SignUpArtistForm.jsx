import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import * as Yup from 'yup';
import { Field, Form, Formik, useFormikContext } from 'formik';
import { styled as muiStyledSystem } from '@mui/system';

import StepperCustom from './StepperCustom';
import InputTextarea from './InputTextarea';
import InputLabel from './InputLabel';
import ControlledInputPhoneNumber from 'src/components/controls/ControlledInputPhoneNumber';
import ControlledInputTextField from 'src/components/controls/ControlledInputTextField';
import ControlledInputAddress from './ControlledInputAddress';
import ControlledInputSlider from './ControlledInputSlider';
import ControlledInputSelect from './ControlledInputSelect';
import ControlledInputRadioGroup from './ControlledInputRadioGroup';
import ControlledInputMultiSelect from './ControlledInputMultiSelect';
import ControlledInputUpload from 'src/components/controls/ControlledInputUpload';
import { submitArtistInfo } from 'src/actions/artistActions';
import { selectSignedInUser } from 'src/reducers/userReducers';
import store from '../../store';
import { ARTIST_SUBMIT_INFO_LOADING } from '../../constants/artistConstants';

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

const validationSchema = [
  Yup.object().shape({
    firstName: Yup.string().required().min(3),
    phoneNumber: Yup.string().required('A valid phone number is required'),
    instagram: Yup.string().required(),
    website: Yup.string().optional(),
    about: Yup.string().required().max(1500),
    fullAddress: Yup.string().required('Address is required field.'),
  }),
  Yup.object().shape({
    pricePerSquareFoot: Yup.number(),
    paySplitPreference: Yup.string().required(),
    acceptCryptoPayment: Yup.string(),
  }),
  Yup.object().shape({
    experienceLevel: Yup.string().required(),
    completedMurals: Yup.string().required(),
    artStyle: Yup.array().nullable(),
  }),
  Yup.object().shape({
    profilePhoto: Yup.array().nullable(),
    portfolio: Yup.array().nullable(),
    logo: Yup.array(),
    brand: Yup.array(),
    artistImage: Yup.mixed().required(),
    colorPalette: Yup.array(),
    photo1: Yup.array().nullable(),
    photo1Title: Yup.string().nullable(),
    photo1Address: Yup.string().nullable(),
    photo2: Yup.array().nullable(),
    photo2Title: Yup.string().nullable(),
    photo2Address: Yup.string().nullable(),
    photo3: Yup.array().nullable(),
    photo3Title: Yup.string().nullable(),
    photo3Address: Yup.string().nullable(),
    photo4: Yup.array().nullable(),
    photo4Title: Yup.string().nullable(),
    photo4Address: Yup.string().nullable(),
    photo5: Yup.array().nullable(),
    photo5Title: Yup.string().nullable(),
    photo5Address: Yup.string().nullable(),
    photo6: Yup.array().nullable(),
    photo6Title: Yup.string().nullable(),
    photo6Address: Yup.string().nullable(),
    photo7: Yup.array().nullable(),
    photo7Title: Yup.string().nullable(),
    photo7Address: Yup.string().nullable(),
    photo8: Yup.array().nullable(),
    photo8Title: Yup.string().nullable(),
    photo8Address: Yup.string().nullable(),
  }),
];

// Scroll to first error
const ScrollToError = () => {
  const formik = useFormikContext();
  const submitting = formik?.isSubmitting;

  useEffect(() => {
    const el = document.querySelector('.Mui-error, [data-error]');
    if (!el) return;
    (el?.parentElement ?? el)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [submitting]);
  return null;
};

const SignUpArtistForm = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const signedInUser = useSelector(selectSignedInUser);
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const isLastStep = activeStep === 3;
  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    fullAddress: '',
    instagram: '',
    website: '',
    about: '',
    pricePerSquareFoot: 0,
    paySplitPreference: '',
    acceptCryptoPayment: 'no',
    experienceLevel: '',
    completedMurals: '',
    artStyle: [],
    artistImage: null,
    profilePhoto: [],
    portfolio: [],
    logo: [],
    brand: [],
    colorPalette: [],
    photo1: [],
    photo1Title: '',
    photo1Address: '',
    photo2: [],
    photo2Title: '',
    photo2Address: '',
    photo3: [],
    photo3Title: '',
    photo3Address: '',
    photo4: [],
    photo4Title: '',
    photo4Address: '',
    photo5: [],
    photo5Title: '',
    photo5Address: '',
    photo6: [],
    photo6Title: '',
    photo6Address: '',
    photo7: [],
    photo7Title: '',
    photo7Address: '',
    photo8: [],
    photo8Title: '',
    photo8Address: '',
  };

  const onSubmitArtistInfo = async (values, actions) => {
    if (!isLastStep) {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
      return;
    }

    const artistInfo = {
      id: signedInUser.id,
      name: `${values.firstName} ${values.lastName}`,
      email: signedInUser.email,
      fullAddress: values.fullAddress,
      phone: values.phoneNumber,
      instagram_handle: values.instagram,
      website: values.instagram,
      about: values.about,
      pricePerSquareFoot: values.pricePerSquareFoot,
      paySplitPreference: values.paySplitPreference,
      acceptCryptoPayment: values.acceptCryptoPayment === 'yes',
      experienceLevel: values.experienceLevel,
      completedMurals: values.completedMurals,
      art_types: values.artStyle.map((style) => style.value),
      logo: values.logo.map((item) => item.file)[0],
      artistImage: values.artistImage.map((item) => item.file)[0],
      brand: values.brand.map((item) => item.file)[0],
      colorPalette: values.colorPalette.map((item) => item.file)[0],
      photo1: values.photo1.map((item) => item.file)[0],
      photo1Title: values.photo1Title,
      photo1Address: values.photo1Address,
      photo2: values.photo2.map((item) => item.file)[0],
      photo2Title: values.photo2Title,
      photo2Address: values.photo2Address,
      photo3: values.photo3.map((item) => item.file)[0],
      photo3Title: values.photo3Title,
      photo3Address: values.photo3Address,
      photo4: values.photo4.map((item) => item.file)[0],
      photo4Title: values.photo4Title,
      photo4Address: values.photo4Address,
      photo5: values.photo5.map((item) => item.file)[0],
      photo5Title: values.photo5Title,
      photo5Address: values.photo5Address,
      photo6: values.photo6.map((item) => item.file)[0],
      photo6Title: values.photo6Title,
      photo6Address: values.photo6Address,
      photo7: values.photo7.map((item) => item.file)[0],
      photo7Title: values.photo7Title,
      photo7Address: values.photo7Address,
      photo8: values.photo8.map((item) => item.file)[0],
      photo8Title: values.photo8Title,
      photo8Address: values.photo8Address,
    };

    await dispatch(submitArtistInfo(artistInfo));
    actions.setTouched({});
    actions.setSubmitting(false);
    history.push(`/artist/${artistInfo.name}`);
  };

  store.subscribe(() => {
    const state = store.getState();
    const status = state?.artistInformationForm?.status;
    if (status === ARTIST_SUBMIT_INFO_LOADING) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[activeStep]}
      onSubmit={onSubmitArtistInfo}
    >
      {({ handleSubmit, isSubmitting }) => {
        return (
          <Form>
            <Grid container spacing={2}>
              {/* stepper */}
              <Grid item xs={12}>
                <StepperCustom
                  listText={[
                    'Introduce Yourself',
                    'Payment and Pricing',
                    'Experience',
                    'Let’s Build Your Landing Page',
                  ]}
                  activeStep={activeStep}
                />
              </Grid>

              {/* step 1 */}
              {activeStep === 0 && (
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={ControlledInputTextField}
                        textLabel="What is your first name?"
                        placeholder="Jordan"
                        name="firstName"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={ControlledInputTextField}
                        textLabel="Last name?"
                        placeholder="Giha"
                        name="lastName"
                      />
                    </Grid>
                    {/* phone */}
                    <Grid item xs={12}>
                      <Field
                        component={ControlledInputPhoneNumber}
                        textLabel="What is the best number to reach you at?"
                        placeholder="(808)808-0808"
                        name="phoneNumber"
                      />
                    </Grid>

                    {/* instagram handle */}
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={ControlledInputTextField}
                        textLabel="What is your instagram handle?"
                        placeholder="wxlllander"
                        name="instagram"
                        prefix={
                          <Typography sx={{ color: 'white' }}>@</Typography>
                        }
                      />
                    </Grid>

                    {/* website */}
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={ControlledInputTextField}
                        textLabel="What is your website?"
                        placeholder="https://wxllspace.com"
                        name="website"
                      />
                    </Grid>

                    {/* about you */}
                    <Grid item xs={12}>
                      <Field name="about">
                        {({ field, meta }) => (
                          <>
                            <InputTextarea
                              textLabel="Tell us a little about you?"
                              placeholder="My name is WXLLANDER and I am from WXLLSPACE. I have been sourcing walls to bring back to earth so we can make public art easier to access across the globe. I am also..."
                              {...field}
                            />

                            {meta.touched && meta.error && (
                              <Typography
                                sx={{ color: 'red', fontSize: '13px' }}
                              >
                                {meta.error}
                              </Typography>
                            )}
                          </>
                        )}
                      </Field>
                    </Grid>

                    {/* address */}
                    <Grid item xs={12}>
                      <Field
                        name="fullAddress"
                        typeInput="text"
                        component={ControlledInputAddress}
                        textLabel="What is your address? (privacy protected - must be added to appear on marketplace)"
                        placeholder="3500 Deer Creek Rd, Palo Alto, CA 94304"
                      />
                    </Grid>

                    {/* button next */}
                    <Grid item xs={12}>
                      <SubmitButton
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      >
                        <Box sx={{ textAlign: 'center', width: '100%' }}>
                          Next Step
                        </Box>
                      </SubmitButton>
                    </Grid>
                  </Grid>
                </Grid>
              )}

              {/* step 2 */}
              {activeStep === 1 && (
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {/* price per square */}
                    <Grid item xs={12}>
                      <Field
                        name="pricePerSquareFoot"
                        typeInput="text"
                        textLabel="Price per Square Foot: $"
                        min={0}
                        max={60}
                        marks={{
                          0: '0',
                          10: '10',
                          20: '20',
                          30: '30',
                          40: '40',
                          50: '50',
                          60: '60',
                        }}
                        component={ControlledInputSlider}
                      />
                    </Grid>

                    {/* pay split */}
                    <Grid item xs={12}>
                      <Field
                        name="paySplitPreference"
                        component={ControlledInputSelect}
                        placeholder="choose pay split"
                        textLabel="What is your preferred pay split?"
                        typeInput="select"
                        list={['33/33/33', '50/50', '20/40/40', '10/45/45']}
                      />
                    </Grid>

                    {/* provide crypto */}
                    <Grid item xs={12}>
                      <Field
                        component={ControlledInputRadioGroup}
                        textLabel="Do you provide crypto as payment?"
                        name="acceptCryptoPayment"
                        items={[
                          { value: 'yes', label: 'Yes' },
                          { value: 'no', label: 'No' },
                        ]}
                      />
                    </Grid>

                    {/* button back */}
                    <Grid item xs={12} sm={6}>
                      <BackButton onClick={() => setActiveStep(0)}>
                        <Box sx={{ textAlign: 'center', width: '100%' }}>
                          Back
                        </Box>
                      </BackButton>
                    </Grid>

                    {/* button next */}
                    <Grid item xs={12} sm={6}>
                      <SubmitButton
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      >
                        <Box sx={{ textAlign: 'center', width: '100%' }}>
                          Next Step
                        </Box>
                      </SubmitButton>
                    </Grid>
                  </Grid>
                </Grid>
              )}

              {/* step 3 */}
              {activeStep === 2 && (
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {/* description */}
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
                        Tell us a little about your experience.
                      </Typography>
                    </Grid>

                    {/* experience */}
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="experienceLevel"
                        defaultValue="Beginner: 1 - 3"
                        component={ControlledInputSelect}
                        typeInput="select"
                        placeholder="choose experience"
                        textLabel="What is your level of experience?"
                        list={[
                          'Beginner: 1 - 3',
                          'Intermediate: 4 - 7',
                          'Advanced: 8+',
                        ]}
                      />
                    </Grid>

                    {/* how many murals */}
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="completedMurals"
                        component={ControlledInputSelect}
                        typeInput="select"
                        defaultValue="0"
                        placeholder="choose total"
                        textLabel="How many murals have you completed?"
                        list={[
                          '0',
                          '1-5',
                          '6-10',
                          '11-20',
                          '21-30',
                          '31-40',
                          '41+',
                        ]}
                      />
                    </Grid>

                    {/* artistic style */}
                    <Grid item xs={12}>
                      <Field
                        component={ControlledInputMultiSelect}
                        textLabel="Describe the artistic style you are interested in:"
                        name="artStyle"
                        list={styleList}
                      />
                    </Grid>

                    {/* button back */}
                    <Grid item xs={12} sm={6}>
                      <BackButton onClick={() => setActiveStep(1)}>
                        <Box sx={{ textAlign: 'center', width: '100%' }}>
                          Back
                        </Box>
                      </BackButton>
                    </Grid>

                    {/* button next */}
                    <Grid item xs={12} sm={6}>
                      <SubmitButton
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      >
                        <Box sx={{ textAlign: 'center', width: '100%' }}>
                          Next Step
                        </Box>
                      </SubmitButton>
                    </Grid>
                  </Grid>
                </Grid>
              )}

              {/* step 4 */}
              {activeStep === 3 && (
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {/* description */}
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
                        Thanks for giving us some details. Now lets build your
                        landing page so we have a summarized page to showcase
                        all your work and accomplishments to the universe.
                      </Typography>
                    </Grid>

                    {/* photo profile */}
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={ControlledInputUpload}
                        textLabel="Upload your profile photo"
                        name="artistImage"
                      />
                    </Grid>

                    {/* portfolio */}
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={ControlledInputUpload}
                        textLabel="Would you like to upload your portfolio?"
                        name="portfolio"
                      />
                    </Grid>

                    {/* logo */}
                    <Grid item xs={12}>
                      <Field
                        component={ControlledInputUpload}
                        textLabel="Do you have a logo?"
                        name="logo"
                      />
                    </Grid>

                    {/* Exhibitions */}
                    {/* TODO reconfirm again whether we need this now or later */}
                    {/* <Grid item xs={12}>
                    <InputSelect
                      defaultValue="Year, Show title, Location"
                      placeholder="choose total"
                      textLabel="Exhibitions: Have you been showcased in galleries or private shows? "
                      list={[
                        'Year, Show title, Location',
                        'Year, Show title, Location',
                        'Year, Show title, Location',
                      ]}
                      getSelectValue={console.log}
                    />
                  </Grid> */}

                    {/* brand */}
                    <Grid item xs={12}>
                      <Field
                        component={ControlledInputUpload}
                        textLabel="What brands have you worked with? (SVG format)"
                        name="brand"
                      />
                    </Grid>

                    {/* photo */}
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <InputLabel text="Build your Gallery/Portfolio. Showcase your favorite pieces. (upload 8, add title and location for each)" />
                        </Grid>

                        {/* photo 1 */}
                        <Grid item xs={6}>
                          <Field
                            component={ControlledInputUpload}
                            textLabel="Photo 1"
                            name="photo1"
                          />

                          <Grid container spacing={1} sx={{ marginTop: '2px' }}>
                            {/* title */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={ControlledInputTextField}
                                name="photo1Title"
                                typeInput="text"
                                textLabel="title of the wall"
                                placeholder="title"
                              />
                            </Grid>

                            {/* location */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                name="photo1Address"
                                typeInput="text"
                                component={ControlledInputAddress}
                                textLabel="address (text/google link)"
                                placeholder="address"
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        {/* photo 2 */}
                        <Grid item xs={6}>
                          <Field
                            component={ControlledInputUpload}
                            textLabel="Photo 2"
                            name="photo2"
                          />

                          <Grid container spacing={1} sx={{ marginTop: '2px' }}>
                            {/* title */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={ControlledInputTextField}
                                name="photo2Title"
                                typeInput="text"
                                textLabel="title of the wall"
                                placeholder="title"
                              />
                            </Grid>

                            {/* location */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                name="photo2Address"
                                typeInput="text"
                                component={ControlledInputAddress}
                                textLabel="address (text/google link)"
                                placeholder="address"
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        {/* photo 3 */}
                        <Grid item xs={6}>
                          <Field
                            component={ControlledInputUpload}
                            textLabel="Photo 3"
                            name="photo3"
                          />

                          <Grid container spacing={1} sx={{ marginTop: '2px' }}>
                            {/* title */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={ControlledInputTextField}
                                name="photo3Title"
                                typeInput="text"
                                textLabel="title of the wall"
                                placeholder="title"
                              />
                            </Grid>

                            {/* location */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                name="photo3Address"
                                typeInput="text"
                                component={ControlledInputAddress}
                                textLabel="address (text/google link)"
                                placeholder="address"
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        {/* photo 4 */}
                        <Grid item xs={6}>
                          <Field
                            component={ControlledInputUpload}
                            textLabel="Photo 4"
                            name="photo4"
                          />

                          <Grid container spacing={1} sx={{ marginTop: '2px' }}>
                            {/* title */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={ControlledInputTextField}
                                name="photo4Title"
                                typeInput="text"
                                textLabel="title of the wall"
                                placeholder="title"
                              />
                            </Grid>

                            {/* location */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                name="photo4Address"
                                typeInput="text"
                                component={ControlledInputAddress}
                                textLabel="address (text/google link)"
                                placeholder="address"
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        {/* photo 5 */}
                        <Grid item xs={6}>
                          <Field
                            component={ControlledInputUpload}
                            textLabel="Photo 5"
                            name="photo5"
                          />

                          <Grid container spacing={1} sx={{ marginTop: '2px' }}>
                            {/* title */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={ControlledInputTextField}
                                name="photo5Title"
                                typeInput="text"
                                textLabel="title of the wall"
                                placeholder="title"
                              />
                            </Grid>

                            {/* location */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                name="photo5Address"
                                typeInput="text"
                                component={ControlledInputAddress}
                                textLabel="address (text/google link)"
                                placeholder="address"
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        {/* photo 6 */}
                        <Grid item xs={6}>
                          <Field
                            component={ControlledInputUpload}
                            textLabel="Photo 6"
                            name="photo6"
                          />

                          <Grid container spacing={1} sx={{ marginTop: '2px' }}>
                            {/* title */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={ControlledInputTextField}
                                name="photo6Title"
                                typeInput="text"
                                textLabel="title of the wall"
                                placeholder="title"
                              />
                            </Grid>

                            {/* location */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                name="photo6Address"
                                typeInput="text"
                                component={ControlledInputAddress}
                                textLabel="address (text/google link)"
                                placeholder="address"
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        {/* photo 7 */}
                        <Grid item xs={6}>
                          <Field
                            component={ControlledInputUpload}
                            textLabel="Photo 7"
                            name="photo7"
                          />

                          <Grid container spacing={1} sx={{ marginTop: '2px' }}>
                            {/* title */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={ControlledInputTextField}
                                name="photo7Title"
                                typeInput="text"
                                textLabel="title of the wall"
                                placeholder="title"
                              />
                            </Grid>

                            {/* location */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                name="photo7Address"
                                typeInput="text"
                                component={ControlledInputAddress}
                                textLabel="address (text/google link)"
                                placeholder="address"
                              />
                            </Grid>
                          </Grid>
                        </Grid>

                        {/* photo 8 */}
                        <Grid item xs={6}>
                          <Field
                            component={ControlledInputUpload}
                            textLabel="Photo 8"
                            name="photo8"
                          />

                          <Grid container spacing={1} sx={{ marginTop: '2px' }}>
                            {/* title */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                component={ControlledInputTextField}
                                name="photo8Title"
                                typeInput="text"
                                textLabel="title of the wall"
                                placeholder="title"
                              />
                            </Grid>

                            {/* location */}
                            <Grid item xs={12} sm={6}>
                              <Field
                                name="photo8Address"
                                typeInput="text"
                                component={ControlledInputAddress}
                                textLabel="address (text/google link)"
                                placeholder="address"
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* color pallete */}
                    <Grid item xs={12}>
                      <Field
                        component={ControlledInputUpload}
                        textLabel="Do you have a favorite color palette?"
                        name="colorPalette"
                      />
                    </Grid>

                    {/* button back */}
                    <Grid item xs={12} sm={6}>
                      <BackButton onClick={() => setActiveStep(2)}>
                        <Box sx={{ textAlign: 'center', width: '100%' }}>
                          Back
                        </Box>
                      </BackButton>
                    </Grid>

                    {/* button next */}
                    <Grid item xs={12} sm={6}>
                      <SubmitButton
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      >
                        <Box sx={{ textAlign: 'center', width: '100%' }}>
                          {loading ? 'Please wait...' : 'Finish'}
                        </Box>
                      </SubmitButton>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
            <ScrollToError />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpArtistForm;

const SubmitButton = muiStyledSystem('button')(`
  font-family: var(--font-family-montserrat);
  color: white;
  display: flex;
  align-items: center;
  border: none;
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
  background: linear-gradient(91.35deg, #86FFFF 1.34%, #33F7F7 19.62%, #2CDEDE 38.09%, #0AC5C5 65.12%, #04A9A9 97.99%);
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`);

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
