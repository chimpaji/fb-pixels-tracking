import React, { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";
const PixelId = "111111111111111";
const Viewcontent = () => {
  useEffect(() => {
    ReactPixel.track("ViewContent", {
      currency: "THB",
      value: 30.0,
    });
  }, []);
  return <div className="">ViewContent</div>;
};

export default Viewcontent;
