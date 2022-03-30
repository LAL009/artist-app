import React from 'react';
import {
  Grid,
  Box,
  FormControlLabel,
  RadioGroup,
  Typography,
} from '@mui/material';
import InputSelectMultiple from './InputSelectMultiple';
import InputTextField from './InputTextField';
import InputSelect from './InputSelect';
import InputTextarea from './InputTextarea';
import { styled as muiStyledSystem } from '@mui/system';
import InputSliderPriceSquare from './InputSliderPriceSquare';
import InputRadio from './InputRadio';
import InputLabel from './InputLabel';
import InputUpload from './InputUpload';
import InputPhoneNumber from './InputPhoneNumber';
import InputAddress from './InputAddress';

export const ArtistUpdateSelfForm = () => {
  return (
    <Grid container spacing={2}>
      {/* artist name */}
      <Grid item xs={12}>
        <InputTextField textLabel="Artist Name" placeholder="" />
      </Grid>

      {/* email */}
      <Grid item xs={12}>
        <InputTextField textLabel="Email" placeholder="" />
      </Grid>

      {/* first name */}
      <Grid item xs={12} sm={6}>
        <InputTextField textLabel="First Name" placeholder="" />
      </Grid>

      {/* last name */}
      <Grid item xs={12} sm={6}>
        <InputTextField textLabel="Last Name" placeholder="" />
      </Grid>

      {/* phone */}
      <Grid item xs={12}>
        <InputPhoneNumber
          textLabel="What is the best number to reach you at?"
          placeholder="(808)808-0808"
        />
      </Grid>

      {/* instagram handle */}
      <Grid item xs={12} sm={6}>
        <InputTextField
          textLabel="What is your instagram handle?"
          placeholder="your instagram"
        />
      </Grid>

      {/* website */}
      <Grid item xs={12} sm={6}>
        <InputTextField
          textLabel="What is your website?"
          placeholder="your website"
        />
      </Grid>

      {/* about you */}
      <Grid item xs={12}>
        <InputTextarea textLabel="Tell us a little about you? (Paste bio here)" />
      </Grid>

      {/* address */}
      <Grid item xs={12}>
        <InputAddress
          textLabel="Please provide the address in which you are looking to place a mural on:"
          placeholder="your address"
        />
      </Grid>

      {/* button */}
      <Grid item xs={12}>
        <SubmitButton>
          <Box sx={{ textAlign: 'center', width: '100%' }}>Update</Box>
        </SubmitButton>
      </Grid>
    </Grid>
  );
};

export const ArtistUpdateExperienceForm = () => {
  return (
    <Grid container spacing={2}>
      {/* price per square */}
      <Grid item xs={12}>
        <InputSliderPriceSquare />
      </Grid>

      {/* pay split */}
      <Grid item xs={12}>
        <InputSelect
          defaultValue="33/33/33"
          placeholder="choose pay split"
          textLabel="What is your preferred Pay Split?"
          list={['33/33/33', '50/50', '20/40/40', '10/45/45']}
          getSelectValue={console.log}
        />
      </Grid>

      {/* provide crypto */}
      <Grid item xs={12}>
        <InputLabel text="Do you provide crypto as payment?" />

        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
          <FormControlLabel value="yes" control={<InputRadio />} label="Yes" />
          <FormControlLabel value="no" control={<InputRadio />} label="No" />
        </RadioGroup>
      </Grid>

      {/* artistic style */}
      <Grid item xs={12}>
        <InputSelectMultiple
          textLabel="Describe your artistic style? (select multiple)"
          list={[
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
          ]}
          getSelectedValue={console.log}
        />
      </Grid>

      {/* button */}
      <Grid item xs={12}>
        <SubmitButton>
          <Box sx={{ textAlign: 'center', width: '100%' }}>Update</Box>
        </SubmitButton>
      </Grid>
    </Grid>
  );
};

export const ArtistUpdateLandingPageForm = () => {
  return (
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
          Thanks for giving us some details. Now lets build your landing page so
          we have a summarized page to showcase all your work and
          accomplishments to the universe.
        </Typography>
      </Grid>

      {/* photo profile */}
      <Grid item xs={12} sm={6}>
        <InputUpload
          textLabel="Upload your profile photo"
          srcUploaded="https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/61a6a511d61bac11f4ca422e/artistImage/20211119_120450.jpg"
        />
      </Grid>

      {/* portfolio */}
      <Grid item xs={12} sm={6}>
        <InputUpload textLabel="Would you like to upload your portfolio?" />
      </Grid>

      {/* logo */}
      <Grid item xs={12}>
        <InputUpload textLabel="Do you have a logo?" />
      </Grid>

      {/* Exhibitions */}
      <Grid item xs={12}>
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
      </Grid>

      {/* brand */}
      <Grid item xs={12}>
        <InputUpload textLabel="What brands have you worked with? (SVG format)" />
      </Grid>

      {/* photo */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel text="Build your Gallery/Portfolio. Showcase your favorite pieces. (upload 8, add title and location for each)" />
          </Grid>

          {/* photo 1 */}
          <Grid item xs={6}>
            <InputUpload textLabel="Photo 1" />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              {/* title */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              {/* location */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="address (text/google link)"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* photo 2 */}
          <Grid item xs={6}>
            <InputUpload textLabel="Photo 2" />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              {/* title */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              {/* location */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="address (text/google link)"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* photo 3 */}
          <Grid item xs={6}>
            <InputUpload textLabel="Photo 3" />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              {/* title */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              {/* location */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="address (text/google link)"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* photo 4 */}
          <Grid item xs={6}>
            <InputUpload textLabel="Photo 4" />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              {/* title */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              {/* location */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="address (text/google link)"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* photo 5 */}
          <Grid item xs={6}>
            <InputUpload textLabel="Photo 5" />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              {/* title */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              {/* location */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="address (text/google link)"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* photo 6 */}
          <Grid item xs={6}>
            <InputUpload textLabel="Photo 6" />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              {/* title */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              {/* location */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="address (text/google link)"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* photo 7 */}
          <Grid item xs={6}>
            <InputUpload textLabel="Photo 7" />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              {/* title */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              {/* location */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="address (text/google link)"
                  placeholder="address"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* photo 8 */}
          <Grid item xs={6}>
            <InputUpload textLabel="Photo 8" />

            <Grid container spacing={1} sx={{ marginTop: '2px' }}>
              {/* title */}
              <Grid item xs={12} sm={6}>
                <InputTextField
                  textLabel="title of the wall"
                  placeholder="title"
                />
              </Grid>

              {/* location */}
              <Grid item xs={12} sm={6}>
                <InputTextField
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
        <InputUpload textLabel="Do you have a favorite color palette?" />
      </Grid>

      {/* button next */}
      <Grid item xs={12}>
        <SubmitButton>
          <Box sx={{ textAlign: 'center', width: '100%' }}>Update</Box>
        </SubmitButton>
      </Grid>
    </Grid>
  );
};

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
