import React from "react";
import InputSliderPriceSquare from "../components/controls/InputSliderPriceSquare";

export default {
    title: 'Example/InputSliderPriceSquare',
    component: InputSliderPriceSquare
}

const Template = (args) => (
    <InputSliderPriceSquare
        {...args}
    />
)

export const Default = Template.bind({})