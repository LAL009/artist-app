import React from "react";
import InputDatePicker from "../components/controls/InputDatePicker";

export default {
    title: 'Example/InputDatePicker',
    component: InputDatePicker
}

const Template = (args) => (
    <InputDatePicker
        {...args}
    />
)

export const Default = Template.bind({})