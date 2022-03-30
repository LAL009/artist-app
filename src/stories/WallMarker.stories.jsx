import React from 'react';

import {WallMarker} from './../components/controls/WallMarker';

export default {
    title: 'Example/WallMarker',
    component: WallMarker,
}

const Template = (args) => {
    return(
    <WallMarker
        imgURL="https://anima-uploads.s3.amazonaws.com/projects/618bcc9df306c7f4da896fec/releases/618cdb9e98f208432f57c954/img/rectangle-113@2x.png"
        {...args}
    />
    );
};

export const Default = Template.bind({});