import React from "react";
import ProcessSection from "../components/controls/ProcessSection";

export default {
    title: 'Example/ProcessSection',
    component: ProcessSection
}

const Template = (args) => (
    <ProcessSection
        processImageSrc='https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6188834677e5a840e6864d1a/img/image-77640@1x.png'
        subtitle='Streamline The Process'
        title='Why WXLLSPACE'
        description='Stop wasting precious time and energy pounding the streets. Browse the latest new mural commissions before they hit the open market. Connect directly with owners and decision-makers who control the space.'
    {...args}/>)

export const Default = Template.bind({})