import React from 'react';
import { Box, Grid, CardMedia, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import TotalProposedBudget from './TotalProposedBudget';
import TotalEstimatedCost from './TotalEstimatedCost';
import ControlledInputUpload from 'src/components/controls/ControlledInputUpload';
import ControlledInputTextField from 'src/components/controls/ControlledInputTextField';
import InputSwitchYesNo2 from 'src/components/controls/ControlledInputSwitchYesNo';
import InputSlider from 'src/components/controls/ControlledInputSlider';

import { selectListingDetails } from 'src/reducers/listingReducers';
import {
  selectProposalDetails,
  REQUEST_STATUS,
} from 'src/reducers/proposalReducers';
import { submitProposal } from 'src/actions/proposalActions';

import {
  PRICE_PER_SQUARE_FEET_REQUIRED,
  DATE_REQUIRED,
} from 'src/constants/errorMessage';

const validationSchema = Yup.object().shape({
  startDate: Yup.date().nullable().required(DATE_REQUIRED),
  endDate: Yup.date().nullable().required(DATE_REQUIRED),
  requiredLift: Yup.boolean().nullable(),
  pricePerSqft: Yup.number()
    .nullable()
    .min(1)
    .nullable()
    .required(PRICE_PER_SQUARE_FEET_REQUIRED),
  hotelCharges: Yup.number().min(1).nullable(),
  travelCost: Yup.number().min(1).nullable(),
  paintAndMaterialCost: Yup.number().min(1).nullable(),
  notes: Yup.string().nullable(),
  proposalImage: Yup.array(),
});

const SubmitProposalForm = (props) => {
  const dispatch = useDispatch();
  const { styleWrap } = props;
  const listingDetails = useSelector(selectListingDetails);
  const proposalDetails = useSelector(selectProposalDetails);
  const { info } = listingDetails.data;

  const onSubmitProposal = (values, { setSubmitting, setErrors }) => {
    const {
      startDate,
      requiredLift,
      notes,
      pricePerSqft,
      hotelCharges,
      travelCost,
      paintAndMaterialCost,
      proposalImage,
    } = values;

    const basePrice = pricePerSqft * Number(info.size);
    const otherCost =
      Number(hotelCharges) + Number(travelCost) + Number(paintAndMaterialCost);

    dispatch(
      submitProposal(
        {
          listing_id: listingDetails?.data._id,
          start_date: startDate,
          lift_required: requiredLift,
          estimated_quote: Number(info.offered),
          artistProposal: basePrice + otherCost,
          // commission:
          notes_questions: notes,
          price_per_square: pricePerSqft,
          hotelAcommodation: Number(hotelCharges),
          travelCost: Number(travelCost),
          paintMaterial: Number(paintAndMaterialCost),
          proposalImage: proposalImage.map((item) => item.file),
        },
        () => setSubmitting(false)
      )
    );
  };

  return (
    <Box sx={styleWrap}>
      <SectionHeading>Send Proposal</SectionHeading>
      <Grid container spacing={2}>
        <Formik
          initialValues={{
            startDate: null,
            endDate: null,
            requiredLift: false,
            pricePerSqft: 20,
            hotelCharges: null,
            travelCost: null,
            paintAndMaterialCost: null,
            notes: null,
            proposalImage: [],
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmitProposal}
        >
          {({ handleSubmit, values }) => {
            const {
              pricePerSqft,
              hotelCharges,
              travelCost,
              paintAndMaterialCost,
            } = values;

            const basePrice = Number(pricePerSqft) * Number(info.size);
            const otherCost =
              Number(hotelCharges) +
              Number(travelCost) +
              Number(paintAndMaterialCost);

            return (
              <>
                <Grid item xs={6}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="Start Date"
                    name="startDate"
                    typeInput="date"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="End Date"
                    name="endDate"
                    typeInput="date"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={InputSwitchYesNo2}
                    textLabel="Will this project require a lift?"
                    name="requiredLift"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={InputSlider}
                    name="pricePerSqft"
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
                  />
                  <Box
                    sx={{
                      borderBottom: '1px dashed rgba(255, 255, 255, 0.13)',
                      width: '100%',
                      marginTop: '28px',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="Hotel Accomodations"
                    name="hotelCharges"
                    typeInput="number"
                    inputProps={{ min: 0 }}
                    prefix={<Typography sx={{ color: 'white' }}>$</Typography>}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="Travel costs - Flights, ETC"
                    name="travelCost"
                    typeInput="number"
                    inputProps={{ min: 0 }}
                    prefix={<Typography sx={{ color: 'white' }}>$</Typography>}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="Paint + Materials"
                    name="paintAndMaterialCost"
                    typeInput="number"
                    inputProps={{ min: 0 }}
                    prefix={<Typography sx={{ color: 'white' }}>$</Typography>}
                  />
                </Grid>
                {info.offered && (
                  <Grid item xs={12}>
                    <Box sx={{ pt: '12px' }}>
                      <TotalProposedBudget textTotalBudget={info.offered} />
                    </Box>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <TotalEstimatedCost
                    styleWrap={{ marginTop: '15px' }}
                    totalCost={basePrice + otherCost}
                  />
                  <Box
                    sx={{
                      borderBottom: '1px dashed rgba(255, 255, 255, 0.13)',
                      width: '100%',
                      marginTop: '28px',
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="proposalImage"
                    component={ControlledInputUpload}
                    textLabel="Would you like to upload a reference image?"
                    multiple
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={ControlledInputTextField}
                    textLabel="Please add any notes or questions below"
                    name="notes"
                    multiline
                    inputProps={{
                      minRows: 4,
                      maxRows: 4,
                    }}
                    typeInput="textarea"
                  />
                </Grid>
                <Grid item xs={12}>
                  {proposalDetails.status === REQUEST_STATUS.FAILED && (
                    <Typography sx={{ color: 'red', marginBottom: '5px' }}>
                      {proposalDetails.error}
                    </Typography>
                  )}
                  {proposalDetails.status === REQUEST_STATUS.SUCCEEDED && (
                    <Typography sx={{ color: 'green', marginBottom: '5px' }}>
                      Proposal successfully submitted.
                    </Typography>
                  )}
                  <LoadingButton
                    loading={proposalDetails.status === REQUEST_STATUS.LOADING}
                    disabled={proposalDetails.status === REQUEST_STATUS.LOADING}
                    onClick={handleSubmit}
                    sx={{
                      background:
                        'linear-gradient(90deg, rgba(134,255,255,1) 0%, rgba(51,246,246,1) 17%, rgba(44,222,222,1) 34%, rgba(10,197,197,1) 57%, rgba(4,169,169,1) 100%)',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-family-montserrat)',
                      fontSize: '14px',
                      fontWeight: '700',
                      fontStyle: 'normal',
                      textTransform: 'capitalize',
                      padding: '30px',
                      width: '100%',
                      display: 'block',
                      textAlign: 'center',
                    }}
                  >
                    Submit Inquiry
                  </LoadingButton>
                </Grid>
              </>
            );
          }}
        </Formik>
        <Grid item xs={12}>
          <CardMedia
            component="img"
            image="https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/618d1367229e98d07e66dc49/img/group-1@2x.svg"
            sx={{
              width: '52.94px',
              height: '70px',
              margin: '20px auto 8px auto',
            }}
          />
          <Typography
            sx={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-family-montserrat)',
              fontSize: '16px',
              fontWeight: '600',
              fontStyle: 'normal',
              textAlign: 'center',
              paddingBottom: {
                xs: '32px',
                sm: '0',
              },
            }}
          >
            WXLLSPACE Protection
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const SectionHeading = ({ children }) => {
  return (
    <Typography
      sx={{
        fontWeight: 900,
        fontSize: '32px',
        fontFamily: 'var(--font-family-montserrat)',
        fontStyle: 'normal',
        lineHeight: '1',
        letterSpacing: '-0.05em',
        backgroundImage:
          'linear-gradient(94.83deg, #FFFFFF 26.58%, #A984FF 44.93%, #64E1DC 54.77%, #6FC2FF 64.82%, #FFFFFF 78.91%) !important',
        backgroundSize: '430px',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        paddingBottom: '30px',
      }}
    >
      {children}
    </Typography>
  );
};

export default SubmitProposalForm;
