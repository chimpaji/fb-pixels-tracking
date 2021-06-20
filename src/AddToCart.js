import React from "react";
import ReactPixel from "react-facebook-pixel";
const AddToCart = () => {
  ReactPixel.track("AddToCart", {
    currency: "THB",
    value: 30.0,
  });
  return <div>Purchase</div>;
};

export default AddToCart;
