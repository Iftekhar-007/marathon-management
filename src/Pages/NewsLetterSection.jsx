import React from "react";
import NewsletterCard from "../Components/NewsLetterCard";

const NewsletterSection = () => {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800",
      title: "Marathon Weekly",
      description: "Get weekly updates about upcoming marathons and events.",
    },
    {
      image:
        "https://images.pexels.com/photos/1555354/pexels-photo-1555354.jpeg?_gl=1*krjwed*_ga*NDcyODAwOTkxLjE3NDc4MzgzOTk.*_ga_8JE65Q40S6*czE3NTQ4MTk5MjUkbzE5JGcxJHQxNzU0ODE5OTM0JGo1MSRsMCRoMA..",
      title: "Training Tips",
      description: "Learn the best training strategies from expert runners.",
    },
    {
      image:
        "https://images.pexels.com/photos/1578384/pexels-photo-1578384.jpeg?_gl=1*1lma7em*_ga*NDcyODAwOTkxLjE3NDc4MzgzOTk.*_ga_8JE65Q40S6*czE3NTQ4MTk5MjUkbzE5JGcxJHQxNzU0ODE5OTc4JGo3JGwwJGgw",
      title: "Exclusive Offers",
      description: "Receive special discounts and early bird tickets.",
    },
  ];

  return (
    <div className="py-12 px-4 lg:w-[1440px] mx-auto min-h-screen">
      <h2 className="text-3xl font-bold text-center  dark:text-orange-500 mb-8">
        Stay Updated
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((card, idx) => (
          <NewsletterCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
};

export default NewsletterSection;
