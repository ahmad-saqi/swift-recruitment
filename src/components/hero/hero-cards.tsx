import { ChevronRight, User } from "lucide-react";

const HeroCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-4 max-w-4xl mx-auto">
      <div className="w-full border border-slate-200 p-8 flex flex-col gap-4 text-white text-center justify-center items-center rounded-lg ">
        <User />
        <p className="font-semibold text-3xl">For Job Seekers</p>
        <p>
          Find your dream role in logistics, transport, and warehouse operations
        </p>
        <button className="flex gap-2 w-full items-center justify-center bg-slate-700 p-2 rounded-lg ">
          Find Jobs <ChevronRight />
        </button>
      </div>
      <div className="w-full border border-slate-200 p-8 flex flex-col gap-4 text-white text-center justify-center items-center rounded-lg ">
        <User />
        <p className="font-semibold text-3xl">For Employers</p>
        <p>
          Find your dream role in logistics, transport, and warehouse operations
        </p>
        <button className="flex gap-2 w-full items-center justify-center bg-white text-slate-700 p-2 rounded-lg ">
          Hire Talent <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HeroCards;
