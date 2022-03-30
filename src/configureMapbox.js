// By default Create React App doesn't allow us to configure the webpack,
// so in order to workaround this issue https://github.com/visgl/react-map-gl/issues/1266,
// we load and transpile the Web Worker separately as per this guide https://docs.mapbox.com/mapbox-gl-js/guides/install/#transpiling

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
//  Load worker code separately with worker-loader
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'; // eslint-disable-line import/no-webpack-loader-syntax
// Wire up loaded worker to be used instead of the default
mapboxgl.workerClass = MapboxWorker;
