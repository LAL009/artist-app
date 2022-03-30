import React from "react";
import InputTextFieldDollar from "../components/controls/InputTextFieldDollar";

export default {
    title: 'Example/InputTextFieldDollar',
    component: InputTextFieldDollar
}

const Template = (args) => (
    <InputTextFieldDollar
        textLabel='Hotel Accomodations'
        placeholder='100'
        {...args}
    />
)

export const Default = Template.bind({})