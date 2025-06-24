const recruiters = [
  {
    name: "John Doe",
    position: "Senior Recruiter",
    company: "TalentPro Inc.",
  },
  {
    name: "Jane Smith",
    position: "Tech Recruiter",
    company: "HireTech Solutions",
  },
  {
    name: "Michael Lee",
    position: "Executive Search",
    company: "EliteHires",
  },
];

const Recruite = () => {
  return (
    <div className="w-full max-w-2xl mx-auto  flex flex-col gap-8 items-center justify-center">
      <p className="text-4xl text-white">Meet Your Recruitment Experts</p>
      <div className="flex flex-col gap-4 w-full max-w-2xl md:flex-row justify-between items-center">
        {recruiters.map((recruiter, index) => (
          <div
            key={index}
            className="flex flex-col gap-1.5 items-center justify-center"
          >
            <div className="h-24 bg-white border-4 border-slate-800 rounded-full w-24 relative">
              <div className="size-5 absolute bg-slate-500 border-2 border-white rounded-full bottom-0 -right-1 flex items-center justify-center">
                <div className="size-2.5 bg-white rounded-full" />
              </div>
            </div>
            <p className="text-white font-semibold">{recruiter.name}</p>
            <p className="text-gray-300">{recruiter.position}</p>
            <p className="px-4 py-1 rounded-3xl text-white bg-slate-600 border border-white">
              {recruiter.company}
            </p>
          </div>
        ))}
      </div>
      <p className="text-white text-center">
        Our experienced consultants specialise in logistics recruitment and are
        ready to help you find the perfect match for your career goals or hiring
        needs.
      </p>
    </div>
  );
};

export default Recruite;
