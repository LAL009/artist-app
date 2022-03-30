import React from "react";
import SubmitProposalSwipeable from "../components/controls/SubmitProposalSwipeable";

export default {
    title: 'Example/SubmitProposalSwipeable',
    component: SubmitProposalSwipeable
}

const Template = (args) => (
    <SubmitProposalSwipeable
        {...args}
    ></SubmitProposalSwipeable>
)

export const Default = Template.bind({})