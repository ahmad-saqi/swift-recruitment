import {  Clock, DollarSign, LocateIcon, Truck } from "lucide-react";

const jobList = [
  {
    id: 1,
    type: "Full-time",
    icon: Truck,
    title: "HGV Class 1 Driver",
    company: "Swift Logistics",
    location: "London, UK",
    salary: "40,000 - 50,000",
    description:
      "Experienced Class 1 driver required for long-distance deliveries across the UK.",
    tags: ["HGV", "Class 1", "Long Distance"],
  },
  {
    id: 2,
    type: "Part-time",
    icon: Truck,
    title: "Delivery Associate",
    company: "Urban Move",
    location: "Manchester, UK",
    salary: "25,000 - 30,000",
    description:
      "Join our growing delivery team with flexible hours and local routes.",
    tags: ["Delivery", "Local", "Flexible"],
  },
  {
    id: 3,
    type: "Contract",
    icon: Truck,
    title: "Warehouse Operative",
    company: "LogiCore Ltd.",
    location: "Birmingham, UK",
    salary: "30,000 - 35,000",
    description:
      "Seeking warehouse staff for a 6-month contract with potential for extension.",
    tags: ["Warehouse", "6-Month", "Immediate Start"],
  },
];

const Feature = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center px-4 lg:px-0 py-16 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 text-center">
        <p className="text-4xl font-semibold">Featured Opportunities</p>
        <p className="text-lg">
          Explore our latest job openings across multiple industries
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center gap-6 w-full">
        {jobList.map((job) => (
          <div
            key={job.id}
            className="flex flex-col gap-4 border items-center rounded-lg w-full  p-6"
          >
            <div className="flex justify-between items-center w-full">
              <p className="px-4 py-0.5 rounded-3xl bg-slate-600 text-white">
                {job.type}
              </p>
              <job.icon className="text-slate-600 size-5"/>
            </div>
            <div className="text-center">
              <p className="text-2xl">{job.title}</p>
              <p className="text-lg">{job.company}</p>
            </div>
            <div className="flex gap-2 w-full">
              <LocateIcon />
              <p>{job.location}</p>
            </div>
            <div className="flex gap-2 w-full">
              <Clock className="size-5" />
              <p className="flex items-center">
                <DollarSign className="size-4" /> {job.salary}
              </p>
            </div>
            <p className="text-center">{job.description}</p>
            <div className="w-full flex gap-2 truncate">
              {job.tags.map((tag, index) => (
                <p key={index} className="border rounded-full px-2.5">
                  {tag}
                </p>
              ))}
            </div>
            <button className="flex w-full justify-center bg-slate-600 text-white p-2 rounded-lg">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
