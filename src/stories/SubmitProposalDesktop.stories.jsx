import React from "react";
import SubmitProposalDesktop from "../components/controls/SubmitProposalDesktop";

export default {
    title: 'Example/SubmitProposalDesktop',
    component: SubmitProposalDesktop
}

const Template = (args) => (
    <SubmitProposalDesktop
        {...args}
    />
)

export const Default = Template.bind({})