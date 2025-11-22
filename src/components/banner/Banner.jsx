import React from "react";
import clothsVedio from "../../assets/Cloths-vedio.mp4"
const Banner = () => {
  return (
    <div className="relative  max-w-[97vw] mx-auto h-[823px] overflow-hidden  ">
      {/* Local Video */}
      <video
        src={clothsVedio}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
      />
    </div>
  );
};

export default Banner;
 

