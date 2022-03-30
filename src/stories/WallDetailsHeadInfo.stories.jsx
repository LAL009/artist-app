import React from "react";
import WallDetailsHeadInfo from "../components/controls/WallDetailsHeadInfo";

export default {
    title: 'Example/WallDetailsHeadInfo',
    component: WallDetailsHeadInfo
}

const Template = (args) => (
    <WallDetailsHeadInfo
        textLocation='NEW ROCHELLE, NY'
        textListed='September 1st, 2021'
        textTotalProposal='1-5'
        {...args}
    />
)

export const Default = Template.bind({})