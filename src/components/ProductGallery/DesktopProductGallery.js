import React from "react";

const DesktopProductGallery = (props) => {
  const { product } = props;
  return (
    <div className="h-fit flex gap-8 justify-center items-center">
      <div className="flex flex-col gap-8">
        <img
          className="rounded-xl"
          alt={product.name}
          src={product.gallery.first.desktop}
        ></img>
        <img
          className="rounded-xl"
          alt={product.name}
          src={product.gallery.second.desktop}
        ></img>
      </div>
      <img
        className="rounded-xl"
        alt={product.name}
        src={product.gallery.third.desktop}
      ></img>
    </div>
  );
};

export default DesktopProductGallery;
