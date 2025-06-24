import Girl from "../assets/img/girl.jpg"
const ChoseUs = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center px-4 lg:px-0 py-16 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-4 text-center">
        <p className="text-4xl font-semibold">Why Choose Swift Recruit?</p>
        <p className="text-lg">
          We're not just another recruitment agency. We're your career partners.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div>
          <img src={Girl} alt="" className="w-2xl rounded-lg h-72" />
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <p className="text-2xl">Industry Expertise</p>
            <p className="text-lg">
              45+ years of specialized experience in logistics and transport
              recruitment across the UK.
            </p>
          </div>
          <div>
            <p className="text-2xl">Proven Success Rate</p>
            <p className="text-lg">
              98% success rate in placing candidates with over 1,200+ partner
              companies nationwide.
            </p>
          </div>
          <div>
            <p className="text-2xl">Personal Service</p>
            <p className="text-lg">
              Dedicated consultants who understand your career goals and
              business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoseUs