import React from "react";
import WallDetailsLabel from "../components/controls/WallDetailsLabel";

export default {
    title: 'Example/WallDetailsLabel',
    component: WallDetailsLabel
}

const Template = (args) => (
    <WallDetailsLabel
        text='3D'
        backgroundColor='#5700ff'
        {...args}
    />
)

export const Default = Template.bind({})