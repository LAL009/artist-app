import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MontserratMediumWhite12px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s);
  font-weight: 500;
  font-style: normal;
`;

const Root = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 270px;
  margin-top: 16px;
  gap: 10px;
  flex-wrap: wrap;
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${MontserratMediumWhite12px}
  height: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

export const ArtistArtStyle = (props) => {
  const { artStyles } = props;

  return (
    <Root>
      {artStyles.map((styleName, index) => (
        <StyleButton key={index}>{styleName}</StyleButton>
      ))}
    </Root>
  );
};

const StyleButton = ({ children }) => {
  const Frame = styled.div`
    height: 40px;
    display: flex;
    padding: 0 12px;
    align-items: center;
    border-radius: 100px;
    backdrop-filter: blur(60px) brightness(100%);
    -webkit-backdrop-filter: blur(60px) brightness(100%);
    background-color: rgba(220, 220, 220, 0.06);
  `;

  return (
    <Frame>
      <Label>{children}</Label>
    </Frame>
  );
};

ArtistArtStyle.propTypes = {
  artStyles: PropTypes.array,
};

ArtistArtStyle.defaultProps = {
  artStyles: [],
};
