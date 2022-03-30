import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { ArtistSearchResultSection } from 'src/components/controls/ArtistSearchResultSection';
import { ArtistFilterBar } from 'src/components/controls/ArtistFilterBar';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { artistSearchResults } from '../../actions/artistSearchAction';
import { first, isArray, throttle } from 'lodash';
import {
  ARTIST_GET_LOADMORE_OFFSET,
  ARTIST_GET_SEARCH_SUCCESS,
  ARTIST_GET_SKIP,
} from '../../constants/artistSearchConstants';
import axios from 'axios';

const ArtistSearch = () => {
  const dispatch = useDispatch();
  const [scrollLoading, setScrollLoading] = useState(false);
  const artistSearchResult = useSelector((state) => state.artistSearch);

  useEffect(() => {
    dispatch(artistSearchResults());
  }, [dispatch]);

  // Infinite scroll handling
  useEffect(() => {
    let { name, style, state, skip, total } = artistSearchResult?.results;

    const query = {};
    if (name) query['name'] = name;
    if (style) query['style'] = style;
    if (state) query['state'] = state;
    if (skip) query['skip'] = skip;
    const queryUrl = new URLSearchParams(query).toString();

    let loading = true;
    setScrollLoading(false);

    const handler = () => {
      if (
        loading &&
        isArray(artistSearchResult?.results?.artist) &&
        !(skip >= total) &&
        window.scrollY >
          document.body.offsetHeight -
            window.outerHeight -
            ARTIST_GET_LOADMORE_OFFSET
      ) {
        loading = false;
        setScrollLoading(true);
        (async () => {
          const res = await axios.get(
            `/api/artistsearch${queryUrl ? `?${queryUrl}` : ''}`
          );
          if (res?.data?.artist) {
            const artist = res?.data?.artist;
            dispatch({
              type: ARTIST_GET_SEARCH_SUCCESS,
              payload: {
                ...artistSearchResult?.results,
                artist: [...artistSearchResult?.results?.artist, ...artist],
                skip: (skip += ARTIST_GET_SKIP),
                error: false,
              },
            });
          }
          loading = true;
          setScrollLoading(false);
        })();
      }
    };

    // Scroll event
    window.onscroll = throttle(handler, 200, { trailing: true, leading: true });
  }, [artistSearchResult, dispatch]);

  // Format data according to artist card
  const data = useMemo(() => {
    if (
      artistSearchResult?.results?.artist &&
      isArray(artistSearchResult?.results?.artist)
    ) {
      return artistSearchResult?.results?.artist?.map((item) => ({
        artistCard: first(item?.artistImage)?.location,
        available: 'Available',
        name: item?.name || '',
        city: item?.address?.city || '',
        state: item?.address?.state || '',
      }));
    } else {
      return [];
    }
  }, [artistSearchResult]);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          paddingTop: {
            xs: '1rem',
            sm: '1rem',
            md: '5rem',
            xl: '8rem',
            lg: '8rem',
          },
        }}
      >
        <Grid container spacing={10}>
          {/* Artist Details Section */}
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Container maxWidth="xl" sx={{ paddingTop: '8rem' }}>
              <ArtistFilterBar />
            </Container>
          </Grid>

          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Container maxWidth="xl" sx={{ paddingBottom: '8rem' }}>
              {artistSearchResult?.results?.error ? (
                'Something went wrong!'
              ) : (
                <ArtistSearchResultSection data={data} />
              )}
              {scrollLoading
                ? 'Loading...'
                : artistSearchResult?.results?.initialLoad &&
                  !artistSearchResult?.results?.artist?.length &&
                  'Not Found!'}
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ArtistSearch;
