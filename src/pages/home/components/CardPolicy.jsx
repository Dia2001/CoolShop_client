import React from "react";

const CardPolicy = ({ data }) => {
  return (
    <div className="rounded-[12px] shadow-md hover:shadow-sm transition w-[320px] h-[165px] flex justify-center gap-2 items-center">
      <div className="rounded-full w-[130px] h-[130px] bg-Primary flex justify-center items-center">
        <img src={data.logo} className="w-[100px] h-[100px]" alt="Chính sách" />
      </div>
      <div className="w-[160px] h-[120px] text-left">
        <h6>{data.title}</h6>
      </div>
    </div>
  );
};

export default CardPolicy;
