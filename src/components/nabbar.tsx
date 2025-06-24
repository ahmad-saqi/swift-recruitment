import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/img/logo.png";

const Nabbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-slate-600/80 sticky top-0 z-50 ">
      <div className="w-full max-w-screen-xl mx-auto ">
        <div className="h-16 flex justify-between items-center ">
          {/* Logo Section */}
          <img src={Logo} alt="" className="h-16" />

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-4 text-white text-sm">
            <p className="cursor-pointer">JOBS</p>
            <p className="cursor-pointer">CANDIDATES</p>
            <p className="cursor-pointer">EMPLOYERS</p>
            <p className="cursor-pointer">SUPPLY CHAIN</p>
            <p className="cursor-pointer">PARTNERSHIPS</p>
            <p className="cursor-pointer">CONTENT</p>
            <p className="cursor-pointer">ABOUT</p>
            <p className="cursor-pointer">CONTACT</p>
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className="lg:hidden text-white text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col gap-4 px-6 py-4 bg-slate-700 text-white lg:hidden text-sm">
            <p className="cursor-pointer">JOBS</p>
            <p className="cursor-pointer">CANDIDATES</p>
            <p className="cursor-pointer">EMPLOYERS</p>
            <p className="cursor-pointer">SUPPLY CHAIN</p>
            <p className="cursor-pointer">PARTNERSHIPS</p>
            <p className="cursor-pointer">CONTENT</p>
            <p className="cursor-pointer">ABOUT</p>
            <p className="cursor-pointer">CONTACT</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nabbar;
