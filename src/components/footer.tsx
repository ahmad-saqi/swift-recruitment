import { Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "../assets/img/logo.png"
const Footer = () => {
  return (
    <div className="bg-slate-500">
      <div className="max-w-screen-xl mx-auto text-white px-4 lg:px-0 py-16 flex flex-col gap-8 justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="flex flex-col  items-start lg:items-center">
            <img src={Logo} alt="" />
            <p className="lg:text-center text-gray-300">
              Connecting top talent with leading employers across the UK. Swift
              Recruit is your trusted recruitment partner.
            </p>
            <div className="flex gap-4 text-gray-300 justify-start w-full p-3 mt-6">
              <Linkedin />
              <Facebook />
              <Instagram />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 items-start lg:items-center">
            <p className="text-xl font-semibold ">Contact Information</p>
            <p className="text-lg font-semibold mt-5">Address:</p>
            <p className="text-sm text-gray-300">
              Morecroft House Newmarket CB8 7SU
            </p>
            <p className="text-lg font-semibold mt-3">Phone:</p>
            <p className="text-sm text-gray-300">01638475500</p>
            <p className="text-lg font-semibold mt-3">Email:</p>
            <p className="text-sm text-gray-300">info@swift-recruit.co.uk</p>
          </div>
          <div className="flex flex-col gap-2 items-start lg:items-center">
            <p className="text-xl font-semibold ">For Job Seekers</p>
            <a href="#" className="text-sm text-gray-300">
              Browse Jobs
            </a>
            <a href="#" className="text-sm text-gray-300">
              Job Alerts
            </a>
            <a href="#" className="text-sm text-gray-300">
              Career Advice
            </a>
            <a href="#" className="text-sm text-gray-300">
              CV Tips
            </a>
            <a href="#" className="text-sm text-gray-300">
              Interview Preparation
            </a>
          </div>
          <div className="flex flex-col gap-2 items-start lg:items-center">
            <p className="text-xl font-semibold ">For Employers</p>
            <a href="#" className="text-sm text-gray-300">
              Post a Job
            </a>
            <a href="#" className="text-sm text-gray-300">
              Recruitment Solutions
            </a>
            <a href="#" className="text-sm text-gray-300">
              Supply Chain
            </a>
            <a href="#" className="text-sm text-gray-300">
              Candidate Database
            </a>
            <a href="#" className="text-sm text-gray-300">
              Employer Branding
            </a>
            <a href="#" className="text-sm text-gray-300">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer