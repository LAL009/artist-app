import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { signOut } from 'src/actions/userActions';
import { useHistory, Link } from 'react-router-dom';

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Link
      style={{
        textDecoration: 'none',
      }}
      to="#"
      onClick={() => {
        dispatch(signOut());
        history.push('/');
      }}
    >
      <Group101>sign out</Group101>
    </Link>
  );
};

export const LogoutButtonMobile = ({ onClick }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Link
      style={{
        width: '100%',
        textDecoration: 'none',
      }}
      to="#"
      onClick={() => {
        dispatch(signOut());
        history.push('/');
      }}
    >
      <LinkItems
        background={'linear-gradient(82.62deg, #5700FF 0%, #64E1DC 126.17%)'}
      >
        <IconImage src="/icons/Sign_Up.svg" alt="Sign Up Icon" />
        <LinkText>sign out</LinkText>
      </LinkItems>
    </Link>
  );
};

LogoutButton.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};

LogoutButton.propTypes = {
  backgroundColor: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

LogoutButtonMobile.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};

LogoutButtonMobile.propTypes = {
  backgroundColor: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

function Group101(props) {
  const { children } = props;

  return (
    <Group1011>
      <OverlapGroup>
        <SignUp>{children}</SignUp>
      </OverlapGroup>
    </Group1011>
  );
}

const Group1011 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 99px;
`;

const OverlapGroup = styled.div`
  height: 42px;
  display: flex;
  padding: 12.9px 23.1px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 97px;
  background: linear-gradient(74.3deg, #5700ff 2.8%, #00c8c8 133.27%);
  border-radius: 8px;
`;

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MontserratBoldWhite10px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xs);
  font-weight: 700;
  font-style: normal;
`;

const SignUp = styled.div`
  ${ValignTextMiddle}
  ${MontserratBoldWhite10px}
  width: 51px;
  height: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 75px;
  white-space: nowrap;
  text-transform: capitalize;
`;

const LinkItems = (props) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        alignItems: 'center',
        background: props.background || 'rgb(28, 37, 61)',
        border: '1px solid var(--big-stone)',
        borderRadius: '8px',
        padding: '21px 27px',
        margin: '10px auto',
      }}
    >
      {props.children}
    </Box>
  );
};

const IconImage = styled.img`
  width: 20px;
`;

const LinkText = (props) => {
  return (
    <Typography
      style={{
        color: 'rgb(184, 183, 173)',
        fontFamily: 'var(--font-family-montserrat)',
        fontSize: 'var(--font-size-m)',
        fontWeight: 400,
        fontStyle: 'normal',
        textTransform: 'uppercase',
      }}
    >
      {props.children}
    </Typography>
  );
};

export default LogoutButton;
