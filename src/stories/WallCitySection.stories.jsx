import React from "react";
import WallCitySection from "../components/controls/WallCitySection";

export default {
    title: 'Example/WallCitySection',
    component: WallCitySection
}

const Template = () => (<WallCitySection
    wallImageSrc='https://cdn.animaapp.com/projects/6183b51d6b5cbed22d564e6f/releases/6187defd7b61585064796bb4/img/image-77639@1x.png'
    subtitle='The City'
    title='New Rochelle'
    description='Lorems ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
/>)

export const Default = Template.bind({})