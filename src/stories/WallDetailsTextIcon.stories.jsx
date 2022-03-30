import React from "react";
import WallDetailsTextIcon from "../components/controls/WallDetailsTextIcon";

export default {
    title: 'Example/WallDetailsTextIcon',
    component: WallDetailsTextIcon
}

const Template = (args) => (
    <WallDetailsTextIcon
        text='Wifi'
        iconImageSrc='https://anima-uploads.s3.amazonaws.com/projects/6183b51d6b5cbed22d564e6f/releases/6188e826ea54996611706da4/img/wifi-black-24dp-2@2x.svg?v=1636362327859&v=1636362328165&v=1636362328469'
        {...args}
    />
)

export const Default = Template.bind({})