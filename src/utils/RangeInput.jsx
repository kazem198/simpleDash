import React from "react";

import ReactSlider from "react-slider";

const RangeInput = ({ number, name }) => {
  return (
    // <div className="position-relative">
    <div>
      <ReactSlider
        className="vertical-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        orientation="vertical"
        min={0}
        max={20}
        invert
        value={number}
        pearling
        disabled
      />
      <p className="text-white descrip">{name}</p>
    </div>
  );
};

export default RangeInput;
