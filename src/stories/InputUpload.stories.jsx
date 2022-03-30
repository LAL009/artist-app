import React from "react";
import InputUpload from "../components/controls/InputUpload";

export default {
    title: 'Example/InputUpload',
    component: InputUpload
}

const Template = (args) => (
    <InputUpload
        {...args}
    />
)

export const Default = Template.bind({})