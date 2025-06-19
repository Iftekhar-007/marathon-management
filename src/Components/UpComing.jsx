import React from "react";

const UpComing = () => {
  return (
    <div className="mb-20 lg:w-[1440px] mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-10">
        Upcoming Marathons
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* card 1 */}
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.postimg.cc/tgLcT54G/pexels-runffwpu-2168291.jpg"
              alt="marathon"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Metro Marathon</h2>
            <p>
              <b>Registration Start : </b>17/8/2025{" "}
            </p>
            <p>
              <b>Registration End : </b>20/8/2025
            </p>
            <p>
              <b>Marathon Date : </b> 27/8/2000
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Detail Here</button>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.postimg.cc/CLh9LBNK/pexels-runffwpu-1555351.jpg"
              alt="marathon"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hatijheel Marathon</h2>
            <p>
              <b>Registration Start : </b>07/8/2025{" "}
            </p>
            <p>
              <b>Registration End : </b>10/8/2025
            </p>
            <p>
              <b>Marathon Date : </b> 17/8/2000
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Detail Here</button>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.postimg.cc/kgDZK0L3/pexels-mateusz-dach-99805-1072705.jpg"
              alt="marathon"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Colony Marathon</h2>
            <p>
              <b>Registration Start : </b>17/8/2025{" "}
            </p>
            <p>
              <b>Registration End : </b>20/8/2025
            </p>
            <p>
              <b>Marathon Date : </b> 27/8/2000
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Detail Here</button>
            </div>
          </div>
        </div>

        {/* card 4 */}

        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.postimg.cc/JzgFqTWy/pexels-runffwpu-2402734.jpg"
              alt="marathon"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Chotto metro Marathon</h2>
            <p>
              <b>Registration Start : </b>01/8/2025{" "}
            </p>
            <p>
              <b>Registration End : </b>05/8/2025
            </p>
            <p>
              <b>Marathon Date : </b> 09/8/2000
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Detail Here</button>
            </div>
          </div>
        </div>

        {/* card 5 */}
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.postimg.cc/k5KTyqcZ/pexels-runffwpu-1555354.jpg"
              alt="marathon"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kofil Marathon</h2>
            <p>
              <b>Registration Start : </b>17/8/2025{" "}
            </p>
            <p>
              <b>Registration End : </b>20/8/2025
            </p>
            <p>
              <b>Marathon Date : </b> 27/8/2000
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Detail Here</button>
            </div>
          </div>
        </div>

        {/* card 6 */}

        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://i.postimg.cc/6620XCFK/pexels-runffwpu-2002209.jpg"
              alt="marathon"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shanda Marathon</h2>
            <p>
              <b>Registration Start : </b>17/8/2025{" "}
            </p>
            <p>
              <b>Registration End : </b>20/8/2025
            </p>
            <p>
              <b>Marathon Date : </b> 27/8/2000
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Detail Here</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComing;
