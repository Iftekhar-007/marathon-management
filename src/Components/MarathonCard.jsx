import React from "react";

const MarathonCard = ({ marathon }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            className="h-[580px] w-full object-cover"
            src={marathon.image}
            alt="marathon"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{marathon.title}</h2>
          <p>{marathon.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonCard;
