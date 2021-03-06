import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';

import MarketplaceScreen from './../../screens/Marketplace/index';

const store = {
  getState: () => {
    return {
      marketplace: Default.args,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

export default {
  title: 'Screens/Marketplace',
  component: MarketplaceScreen,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = (args) => {
  return <MarketplaceScreen {...args} />;
};
export const Default = Template.bind({});

Default.args = {
  marketplace: {
    status: 'SUCCEEDED',
    data: {
      wxlls: [
        {
          id: '61115bb41aa06d6a510065f5',
          info: {
            title: 'Madison Street',
            width: 22,
            height: 95,
            dimension: '95H x 22L',
            size: 2090,
            offered: '2,000',
          },
          featureImage: [
            {
              fieldname: 'featureImage',
              originalname: '610dad665c306.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/listing',
              filename: '1628527540513610dad665c306.png',
              path: 'uploads/listing/1628527540513610dad665c306.png',
              size: 2558828,
            },
          ],
          address: {
            country: 'United State',
            state: 'OR',
            city: 'Portland',
            street_address: '226 SE Madison St, Portland, OR',
            zipcode: '97214',
          },
          slug: 'madison-street',
          approved: true,
          status: 'approved',
          location: {
            type: 'Point',
            coordinates: [-122.6364, 45.5142],
          },
        },
        {
          id: '61113bf81aa06d6a510065f1',
          info: {
            title: 'Mott Haven Lobby',
            width: 7,
            height: 7,
            dimension: '7H x 7L',
            size: 49,
            offered: '2,500',
          },
          featureImage: [],
          address: {
            country: 'United State',
            state: 'NY',
            city: 'Bronx',
            street_address: '255 East 138th Street, Bronx New York',
            zipcode: '10451',
          },
          slug: 'mott-haven-lobby',
          approved: true,
          status: 'approved',
          location: {
            type: 'Point',
            coordinates: [-73.9217, 40.8222],
          },
        },
        {
          id: '611138ae1aa06d6a510065f0',
          info: {
            title: 'Orange Avenue',
            width: 51,
            height: 4.9,
            dimension: '4.9H x 51L',
            size: 2499,
            offered: '10,000',
          },
          featureImage: [
            {
              fieldname: 'featureImage',
              originalname: 'Seaside Outside Fence Screen.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              destination: './uploads/listing',
              filename: '1628518574830Seaside Outside Fence Screen.jpg',
              path: 'uploads/listing/1628518574830Seaside Outside Fence Screen.jpg',
              size: 691047,
            },
          ],
          address: {
            country: 'United State',
            state: 'FL',
            city: 'Orlando',
            street_address: '201 S. Orange Avenue, Orlando, Florida',
            zipcode: '32801',
          },
          slug: 'orange-avenue',
          approved: true,
          status: 'approved',
          location: {
            type: 'Point',
            coordinates: [-81.3727, 28.5399],
          },
        },
        {
          id: '6111365e1aa06d6a510065ee',
          info: {
            title: 'Village of Leesburg',
            width: 10,
            height: 10,
            dimension: '10H x 10L',
            size: 100,
            offered: '6,500',
          },
          featureImage: [
            {
              fieldname: 'featureImage',
              originalname: '6.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              destination: './uploads/listing',
              filename: '16285179827876.jpg',
              path: 'uploads/listing/16285179827876.jpg',
              size: 1111461,
            },
          ],
          address: {
            country: 'United State',
            state: 'VA',
            city: 'Leesburg',
            street_address: '1602 Village Market Blvd SE #1, Leesburg, VA',
            zipcode: '20175',
          },
          slug: 'village-of-leesburg',
          approved: true,
          status: 'approved',
          location: {
            type: 'Point',
            coordinates: [-77.6054, 39.042],
          },
        },
      ],
      artists: [
        {
          id: '61a6a511d61bac11f4ca422e',
          name: 'Katie Martin Dwyer',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: '20211119_120450.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 613476,
              bucket: 'wxllspace-app',
              key: 'assets/profile/61a6a511d61bac11f4ca422e/artistImage/20211119_120450.jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/61a6a511d61bac11f4ca422e/artistImage/20211119_120450.jpg',
              etag: '"1167191d595f79ca30e109815ab811d1"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'Tennessee',
            city: 'Chattanooga',
            street_address: '10039 Forrest Dr',
            zipcode: '37401',
          },
        },
        {
          id: '61a65771d61bac11f4ca422d',
          name: 'Alexis Gallo',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'A076C439-5A6F-4848-8F5A-6F84664CE69D.JPG',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 442986,
              bucket: 'wxllspace-app',
              key: 'assets/profile/61a65771d61bac11f4ca422d/artistImage/A076C439-5A6F-4848-8F5A-6F84664CE69D.JPG',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/61a65771d61bac11f4ca422d/artistImage/A076C439-5A6F-4848-8F5A-6F84664CE69D.JPG',
              etag: '"cf34c8aa8fcd8166f19b3b2850071014"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'New York',
            city: 'New York',
            street_address: '444 15th Street',
            zipcode: '10001',
          },
        },
        {
          id: '619c4cacd61bac11f4ca422a',
          name: 'Pyramid Guy',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'kanaly-headshot-cropped.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 3148265,
              bucket: 'wxllspace-app',
              key: 'assets/profile/619c4cacd61bac11f4ca422a/artistImage/kanaly-headshot-cropped.jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/619c4cacd61bac11f4ca422a/artistImage/kanaly-headshot-cropped.jpg',
              etag: '"e10e6b99b201a062fd186273f0005612"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'Oklahoma',
            city: 'Oklahoma City',
            street_address: '523 NW 31st Street',
            zipcode: '73101',
          },
        },
        {
          id: '6199dbe9d61bac11f4ca4226',
          name: 'Michelle Ku',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'michelle.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 649293,
              bucket: 'wxllspace-app',
              key: 'assets/profile/6199dbe9d61bac11f4ca4226/artistImage/michelle.jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/6199dbe9d61bac11f4ca4226/artistImage/michelle.jpg',
              etag: '"c40b94599d8dc44184ee8cf98e6901b1"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: ' ',
            city: ' ',
            street_address: ' ',
          },
        },
        {
          id: '618f23ead61bac11f4ca4223',
          name: 'Lola Lovenotes',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'IMG_0373_edited.png',
              encoding: '7bit',
              mimetype: 'image/png',
              size: 1759705,
              bucket: 'wxllspace-app',
              key: 'assets/profile/618f23ead61bac11f4ca4223/artistImage/IMG_0373_edited.png',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/618f23ead61bac11f4ca4223/artistImage/IMG_0373_edited.png',
              etag: '"dad494e95567f7cf30f1344c48cd4798"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: ' ',
            city: ' ',
            street_address: ' ',
          },
        },
        {
          id: '618b3b20d61bac11f4ca4220',
          name: 'Alessandra Grimm',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'Ally_200.png',
              encoding: '7bit',
              mimetype: 'image/png',
              size: 2381390,
              bucket: 'wxllspace-app',
              key: 'assets/profile/618b3b20d61bac11f4ca4220/artistImage/Ally_200.png',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/618b3b20d61bac11f4ca4220/artistImage/Ally_200.png',
              etag: '"c1ff4fb43c384eb3a5710c755bdfab83"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'Colorado',
            city: 'Denver',
            street_address: '1969 S ZENOBIA ST',
            zipcode: '80201',
          },
        },
        {
          id: '618b14dfd61bac11f4ca421f',
          name: 'Alex Koenig',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'B400518E-9601-4FCE-8224-370244D41E8D.jpeg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 210432,
              bucket: 'wxllspace-app',
              key: 'assets/profile/618b14dfd61bac11f4ca421f/artistImage/B400518E-9601-4FCE-8224-370244D41E8D.jpeg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/618b14dfd61bac11f4ca421f/artistImage/B400518E-9601-4FCE-8224-370244D41E8D.jpeg',
              etag: '"ffc77754887d7af5387f876cea992472"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'Georgia',
            city: 'Atlanta',
            street_address: ' ',
            zipcode: '30301',
          },
        },
        {
          id: '618aa712d61bac11f4ca421e',
          name: 'victor landeta',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'Muro_de-_Berlin_web.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 307641,
              bucket: 'wxllspace-app',
              key: 'assets/profile/618aa712d61bac11f4ca421e/artistImage/Muro_de-_Berlin_web.jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/618aa712d61bac11f4ca421e/artistImage/Muro_de-_Berlin_web.jpg',
              etag: '"950176c5843bee1241ba86b919122fa8"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'New York',
            city: 'New York',
            street_address: ' ',
            zipcode: '10001',
          },
        },
        {
          id: '6189640fd61bac11f4ca421d',
          name: 'Elle',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'Screen Shot 2021-11-08 at 12.56.06 PM.png',
              encoding: '7bit',
              mimetype: 'image/png',
              size: 693162,
              bucket: 'wxllspace-app',
              key: 'assets/profile/6189640fd61bac11f4ca421d/artistImage/Screen Shot 2021-11-08 at 12.56.06 PM.png',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/6189640fd61bac11f4ca421d/artistImage/Screen%20Shot%202021-11-08%20at%2012.56.06%20PM.png',
              etag: '"2bdc81b5629ab0f6c385f2f81110125a"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'New York',
            city: 'Manhattan',
            street_address: '30 Clinton Place, 4D',
            zipcode: '10048',
          },
        },
        {
          id: '61839d12d61bac11f4ca421a',
          name: 'Luis santana',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: '6D5F03E5-4162-4ADF-B737-BEA944F5DC41.jpeg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 255323,
              bucket: 'wxllspace-app',
              key: 'assets/profile/61839d12d61bac11f4ca421a/artistImage/6D5F03E5-4162-4ADF-B737-BEA944F5DC41.jpeg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/61839d12d61bac11f4ca421a/artistImage/6D5F03E5-4162-4ADF-B737-BEA944F5DC41.jpeg',
              etag: '"6da783f40ee782cae4988eab4ce333af"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'New York',
            city: 'New York',
            street_address: ' ',
            zipcode: '10001',
          },
        },
        {
          id: '618189add61bac11f4ca4218',
          name: 'Miles Toland',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'Drop-of-Sky-(1600-Web).jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 753485,
              bucket: 'wxllspace-app',
              key: 'assets/profile/618189add61bac11f4ca4218/artistImage/Drop-of-Sky-(1600-Web).jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/618189add61bac11f4ca4218/artistImage/Drop-of-Sky-%281600-Web%29.jpg',
              etag: '"c8060b7eb10cb4302776c05a0e936cfb"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'California',
            city: 'Sacramento',
            street_address: '14858 North Bloomfield Road',
            zipcode: '94203',
          },
        },
        {
          id: '61818853d61bac11f4ca4217',
          name: 'Joseph Renda Jr',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'Low Bw.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 631018,
              bucket: 'wxllspace-app',
              key: 'assets/profile/61818853d61bac11f4ca4217/artistImage/Low Bw.jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/61818853d61bac11f4ca4217/artistImage/Low%20Bw.jpg',
              etag: '"e2ef30551fb49b087d7fe81fd51dbbb4"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'Illinois',
            city: 'Chicago',
            street_address: '2006 w chicago ave 1R',
            zipcode: '60290',
          },
        },
        {
          id: '61817b97d61bac11f4ca4215',
          name: 'Neeka Allsup',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'foxhouse cropped.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 692126,
              bucket: 'wxllspace-app',
              key: 'assets/profile/61817b97d61bac11f4ca4215/artistImage/foxhouse cropped.jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/61817b97d61bac11f4ca4215/artistImage/foxhouse%20cropped.jpg',
              etag: '"bd16d55ba020d191ed57575b37676dc5"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'Missouri',
            city: 'St. Louis',
            street_address: '2921 Chippewa st ',
          },
        },
        {
          id: '6179e617d61bac11f4ca420f',
          name: 'Mike Maka',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'Maka_Nic Reed - Hanging Garden2105_LowRes.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 2101124,
              bucket: 'wxllspace-app',
              key: 'assets/profile/6179e617d61bac11f4ca420f/artistImage/Maka_Nic Reed - Hanging Garden2105_LowRes.jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/6179e617d61bac11f4ca420f/artistImage/Maka_Nic%20Reed%20-%20Hanging%20Garden2105_LowRes.jpg',
              etag: '"1c21e9a5fcfe86aa105e4f5a41c5d277"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'New York',
            city: 'New York',
            street_address: 'Bedford ave',
            zipcode: '10001',
          },
        },
        {
          id: '6179a6aed61bac11f4ca420e',
          name: 'Ian Robertson-Salt',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'favicon.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 48041,
              bucket: 'wxllspace-app',
              key: 'assets/profile/6179a6aed61bac11f4ca420e/artistImage/favicon.jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/6179a6aed61bac11f4ca420e/artistImage/favicon.jpg',
              etag: '"44df439f82c7760f1954e37f9ea0755f"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'California',
            city: 'Los Angeles',
            street_address: '300 S. Anderson',
            zipcode: '90001',
          },
        },
        {
          id: '6179a520d61bac11f4ca420d',
          name: 'Zack Rosebrugh',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: '1080-artist-photo.gif',
              encoding: '7bit',
              mimetype: 'image/gif',
              size: 642213,
              bucket: 'wxllspace-app',
              key: 'assets/profile/6179a520d61bac11f4ca420d/artistImage/1080-artist-photo.gif',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/6179a520d61bac11f4ca420d/artistImage/1080-artist-photo.gif',
              etag: '"577d863498a5f792a1de64dff25932b8"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'California',
            city: 'Los Angeles',
            street_address: '423 N Avenue 50',
            zipcode: '90001',
          },
        },
        {
          id: '6179948ad61bac11f4ca420c',
          name: 'Jocelyn Tsaih',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: '044_JocelynTsaih071621_photobyAndriaLo.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 379511,
              bucket: 'wxllspace-app',
              key: 'assets/profile/6179948ad61bac11f4ca420c/artistImage/044_JocelynTsaih071621_photobyAndriaLo.jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/6179948ad61bac11f4ca420c/artistImage/044_JocelynTsaih071621_photobyAndriaLo.jpg',
              etag: '"c4ba7dcbdd3eaa4b04d213734a609dab"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'California',
            city: 'Oakland',
            street_address: '275 Fairmount Ave, Apt 1',
            zipcode: '94601',
          },
        },
        {
          id: '6177431dd61bac11f4ca4208',
          name: 'Jared Olsever',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'profile-pic.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 407679,
              bucket: 'wxllspace-app',
              key: 'assets/profile/6177431dd61bac11f4ca4208/artistImage/profile-pic.jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/6177431dd61bac11f4ca4208/artistImage/profile-pic.jpg',
              etag: '"b8bbc97f5094827e840c6136095c1d57"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: ' ',
            city: ' ',
            street_address: '386 Indian Grove, Toronto ON, M6P 2H5',
          },
        },
        {
          id: '6176fe6ed61bac11f4ca4205',
          name: 'Outer Source',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'IMG_3839.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 269515,
              bucket: 'wxllspace-app',
              key: 'assets/profile/6176fe6ed61bac11f4ca4205/artistImage/IMG_3839.jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/6176fe6ed61bac11f4ca4205/artistImage/IMG_3839.jpg',
              etag: '"b704e7b101e397b4d328e2e256b8aa18"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'New York',
            city: 'New York',
            street_address: '168 Ludlow St. #12',
            zipcode: '10001',
          },
        },
        {
          id: '6164b29324d1201d83fc7cf9',
          name: 'Austin Blue',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'IMG_6577.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 1843756,
              bucket: 'wxllspace-app',
              key: 'assets/profile/6164b29324d1201d83fc7cf9/artistImage/IMG_6577.jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/6164b29324d1201d83fc7cf9/artistImage/IMG_6577.jpg',
              etag: '"35f164ffc9c47407e157993b70e20c46"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'Georgia',
            city: 'Decatur',
            street_address: '3406 elgin dr',
            zipcode: '30030',
          },
        },
        {
          id: '615b9dec40ed5f1d57007fe2',
          name: 'Derek Toebbe',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: '1932DACD-8DB2-4B03-A02C-09703373D389.jpeg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 213619,
              bucket: 'wxllspace-app',
              key: 'assets/profile/615b9dec40ed5f1d57007fe2/artistImage/1932DACD-8DB2-4B03-A02C-09703373D389.jpeg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/615b9dec40ed5f1d57007fe2/artistImage/1932DACD-8DB2-4B03-A02C-09703373D389.jpeg',
              etag: '"32877480cce6e853b3a792cad424b3a4"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: ' ',
            city: ' ',
            street_address: ' ',
          },
        },
        {
          id: '615371ae8c33f26a18a81c5e',
          name: 'Blank Canvas LA LLC',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'IMG_8366.jpeg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 3430326,
              bucket: 'wxllspace-app',
              key: 'assets/profile/615371ae8c33f26a18a81c5e/artistImage/IMG_8366.jpeg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/615371ae8c33f26a18a81c5e/artistImage/IMG_8366.jpeg',
              etag: '"b44f3ce682b17c0331f805c087216f67"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'California',
            city: 'Los Angeles',
            street_address: '7102 Pacific View Dr',
            zipcode: '90001',
          },
        },
        {
          id: '614990686e7a783eaa3eb90b',
          name: 'Skiggity',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: '66C511C3-09BE-4D79-BD2E-6F41D5361831.jpeg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 3024974,
              bucket: 'wxllspace-app',
              key: 'assets/profile/614990686e7a783eaa3eb90b/artistImage/66C511C3-09BE-4D79-BD2E-6F41D5361831.jpeg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/614990686e7a783eaa3eb90b/artistImage/66C511C3-09BE-4D79-BD2E-6F41D5361831.jpeg',
              etag: '"e9cdc6d502804f0f40a7b8990eba8e99"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'Missouri',
            city: 'Kansas City',
            street_address: '10305 E 68th Terrace',
            zipcode: '64101',
          },
        },
        {
          id: '614216f91d38895f8b5eb3e1',
          name: 'JPO',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'IMG_3702.jpg',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 81878,
              bucket: 'wxllspace-app',
              key: 'assets/profile/614216f91d38895f8b5eb3e1/artistImage/IMG_3702.jpg',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/614216f91d38895f8b5eb3e1/artistImage/IMG_3702.jpg',
              etag: '"894cd46bdfab4199ad3bb6a6799d5b28"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'Connecticut',
            city: 'Milford',
            street_address: '2 Depot St',
            zipcode: '06460',
          },
        },
        {
          id: '61325522c94a5d2fddcb5011',
          name: 'Adam Hernandez',
          artistImage: [
            {
              fieldname: 'artistImage',
              originalname: 'DSC05332 Edited.JPG',
              encoding: '7bit',
              mimetype: 'image/jpeg',
              size: 9010782,
              bucket: 'wxllspace-app',
              key: 'assets/profile/61325522c94a5d2fddcb5011/artistImage/DSC05332 Edited.JPG',
              acl: 'public-read',
              contentType: 'application/octet-stream',
              contentDisposition: null,
              storageClass: 'STANDARD',
              serverSideEncryption: null,
              metadata: {
                fieldName: 'artistImage',
              },
              location:
                'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/profile/61325522c94a5d2fddcb5011/artistImage/DSC05332+Edited.JPG',
              etag: '"d69f928d2f674766533b9601224f82ce-2"',
              versionId: null,
            },
          ],
          isReady: true,
          address: {
            country: 'United State',
            state: 'Ohio',
            city: 'Columbus',
            street_address: '84 E Dunedin Rd',
            zipcode: '43085',
          },
        },
      ],
    },
  },
};
