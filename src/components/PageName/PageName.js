import React from "react";

const PageName = (props) => {
  const { pageName } = props;
  return (
    <div className="text-white p-7 font-bold text-[30px] tracking-[2.5px] flex justify-center items-center">
      {pageName.toLocaleUpperCase()}
    </div>
  );
};

export default PageName;
