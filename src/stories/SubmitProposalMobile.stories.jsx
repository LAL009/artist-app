import React from "react";
import SubmitProposalMobile from "../components/controls/SubmitProposalMobile";

export default {
    title: 'Example/SubmitProposalMobile',
    component: SubmitProposalMobile
}

const Template = (args) => (
    <SubmitProposalMobile
        {...args}
    />
)

export const Default = Template.bind({})