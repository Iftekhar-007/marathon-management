import React from "react";

const Legends = () => {
  return (
    <div className="lg:w-[1440px] mx-auto mb-20">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-10">
        Legends are Coming
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.postimg.cc/SK4SyLgv/pexels-rdne-7468194.jpg"
              alt="marathon"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shanda Widow</h2>
            <p>Champion 2024 marathon</p>
          </div>
        </div>

        {/* card2 */}
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.postimg.cc/v8CDJnwp/pexels-nappy-936117.jpg"
              alt="marathon"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">William</h2>
            <p>Champion 2023 grand marathon</p>
          </div>
        </div>

        {/* card 3 */}

        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.postimg.cc/CMnxsKnJ/pexels-cottonbro-9077999.jpg"
              alt="marathon"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tony Stank</h2>
            <p>Champion 2019 marathon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legends;
