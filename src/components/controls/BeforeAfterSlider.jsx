import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

export const BeforeAfterSlider = (props) => {
  const FIRST_IMAGE = {
    imageUrl: `${process.env.REACT_APP_S3_BASE_URL}/assets/real-estate/side-B.jpg`,
  };
  const SECOND_IMAGE = {
    imageUrl: `${process.env.REACT_APP_S3_BASE_URL}/assets/real-estate/side-A.jpg`,
  };
  return (
    <ReactBeforeSliderComponent
      currentPercentPosition={60}
      delimiterColor="#06102b"
      className={props.style}
      firstImage={FIRST_IMAGE}
      secondImage={SECOND_IMAGE}
    />
  );
};
