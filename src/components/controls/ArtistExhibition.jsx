import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Box } from '@mui/material';

const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MontserratMediumWhite14px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-style: normal;
`;

const MontserratMediumIron14px = css`
  color: var(--iron);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-style: italic;
`;

const MontserratNormalIron11px = css`
  color: var(--iron);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xs);
  font-weight: 400;
  font-style: normal;
`;

const MontserratBoldWhite16px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;
`;

const Number = styled.div`
  ${MontserratMediumWhite14px}
  min-height: 17px;
  min-width: 35px;
  letter-spacing: 0;
`;

const Text2 = styled.div`
  ${MontserratMediumIron14px}
  min-height: 17px;
  margin-left: 13px;
  min-width: 170px;
  letter-spacing: 0;
`;

const Text3 = styled.div`
  ${MontserratNormalIron11px}
  min-height: 13px;
  margin-left: 8px;
  letter-spacing: 0;
`;

const Exhibitions = styled.div`
  ${ValignTextMiddle}
  ${MontserratBoldWhite16px}
  height: 20px;
  letter-spacing: 0;
`;

export const ArtistExhibition = (props) => {
  const { exhibitions } = props;

  return (
    <Box>
      <Exhibitions>Exhibitions</Exhibitions>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginTop: '17px',
        }}
      >
        {exhibitions.map((item) => (
          <Box key={item.id} sx={{ display: 'flex', alignItems: 'baseline' }}>
            <Number>{item.year}</Number>
            <Text2>{item.title}</Text2>
            <Text3>{item.place}</Text3>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

ArtistExhibition.propTypes = {
  exhibitions: PropTypes.array,
};

ArtistExhibition.defaultProps = {
  exhibitions: [],
};
