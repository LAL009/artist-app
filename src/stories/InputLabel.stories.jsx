import React from "react";
import InputLabel from "../components/controls/InputLabel";

export default {
    title: 'Example/InputLabel',
    component: InputLabel
}

const Template = (args) => (
    <InputLabel
        text='Label'
        {...args}
    />
)

export const Default = Template.bind({})