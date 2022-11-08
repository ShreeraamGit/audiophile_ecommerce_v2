import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const DesktopYouMayAlsoLike = (props) => {
  const { product } = props;
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-[24px] leading-[38px] tracking-[2px] font-bold text-center">
        YOU MAY ALSO LIKE
      </h3>
      <div className="flex justify-center items-center gap-5">
        {product.others.map((items) => (
          <div
            className="flex flex-col justify-center items-center gap-8"
            key={items.name}
          >
            <img
              className="rounded-xl"
              src={items.image.desktop}
              alt={items.name}
            ></img>
            <h3 className="text-[24px] leading-[38px] tracking-[2px] font-bold text-center">
              {items.name.toLocaleUpperCase()}
            </h3>
            <Link to={`${items.slug}`}>
              <Button type={"buttonOrange"}></Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopYouMayAlsoLike;
