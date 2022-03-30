import React from "react";
import FeaturedImagesLabel from "../components/controls/FeaturedImagesLabel";

export default {
    title: 'Example/FeaturedImagesLabel',
    component: FeaturedImagesLabel
}

const Template = (args) => (
    <FeaturedImagesLabel
        text='Just Listed'
        {...args}
    />
    )

export const Default = Template.bind({})