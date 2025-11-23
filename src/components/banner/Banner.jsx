import React from "react";
import banner from "../../assets/cover 2.png";   // desktop
import bannerr from "../../assets/cover 3.png";  // mobile

const Banner = () => {
  return (
    <div
      className="
        relative 
        max-w-[97vw] 
        mx-auto 
        h-[350px]      /* mobile height */
        md:h-[680px]   /* desktop height */
        overflow-hidden 
        rounded-2xl
      "
    >
      {/* Mobile Image */}
      <img
        src={bannerr}
        alt="Mobile Banner"
        className="w-full h-full object-cover md:hidden"
      />

      {/* Desktop Image */}
      <img
        src={banner}
        alt="Desktop Banner"
        className="w-full h-full object-cover hidden md:block"
      />
    </div>
  );
};

export default Banner;
