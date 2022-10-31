import React from "react";

const Button = (props) => {
  const { type } = props;

  const renderButton = () => {
    if (type === "buttonOrange") {
      return (
        <button
          className={`text-[15px] text-white font-bold tracking-[1px] leading-[25px] bg-[#D87D4A] pt-4 pb-4 pr-8 pl-8`}
        >
          SEE PRODUCT
        </button>
      );
    } else if (type === "buttonBlack") {
      return (
        <button
          className={`text-[15px] text-white font-bold tracking-[1px] leading-[25px] bg-[#000000] pt-4 pb-4 pr-8 pl-8`}
        >
          SEE PRODUCT
        </button>
      );
    }
    return (
      <button
        className={`text-[15px] border border-black text-black font-bold tracking-[1px] leading-[25px] bg-none pt-4 pb-4 pr-8 pl-8`}
      >
        SEE PRODUCT
      </button>
    );
  };

  return renderButton();
};

export default Button;
