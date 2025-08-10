// import React from "react";

// const Sponsor = () => {
//   return (
//     <div className="lg:w-[1440px] mx-auto">
//       <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-10">
//         Sponsoring Us
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//         <img
//           className="h-[220px] w-[220px]"
//           src="https://i.postimg.cc/Vv9697Zn/circular-saw-1700037-640.png"
//           alt="sponsor"
//         />
//         <img
//           className="h-[220px] w-[220px]"
//           src="https://i.postimg.cc/fb6TG46Y/logo-7462411-640.png"
//           alt="sponsor"
//         />
//         <img
//           className="h-[220px] w-[220px]"
//           src="https://i.postimg.cc/NG8fzzbr/logo-2537871-640.png"
//           alt="sponsor"
//         />
//         <img
//           className="h-[220px] w-[220px]"
//           src="https://i.postimg.cc/rptqCnKs/brand-7833518-640.png"
//           alt="sponsor"
//         />
//       </div>
//     </div>
//   );
// };

// export default Sponsor;

import React from "react";
import Marquee from "react-fast-marquee";

const sponsors = [
  {
    id: 1,
    img: "https://i.postimg.cc/Vv9697Zn/circular-saw-1700037-640.png",
    alt: "Sponsor 1",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/fb6TG46Y/logo-7462411-640.png",
    alt: "Sponsor 2",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/NG8fzzbr/logo-2537871-640.png",
    alt: "Sponsor 3",
  },
  {
    id: 4,
    img: "https://i.postimg.cc/rptqCnKs/brand-7833518-640.png",
    alt: "Sponsor 4",
  },
  {
    id: 5,
    img: "https://cdn.pixabay.com/photo/2023/03/06/13/58/logo-7833524_640.png",
    alt: "Sponsor 5",
  },
  {
    id: 6,
    img: "https://cdn.pixabay.com/photo/2023/10/16/15/49/guy-fawkes-8319511_640.png",
    alt: "Sponsor 6",
  },
  {
    id: 7,
    img: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088003_640.png",
    alt: "Sponsor 7",
  },
  {
    id: 8,
    img: "https://cdn.pixabay.com/photo/2016/03/17/07/02/starbucks-1262392_640.jpg",
    alt: "Sponsor 8",
  },
];

export default function Sponsor() {
  return (
    <div>
      <h2 className="lg:font-bold text-5xl text-center lg:mb-10 mb-5 dark:text-orange-500">
        Sponsors
      </h2>
      <div
        style={{
          background: "linear-gradient(90deg, #f8fafc, #f1f5f9)",
          padding: "40px 0",
        }}
        className="lg:w-[1440px] rounded-2xl mx-auto"
      >
        <Marquee
          direction="left"
          speed={40}
          gradient={false}
          pauseOnHover={true}
        >
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              style={{
                margin: "0 40px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={sponsor.img}
                alt={sponsor.alt}
                style={{
                  height: "90px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
