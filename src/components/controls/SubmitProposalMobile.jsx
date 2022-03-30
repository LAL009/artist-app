import React from 'react';
import SubmitProposalForm from './SubmitProposalForm';
import SubmitProposalSwipeable from './SubmitProposalSwipeable';

const SubmitProposalMobile = () => {
  return (
    <SubmitProposalSwipeable>
      <SubmitProposalForm />
    </SubmitProposalSwipeable>
  );
};

export default SubmitProposalMobile;
