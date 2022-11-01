import React from "react";

const ProductGallery = (props) => {
  const { product } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <img
        className="rounded-xl"
        alt={product.name}
        src={product.gallery.first.mobile}
      ></img>
      <img
        className="rounded-xl"
        alt={product.name}
        src={product.gallery.second.mobile}
      ></img>
      <img
        className="rounded-xl"
        alt={product.name}
        src={product.gallery.third.mobile}
      ></img>
    </div>
  );
};

export default ProductGallery;
