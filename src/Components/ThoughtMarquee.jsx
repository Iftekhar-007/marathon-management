import Marquee from "react-fast-marquee";
import ThoughtCard from "./ThoughtCard";

const ThoughtMarquee = () => {
  const data = [
    {
      image: "https://i.pravatar.cc/300?img=1",
      name: "John Doe",
      role: "Marathon Participant",
      thought:
        "Running this marathon was a life-changing experience. The crowd kept me going till the end!",
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      name: "Jane Smith",
      role: "First-time Runner",
      thought:
        "I never thought I could finish 21km, but the energy here is unbeatable!",
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      name: "Mark Lee",
      role: "Charity Runner",
      thought:
        "It’s amazing to run for a cause and feel the community’s support.",
    },
  ];

  return (
    <div className=" lg:w-[1440px] mt-6 rounded-2xl mx-auto px-2 py-10">
      <div>
        <h2 className=" font-bold lg:text-5xl text-center mb-10 dark:text-orange-500">
          Reviews
        </h2>
      </div>
      <Marquee pauseOnHover={true} speed={40} gradient={false}>
        {data.map((item, index) => (
          <ThoughtCard key={index} {...item} />
        ))}
      </Marquee>
    </div>
  );
};

export default ThoughtMarquee;
