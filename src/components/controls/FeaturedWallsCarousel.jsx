import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import _ from 'lodash';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';
import { LeftArrowIcon, RightArrowIcon } from './../icons/index';

import { WallCard } from './../controls/WallCard';

const CustomButtonRoot = styled('button')(`
  background-color: rgba(220, 220, 220, 0.15);
  padding: 12px;
  border-radius: 100px;
  color: #fff;
  font-weight: 600;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  width: 60px;
  height: 60px;

  &:hover {
    background-color: rgba(220, 220, 220, 0.5);
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

function PrevArrowButton(props) {
  return (
    <ButtonUnstyled {...props} component={CustomButtonRoot}>
      <LeftArrowIcon />
    </ButtonUnstyled>
  );
}

function NextArrowButton(props) {
  return (
    <ButtonUnstyled {...props} component={CustomButtonRoot}>
      <RightArrowIcon />
    </ButtonUnstyled>
  );
}

const CustomSlide = (props) => {
  const { wall, loading } = props;

  const wallFeatureImageCollection = _.get(wall, 'featureImage', []);
  const [featureImage] = wallFeatureImageCollection.filter(
    (image) => image.fieldname && image.location
  );
  const featureImageLocation = _.get(featureImage, 'location', '');

  let budget = _.get(wall, 'info.offered', '0');
  budget = parseInt(budget, 10);
  const formattedBudgetInUSD = budget.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return (
    <WallCard
      wallImageSrc={featureImageLocation}
      status={wall.status === 'new' ? 'just listed' : ''}
      budget={`${formattedBudgetInUSD} - Proposed Budget`}
      location={wall.info.title}
      state={`${wall.address.city}, ${wall.address.state}`}
      area={`${wall.info.size} sqft`}
      dimension={`${wall.info.dimension}`}
      slug={wall.slug}
      loading={loading}
    />
  );
};

export class FeaturedWallsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const wxlls = this.props.wxlls;

    const loading = this.props.loading;
    const settings = {
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 4,
      className: 'center',
      centerMode: true,
      responsive: [
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '40px',
          },
        },
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '20px',
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '30px',
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '130px',
          },
        },
        {
          breakpoint: 1194,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '100px',
          },
        },
        {
          breakpoint: 1180,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '90px',
          },
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '50px',
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '180px',
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '110px',
          },
        },
        {
          breakpoint: 926,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '130px',
          },
        },
        {
          breakpoint: 915,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '120px',
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '120px',
          },
        },
        {
          breakpoint: 896,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '120px',
          },
        },
        {
          breakpoint: 883,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '110px',
          },
        },
        {
          breakpoint: 854,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '100px',
          },
        },
        {
          breakpoint: 844,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '90px',
          },
        },
        {
          breakpoint: 834,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '90px',
          },
        },
        {
          breakpoint: 812,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '77px',
          },
        },
        {
          breakpoint: 810,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '80px',
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '70px',
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '40px',
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '60px',
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '50px',
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '120px',
          },
        },
        {
          breakpoint: 667,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: '110px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '100px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '65px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 428,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '105px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 414,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '97px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 412,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '95px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 390,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '85px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 384,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '82px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '80px',
            centerMode: true,
            className: 'center',
          },
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '72px',
            centerMode: true,
            className: 'center',
          },
        },
      ],
    };

    return (
      <Box
        sx={{
          paddingTop: '1rem',
          maxWidth: '1440px',
          width: '100%',
          margin: 'auto',
        }}
      >
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {wxlls &&
            wxlls.map((wall) => (
              <CustomSlide index={wall._id} wall={wall} loading={loading} />
            ))}
        </Slider>

        {/* arrows container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              top: {
                xs: '-120px',
                sm: '-120px',
                md: '-175px',
                lg: '-175px',
                xl: '-175px',
              },
              zIndex: 10,
            }}
          >
            <PrevArrowButton onClick={this.previous} />
          </Box>

          <Box
            sx={{
              position: 'relative',
              top: {
                xs: '-120px',
                sm: '-120px',
                md: '-175px',
                lg: '-175px',
                xl: '-175px',
              },
              zIndex: 10,
            }}
          >
            <NextArrowButton onClick={this.next} />
          </Box>
        </Box>
      </Box>
    );
  }
}
