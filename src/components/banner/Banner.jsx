import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black">
      {/* YouTube Video */}
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/flFETfq__p4?autoplay=1&mute=1&controls=1"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Banner;
