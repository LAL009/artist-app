import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

import Header from './../../components/layout/Header';
import Footer from './../../components/layout/Footer';
import { ArtistScreen } from './../../screens/Artist/index';

const store = {
  getState: () => {
    return {
      artistDetails: Default.args,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

export default {
  title: 'Screens/ArtistScreen',
  component: ArtistScreen,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = (args) => {
  return (
    <>
      <Header />
      <ArtistScreen {...args} />
      <Footer />
    </>
  );
};
export const Default = Template.bind({});

Default.args = {
  artistDetails: {
    status: 'SUCCEEDED',
    data: {
      id: '6177565c4a5511016aa27a07',
      name: 'Daniel Bebear',
      email: 'daniel.beb@gmail.com',
      role: 'artist',
      phone: '(212) 312 3344',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis leo quis massa efficitur cursus. Phasellus sed laoreet lacus. Sed molestie eros ut placerat auctor. Ut non mauris non dolor ornare fermentum at pharetra nisl. Nam a est a erat tempor elementum. Morbi a nulla eu quam dignissim convallis id a mi. In hac habitasse platea dictumst. Mauris vestibulum dictum ex nec pretium.',
      artTypes: ['3D', 'Abstract', 'Anamorphic', 'Calligraphy', 'Freestyle'],
      instagramHandle: '@user1234',
      website: 'https://www.daniel-website.com',
      porfolioLink: 'https://daniel-user.com',
      googleId: '',
      fbId: '',
      profilePic: [],
      gallery: [
        {
          fieldname: 'gallery',
          originalname: 'artist-g75bbe49a3_1920.jpg',
          encoding: '7bit',
          mimetype: 'image/jpeg',
          size: 814214,
          bucket: 'wxllspace-app',
          key: 'assets/profile/6177565c4a5511016aa27a07/gallery/artist-g75bbe49a3_1920.jpg',
          acl: 'public-read',
          contentType: 'application/octet-stream',
          contentDisposition: null,
          contentEncoding: null,
          storageClass: 'STANDARD',
          serverSideEncryption: null,
          metadata: { fieldName: 'gallery' },
          location:
            'https://wxllspace-app.s3.amazonaws.com/assets/profile/6177565c4a5511016aa27a07/gallery/artist-g75bbe49a3_1920.jpg',
          etag: '"ed324c7dd483bc095b9920b5efcfdc6b"',
          versionId: null,
        },
      ],
      colorPallete: [
        {
          fieldname: 'colorPallete',
          originalname: 'sample-palette.png',
          encoding: '7bit',
          mimetype: 'image/png',
          size: 36976,
          bucket: 'wxllspace-app',
          key: 'assets/profile/xxx/colorPallete/xxx.png',
          acl: 'public-read',
          contentType: 'application/octet-stream',
          contentDisposition: null,
          storageClass: 'STANDARD',
          serverSideEncryption: null,
          metadata: { fieldName: 'colorPallete' },
          location:
            'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/placeholders/sample-palette.png',
          etag: '"51a48b3222f65229181bc30a8bd0731c"',
          versionId: null,
        },
      ],
      logo: [],
      artistImage: [
        {
          fieldname: 'artistImage',
          originalname: 'jurica-koletic-7YVZYZeITc8-unsplash.jpg',
          encoding: '7bit',
          mimetype: 'image/jpeg',
          size: 3584802,
          bucket: 'wxllspace-app',
          key: 'assets/profile/6177565c4a5511016aa27a07/artistImage/jurica-koletic-7YVZYZeITc8-unsplash.jpg',
          acl: 'public-read',
          contentType: 'application/octet-stream',
          contentDisposition: null,
          contentEncoding: null,
          storageClass: 'STANDARD',
          serverSideEncryption: null,
          metadata: { fieldName: 'artistImage' },
          location:
            'https://wxllspace-app.s3.amazonaws.com/assets/profile/6177565c4a5511016aa27a07/artistImage/jurica-koletic-7YVZYZeITc8-unsplash.jpg',
          etag: '"beb3708baf0f0f1dec6d7e08ad93499e"',
          versionId: null,
        },
      ],
      isReady: true,
      createdAt: '2021-10-26T01:14:04.122Z',
      updatedAt: '2021-11-10T18:55:46.379Z',
      address: {
        country: 'US',
        state: 'NJ',
        city: 'New Brunswick',
        street_address: '123 New Brunswick St, Suite # 201',
        zipcode: '08364',
        longAndLat: [-74.45, 40.5],
      },
    },
  },
};
