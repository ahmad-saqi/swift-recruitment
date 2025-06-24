import HeroCard from "@/components/hero/hero-cards";
import Recruite from "./hero/recruite";
const Hero = () => {
  return (
    <div className="bg-slate-500">
      <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-0  py-16 space-y-8">
        <div className="text-white flex flex-col gap-4 items-center max-w-2xl mx-auto text-center">
          <p className="text-4xl font-semibold">Connect with Your Next</p>
          <p className="text-slate-300 text-4xl">Career Opportunity</p>
          <p className="text-xl">
            Whether you're seeking the perfect role or looking to hire top
            talent, Swift Recruit connects logistics professionals with leading
            UK employers.
          </p>
        </div>
        <HeroCard />
        <Recruite />
      </div>
    </div>
  );
}

export default Hero