import React from "react";

const Card = ({ service }) => {
  return (
    <div className="z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4">
      <img src={service.linkImg} className="h-40 w-full object-cover" />
      <div className="p-5 border border-b">
        <h1 className="py-2 truncate">{service.title}</h1>
      </div>

      <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">
        {service.title}
      </div>
    </div>
  );
};

export default Card;
