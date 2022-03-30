import React from "react";
import InputTextarea from "../components/controls/InputTextarea";

export default {
    title: 'Example/InputTextarea',
    component: InputTextarea
}

const Template = (args) => (
    <InputTextarea
        textLabel='Textarea'
        placeholder='placeholder'
        rows={4}
        {...args}
    />
)

export const Default = Template.bind({})