import React from "react";
import ReactPixel from "react-facebook-pixel";
const Purchase = () => {
  ReactPixel.track("Purchase", {
    currency: "THB",
    value: 30.0,
  });
  return <div>Purchase</div>;
};

export default Purchase;
