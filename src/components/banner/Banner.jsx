import React from "react";
import banner from "../../assets/cover.png"

const Banner = () => {
  return (
    <div className="relative max-w-[97vw] mx-auto h-[680px] overflow-hidden rounded-2xl">
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;
