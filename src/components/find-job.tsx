import { Mail, MapPin, Phone } from "lucide-react";

const FindJob = () => {
  return (
    <div className="bg-slate-600">
      <div className="max-w-screen-xl mx-auto text-white px-4 lg:px-0 py-16 flex flex-col gap-8 justify-center items-center">
        <p className="text-4xl font-semibold">Ready to Take the Next Step?</p>
        <p className="text-lg">
          Whether you're looking for your next career opportunity or need to
          hire top talent, Swift Recruit is here to help you succeed.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-md bg-white text-slate-600">
            Find Jobs Now
          </button>
          <button className="px-6 py-2 rounded-md bg-white/30 text-white border border-white/30">
            Post a Job
          </button>
        </div>
        <p className="text-lg ">Get in Touch Today</p>
        <div className="flex flex-col md:flex-row gap-4">
          <p className="flex items-center gap-2">
            <Phone />
            01638475500
          </p>
          <p className="flex items-center gap-2">
            <Mail />
            info@swift-recruit.co.uk
          </p>
          <p className="flex items-center gap-2">
            <MapPin />
            Morecroft House, Newmarket CB8 7SU
          </p>
        </div>
      </div>
    </div>
  );
}

export default FindJob