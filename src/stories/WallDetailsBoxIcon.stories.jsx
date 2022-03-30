import React from "react";
import WallDetailsBoxIcon from "../components/controls/WallDetailsBoxIcon";

export default {
    title: 'Example/WallDetailsBoxIcon',
    component: WallDetailsBoxIcon
}

const Template = (args) => (
    <WallDetailsBoxIcon
        iconImageSrc='https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188bbd34b232d685f2fbe96/img/frame-2@2x.svg'
        text='300 sqft'
        {...args}
    />
)

export const Default = Template.bind({})