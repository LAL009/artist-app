import React from "react";
import SubmitProposalForm from "../components/controls/SubmitProposalForm";

export default {
    title: 'Example/SubmitProposalForm',
    component: SubmitProposalForm
}

const Template = (args) => (
    <SubmitProposalForm
        {...args}
    />
)

export const Default = Template.bind({})