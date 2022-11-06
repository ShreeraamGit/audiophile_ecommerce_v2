import React from "react";

const TabletProductGalley = (props) => {
  const { product } = props;

  return (
    <div className="h-[45vh] w-full flex justify-center items-center gap-5">
      <div className="flex flex-col h-full gap-5">
        <img
          className="rounded-xl h-full"
          alt={product.name}
          src={product.gallery.first.tablet}
        ></img>
        <img
          className="rounded-xl h-full"
          alt={product.name}
          src={product.gallery.second.tablet}
        ></img>
      </div>
      <img
        className="rounded-xl h-full w-[50%]"
        alt={product.name}
        src={product.gallery.third.tablet}
      ></img>
    </div>
  );
};

export default TabletProductGalley;
