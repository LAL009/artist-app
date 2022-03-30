import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';
import { styled as muiStyledSystem } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { useHistory } from 'react-router-dom';

import ControlledInputTextField from 'src/components/controls/ControlledInputTextField';

import {
  selectUserSignInStatus,
  REQUEST_STATUS,
} from 'src/reducers/userReducers';

import { resetPassword } from 'src/actions/userActions';

import {
  PASSWORD_REQUIRED,
  PASSWORD_CONFIRMATION_REQUIRED,
} from 'src/constants/errorMessage';

const validationSchema = Yup.object().shape({
  password: Yup.string().nullable().min(6).required(PASSWORD_REQUIRED),
  passwordConfirmation: Yup.string()
    .nullable()
    .oneOf([Yup.ref('password'), null], PASSWORD_CONFIRMATION_REQUIRED),
});

const useFormLabelStyles = makeStyles({
  label: {
    fontSize: '12px',
    borderRadius: '8px',
    color: '#64E1DC',
    fontWeight: '600',
    height: '52px',
    width: '100%',
    fontFamily: 'var(--font-family-montserrat)',
  },
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
  },
});

export const ResetPasswordForm = () => {
  const { token } = useParams();
  const [isLinkedSend, setIsLinkedSend] = useState(false);
  const styles = useFormLabelStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { status, error } = useSelector(selectUserSignInStatus);

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(
      resetPassword(values.password, token, () => {
        setSubmitting(false);
      })
    );
    if (status !== REQUEST_STATUS.FAILED) {
      setIsLinkedSend(true);
    }
    console.log('isLinkedSend: ', isLinkedSend);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      {isLinkedSend ? (
        <h1>Password has been reset successfully.</h1>
      ) : (
        <Formik
          initialValues={{
            password: null,
            passwordConfirmation: null,
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form>
              <Field
                component={ControlledInputTextField}
                textLabel="Password"
                placeholder="Password"
                name="password"
                typeInput="password"
                style={{ marginBottom: 10 }}
              />
              <Field
                component={ControlledInputTextField}
                textLabel="Confirm Password"
                placeholder="Confirm Password"
                name="passwordConfirmation"
                typeInput="password"
                style={{ marginBottom: 10 }}
              />
              {status === REQUEST_STATUS.FAILED && (
                <Typography
                  sx={{
                    color: 'red',
                    fontSize: 13,
                    marginBottom: '5px',
                  }}
                >
                  {error}
                </Typography>
              )}
              <LoadingButton
                className={styles.submitButton}
                loading={status === REQUEST_STATUS.LOADING}
                disabled={status === REQUEST_STATUS.LOADING}
                onClick={handleSubmit}
              >
                <Box sx={{ textAlign: 'center', width: '100%' }}>
                  Change Password
                </Box>
              </LoadingButton>
            </Form>
          )}
        </Formik>
      )}
    </Box>
  );
};
