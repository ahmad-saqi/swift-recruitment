
const jobList = [
  {
    id: 1,

    title: "Salary Trends 2024",
    company:
      "HGV driver salaries increased by 15% year-on-year across the UK market.",
  },
  {
    id: 2,

    title: "Skills in Demand",
    company:
      "Digital logistics skills and sustainability knowledge are highly sought after.",
  },
  {
    id: 3,

    title: "Market Outlook",
    company:
      "Strong growth expected in e-commerce logistics and last-mile delivery sectors.",
  },
];

const Trends = () => {
  return (
    <div className="bg-slate-700">
      <div className="flex flex-col gap-10 justify-center items-center py-16 max-w-screen-xl px-4 lg:px-0 mx-auto text-white ">
        <div className="flex flex-col gap-6 text-center">
          <p className="text-4xl font-semibold">Industry Insights & Trends</p>
          <p className="text-lg max-w-2xl text-center">
            Stay ahead with the latest logistics industry trends, salary
            insights, and career advice from our expert consultants.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  justify-center items-center gap-6 w-full max-w-6xl">
          {jobList.map((job) => (
            <div
              key={job.id}
              className="flex flex-col gap-4 border items-center rounded-lg w-full  p-6 backdrop-blur-2xl bg-slate-600/50"
            >
              <div className="text-center space-y-2">
                <p className="text-2xl">{job.title}</p>
                <p className="text-md">{job.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trends;
