import React from "react";
import InputSwitchYesNo from "../components/controls/InputSwitchYesNo";

export default {
    title: 'Example/InputSwitchYesNo',
    component: InputSwitchYesNo
}

const Template = (args) => (
    <InputSwitchYesNo
        {...args}
    />
)

export const Default = Template.bind({})