import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const SignupButton = (props) => {
  return <Group101 onClick={props.onClick}>sign up</Group101>;
};

SignupButton.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};

SignupButton.propTypes = {
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
