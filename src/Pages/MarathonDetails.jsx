import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MarathonDetails = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/marathons/${id}`)
      .then((res) => res.json())
      .then((data) => setDetailData(data));
  }, [id]);

  return (
    <div className="lg:w-[1440px] lg:mx-auto lg:my-20">
      <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center">
        {detailData.title}
      </h2>
    </div>
  );
};

export default MarathonDetails;
