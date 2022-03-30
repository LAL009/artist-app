import React from "react";
import FeaturedImagesCard from "../components/controls/FeaturedImagesCard";

export default {
    title: 'Example/FeaturedImagesCard',
    component: FeaturedImagesCard
}

const Template = (args) => (
    <FeaturedImagesCard
        featuredImageSrc='https://anima-uploads.s3.amazonaws.com/projects/6183b51d6b5cbed22d564e6f/releases/6187716ce53b9741747ffd69/img/miami-1@1x.png?v=1636266552842'
        styleWrap={{
            width: '100%',
            height: {
                xs: '174px',
                sm: '460px'
            },
        }}
        styleImage={{
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px'
        }}
        textLabel='Just Listed'
        {...args}
    />
)

export const Default = Template.bind({})