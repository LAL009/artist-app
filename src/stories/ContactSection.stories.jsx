import React from "react";
import ContactSection from "../components/controls/ContactSection";

export default {
    title: 'ContactPage/ContactSection',
    component: ContactSection
}

const Template = (args) => (
    <ContactSection {...args}/>
)

export const Default = Template.bind({})