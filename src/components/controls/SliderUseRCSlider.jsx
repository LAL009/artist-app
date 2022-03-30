import React from "react";
import Slider, { createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import "./SliderUseRCSlider.css";

const SliderToolTip = createSliderWithTooltip(Slider);

const SliderUseRCSlider = (props) => {
  const { defaultValue, onChange, min, max, marks } = props
  return (
    <SliderToolTip
        marks={marks}
        min={min}
        max={max}
        defaultValue={defaultValue}
        tipFormatter={(value) => `${value}`}
        tipProps={{
        placement: "top",
        visible: true,
        prefixCls: "rc-slider-tooltip"
        }}
        onChange={onChange}
    />
  );
}

export default SliderUseRCSlider