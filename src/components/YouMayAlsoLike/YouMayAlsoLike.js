import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const YouMayAlsoLike = (props) => {
  const { product } = props;
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-[24px] leading-[38px] tracking-[2px] font-bold text-center">
        YOU MAY ALSO LIKE
      </h3>
      <div className="flex flex-col justify-center items-center gap-14">
        {product.others.map((items) => (
          <div
            className="flex flex-col justify-center items-center gap-8"
            key={items.name}
          >
            <img
              className="rounded-xl"
              src={items.image.mobile}
              alt={items.name}
            ></img>
            <h3 className="text-[24px] leading-[38px] tracking-[2px] font-bold text-center">
              {items.name.toLocaleUpperCase()}
            </h3>
            <Link to={`${product.id}`}>
              <Button type={"buttonOrange"}></Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
