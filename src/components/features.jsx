import icon_1 from "../assets/images/features_icon_1.svg";
import icon_2 from "../assets/images/features_icon_2.svg";
import icon_3 from "../assets/images/features_icon_3.svg";
import icon_4 from "../assets/images/features_icon_4.svg";

const features = [
  {
    title: "AI-Generated Memes",
    content:
      "Enjoy a constant stream of fresh and hilarious memes created by AI. Share and collect your favorites!",
    image: icon_1,
  },
  {
    title: "Techie NFTs",
    content:
      "Collect and trade unique tech-themed NFTs, from iconic gadgets to memorable tech moments.",
    image: icon_2,
  },
  {
    title: "Virtual Events",
    content:
      "Join our tech-themed virtual events, including hackathons, VR meetups, and AI trivia nights.",
    image: icon_3,
  },
  {
    title: "Community Rewards",
    content:
      "Earn rewards for engaging with the community, participating in contests, and contributing to tech projects.",
    image: icon_4,
  },
];
const Features = () => {
  const renderFeatures = () => {
    return features.map((feature, index) => (
      <div
        key={index}
        className="bg-opacity-50 bg-[#28261c] border border-border rounded-xl px-[20px] py-[20px] md:px-[30px] md:py-[30px]"
      >
        <img
          src={feature.image}
          alt="feature icon"
          className="w-[60px] h-[60px] md:w-[96px] md:h-[96px]"
        />
        <h3 className="text-[28px] md:text-[32px] text-black">
          {feature.title}
        </h3>
        <p className="text-[14px] md:text-[16px] text-black">
          {feature.content}
        </p>
      </div>
    ));
  };

  return (
    <div
      id="features"
      className="min-w-screen py-[10vh] bodyPadding flex items-center relative"
    >
      <section>
        <h3 className="text-[32px] mb-5 md:mb-8 md:text-[56px] text-black">
          Features
        </h3>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
          {renderFeatures()}
        </section>
      </section>
      <div className="absolute  w-[40vw] h-screen bg-[#ecb7ea] rounded-full  bottom-[-250px] left-[-250px] blur-[400px]" />
    </div>
  );
};

export default Features;
