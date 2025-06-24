import { Briefcase, Building, Truck, Users } from "lucide-react"

const jobList = [
  {
    id: 1,
    icon: Truck,
    title: "HGV & Transport",
    company:
      "Specialized recruitment for Class 1 & 2 drivers, transport managers, and logistics coordinators.",
  },
  {
    id: 2,
    icon: Building,
    title: "Warehouse & Distribution",
    company:
      "Finding skilled warehouse operatives, supervisors, and distribution specialists for your operations.",
  },
  {
    id: 3,
    icon: Users ,
    title: "Temporary Staffing",
    company:
      "Flexible staffing solutions for peak seasons, covering shifts, and project-based requirements..",
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Permanent Placement",
    company:
      "Long-term recruitment solutions for permanent positions across all levels of your organization.",
  },
];

const Recruitments = () => {
  return (
    <div className="flex flex-col gap-10 justify-center px-4 lg:px-0 items-center py-16  mx-auto">
      <div className="flex flex-col gap-6 text-center">
        <p className="text-4xl font-semibold">Our Recruitment Services</p>
        <p className="text-lg max-w-2xl text-center">
          Comprehensive recruitment solutions for both candidates and employers
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-6 w-full max-w-screen-xl">
        {jobList.map((job) => (
          <div
            key={job.id}
            className="flex flex-col gap-4 border items-center rounded-lg w-full  p-6 "
          >
            <job.icon className="text-green-700 size-12" />
            <div className="text-center space-y-2">
              <p className="text-2xl">{job.title}</p>
              <p className="text-md">{job.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruitments;
