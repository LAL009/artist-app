import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import _ from 'lodash';
import useStyles from './styles';
import LocationMapContainer from './../../components/controls/LocationMapContainer';
import { FilterToolbarSection } from './../../components/controls/FilterToolbarSection';
import { FilterToolbarSectionMobile } from './../../components/controls/FilterToolbarSectionMobile';
import ArtistsListViewSection from './../../components/controls/ArtistsListViewSection';
import { WallCardListSection } from './../../components/controls/WallCardListSection';
import { ArtistCardsCarousel } from './../../components/controls/ArtistCardsCarousel';
import { WallCardsCarousel } from './../../components/controls/WallCardsCarousel';
import Header from './../../components/layout/Header';
import { Helmet } from 'react-helmet';
import {
  selectArtists,
  selectWxlls,
  requestStatus,
  selectArtistFilters,
  selectWallFilters,
} from 'src/reducers/marketplaceReducer';
import { MARKETPLACE_GET_LIST_IDLE } from 'src/constants/marketplaceConstants';
import { getList } from 'src/actions/marketplaceActions';
import { useLocation } from 'react-router-dom';
import USACities from 'src/utility/usa-cities.json';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Marketplace = () => {
  const classes = useStyles();
  let query = useQuery();
  const cityOnSearchQueryParam = query.get('city');

  const [innerWidth, setInnerWidth] = useState('100wh');
  const [innerHeight, setInnerHeight] = useState('100vh');
  const [viewMode, setViewMode] = useState('map');
  const [searchType, setSearchType] = useState('artists');
  const [city, setCity] = useState(
    cityOnSearchQueryParam !== '' ? cityOnSearchQueryParam : 'New York'
  );

  // locationCoordinates will follow GeoJSON [long, lat]
  const [locationCoordinates, setLocationCoordinates] = useState([
    -73.935242, 40.73061,
  ]);

  const [foundCity] = USACities.filter((s) => s.name === city);

  useEffect(() => {
    if (foundCity) {
      const long = _.get(foundCity, 'longitude', -73.935242);
      const lat = _.get(foundCity, 'latitude', 40.73061);
      setLocationCoordinates([parseFloat(long, 10), parseFloat(lat, 10)]);
    }
  }, [foundCity]);

  const [markers, setMarkers] = useState({
    type: 'FeatureCollection',
    features: [],
  });

  /* change location */
  useEffect(() => {
    setCity(query.get('city'));
    setSearchType(query.get('search-type'));
  }, [query]);

  const handleChangeViewMode = (mode) => {
    setViewMode(mode);
  };

  const handleChangeListType = (type) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('city', city);
    if (!searchType) {
      searchParams.set('search-type', 'artists');
    } else {
      searchParams.set('search-type', type);
    }
    setSearchType(type);
    window.location.search = `?${searchParams.toString()}`;
  };

  const handleChangeLocation = (city) => {
    dispatch({
      type: MARKETPLACE_GET_LIST_IDLE,
    });
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('city', city);
    if (!searchType) {
      searchParams.set('search-type', 'artists');
    } else {
      searchParams.set('search-type', searchType);
    }

    window.location.search = `?${searchParams.toString()}`;

    setCity(city);
    const [foundCity] = USACities.filter((s) => s.name === city);

    if (foundCity) {
      const long = _.get(foundCity, 'longitude', -73.935242);
      const lat = _.get(foundCity, 'latitude', 40.73061);
      setLocationCoordinates([parseFloat(long, 10), parseFloat(lat, 10)]);
    }
  };

  const artists = useSelector(selectArtists);
  const artistFilters = useSelector(selectArtistFilters);
  const wallFilters = useSelector(selectWallFilters);
  const wxlls = useSelector(selectWxlls);
  const getRequestStatus = useSelector(requestStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    const getMarketplaceListData = async (city) => {
      try {
        const result = await dispatch(
          getList({
            city,
            filters: { artist: artistFilters, wall: wallFilters },
          })
        );
        const wallMarkers = result.wxlls.map((wxll) => {
          const featuredImageLocation = _.get(
            wxll,
            '[featureImage][0][location]',
            ''
          );

          return {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: wxll.location.coordinates,
            },
            properties: {
              image: featuredImageLocation,
              address: wxll.address,
              info: wxll.info,
              entity: 'wall',
              slug: wxll.slug,
            },
          };
        });

        const artistMarkers = result.artists.map((artist) => {
          const artistImageCollection = _.get(artist, 'artistImage', []);
          const [artistImage] = artistImageCollection.filter(
            (image) => image.fieldname && image.location
          );
          const artistImageLocation = _.get(artistImage, 'location', '');

          return {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: artist.location.coordinates,
            },
            properties: {
              image: artistImageLocation,
              address: artist.address,
              name: artist.name,
              isReady: artist.isReady,
              entity: 'artist',
            },
          };
        });

        setMarkers({
          type: 'FeatureCollection',
          features: [...wallMarkers, ...artistMarkers],
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (getRequestStatus === MARKETPLACE_GET_LIST_IDLE) {
      getMarketplaceListData(city);
    }
  }, [artistFilters, wallFilters, city, getRequestStatus, dispatch]);

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
      setInnerHeight(`${window.innerHeight}px`);

      window.addEventListener('resize', appHeight);
    };

    const appWidth = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-width', `${window.innerWidth}px`);
      setInnerWidth(`${window.innerWidth}px`);

      window.addEventListener('resize', appWidth);
    };

    window.addEventListener('resize', appHeight);
    window.addEventListener('resize', appWidth);
    appHeight();
    appWidth();
  });

  return (
    <Box>
      <Helmet>
        <meta
          name="description"
          content="Search for creatives or commissioned mural opportunities across the US."
        />
        <meta
          property="og:image"
          content={`${process.env.REACT_APP_S3_BASE_URL}/assets/meta/marketplace-OG.png`}
        />
        <title>Marketplace | WXLLSPACE</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: 0,
          zIndex: 1,
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(40px)',
            position: 'relative',
            zIndex: 4,
          }}
        >
          <Box>
            <Header isMarketplaceScreen={true} />
          </Box>

          {/* filter section desktop */}
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
                lg: 'block',
                xl: 'block',
                position: 'relative',
                zIndex: 3,
              },
            }}
          >
            <FilterToolbarSection
              onChange={handleChangeListType}
              onChangeLocation={handleChangeLocation}
              searchType={searchType}
              cityOnSearch={cityOnSearchQueryParam}
            />
          </Box>

          {/* filter section mobile */}
          <Box
            sx={{
              display: {
                xs: 'block',
                sm: 'block',
                md: 'none',
                lg: 'none',
                xl: 'none',
                position: 'relative',
                zIndex: 3,
              },
            }}
          >
            <FilterToolbarSectionMobile
              onChangeLocation={handleChangeLocation}
              searchType={searchType}
              viewMode={viewMode === 'map' ? 'list' : 'map'}
              onChangeListType={handleChangeListType}
              onChangeViewMode={handleChangeViewMode}
            />
          </Box>
        </Box>

        {/* map container */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <LocationMapContainer
            longitude={locationCoordinates[0]}
            latitude={locationCoordinates[1]}
            width={`${innerWidth}`}
            height={`${innerHeight}`}
            mapStyle="light-v10"
            isRounded={false}
            dragPan={true}
            dragRotate={true}
            touchRotate={true}
            keyboard={true}
            markerData={markers}
            scrollZoom={true}
            minZoom={6.0}
            maxZoom={15.01}
            zoom={10.5}
            pitch={60.0}
            bearing={0.0}
            isMapNavControl={true}
            navigationStyle={{
              top: 200,
              right: 20,
            }}
          />
        </Box>

        {/* large screen */}
        <Box
          sx={{
            maxWidth: '400px',
            width: '100%',
            height: {
              md: `calc(100% - 172px)`,
              lg: `calc(100% - 172px)`,
              xl: `calc(100% - 172px)`,
            },
            position: 'fixed',
            zIndex: 2,
            bottom: '0',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
            },
          }}
        >
          {searchType === 'artists' && (
            <ArtistsListViewSection artists={artists} />
          )}
          {searchType === 'walls' && <WallCardListSection wxlls={wxlls} />}
        </Box>

        {/* small screen */}
        {viewMode === 'list' && (
          <Box
            sx={{
              zIndex: 2,
              width: '100%',
              height: {
                xs: `calc(100% - 168px)`,
                sm: `calc(100% - 168px)`,
              },
              position: 'fixed',
              bottom: '0',
              display: {
                xs: 'flex',
                sm: 'flex',
                md: 'none',
                lg: 'none',
                xl: 'none',
              },
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(40px)',
            }}
          >
            {searchType === 'artists' && (
              <ArtistsListViewSection artists={artists} />
            )}
            {searchType === 'walls' && <WallCardListSection wxlls={wxlls} />}
          </Box>
        )}

        {/* small screen */}
        {viewMode === 'map' && (
          <Box
            sx={{
              width: '100%',
              position: 'fixed',
              zIndex: 2,
              display: {
                xs: 'block',
                sm: 'block',
                md: 'none',
                lg: 'none',
                xl: 'none',
              },
              bottom: '0',
              paddingBottom: '1rem',
            }}
          >
            {searchType === 'artists' && (
              <ArtistCardsCarousel artists={artists} />
            )}
            {searchType === 'walls' && <WallCardsCarousel wxlls={wxlls} />}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Marketplace;
