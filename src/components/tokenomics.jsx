import donut from "../assets/images/all_donut.svg";
import donut_mobile from "../assets/images/all_donut_mobile.svg";

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="text-left md:text-center bodyPadding py-[10vh]">
      <h3 className="text-black text-[32px] md:text-[56px]">Tokenomics</h3>
      <p className="text-black text-[16px] md:text-[32px] mb-10 md:mb-20">
        Total Supply
        <span className="text-blue font-bold"> 1,000,000,000 IRONY</span>
      </p>
      <section className="flex items-center justify-center">
        <img
          src={donut}
          alt="Total supply chart"
          className="hidden md:block lg:block select-none "
        />
        <img
          src={donut_mobile}
          alt="Total supply chart mobile"
          className="block md:hidden lg:hidden select-none "
        />
      </section>
    </div>
  );
};

export default Tokenomics;
