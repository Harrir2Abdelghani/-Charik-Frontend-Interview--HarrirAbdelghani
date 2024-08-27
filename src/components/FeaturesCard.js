import React from 'react'
const FeaturesCard = ({ imgSrc, title, info }) => {
  {/* Pass props to the Card component. */}
  return (
    <div className="bg-white  text-left rounded-xl mx-10 border-1 hover:shadow-lg active:shadow-none cursor-pointer hover:scale-105 active:scale-95 transition">
      <div className="flex justify-center items-center h-28">
        <img className="rounded-t-xl h-full w-auto object-cover" src={imgSrc} alt="" />
      </div>
      <div className="px-4 pt-6 pb-10">
        <p className="text-base">
        <span className="font-bold text-l  text-orange-900 transition ease-out">
        {title}
        </span>
        <br />
        {info}
        </p>
      </div>
    </div>
  );
}

export default FeaturesCard