import React from "react";
import ProcessTextIcon from "../components/controls/ProcessTextIcon";

export default {
    title: 'Example/ProcessTextIcon',
    component: ProcessTextIcon
}

const Template = (args) => (
    <ProcessTextIcon
        iconImageSrc='https://anima-uploads.s3.amazonaws.com/projects/6183b51d6b5cbed22d564e6f/releases/6188834677e5a840e6864d1a/img/frame-3@2x.svg?v=1636337334455'
        text='Insurance'
        {...args}
    />
)

export const Default = Template.bind({})