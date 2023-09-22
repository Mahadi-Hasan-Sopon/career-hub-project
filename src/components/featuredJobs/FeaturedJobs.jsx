import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { GoLocation } from "react-icons/go";
import { BiDollarCircle } from "react-icons/bi";

const FeaturedJobs = () => {
  const [isShowAll, setIsShowAll] = useState(false);

  const fetchedData = useLoaderData();

  const dataToDisplay =
    fetchedData.length > 6 && !isShowAll
      ? fetchedData.slice(0, 6)
      : fetchedData;

  return (
    <div className="mx-8 md:mx-16 lg:mx-32 my-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Featured Jobs
      </h1>
      <p className="text base font-medium text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 lg:gap-8 my-10">
        {dataToDisplay?.map((job) => (
          <div
            key={job.id}
            className="job flex flex-col border border-[#E8E8E8] shadow-sm rounded-lg p-6 lg:p-10"
          >
            <img className="h-24 md:h-32 w-full" src={job.logo} alt="" />
            <div>
              <h2 className="text-2xl font-bold mt-6">{job.job_title}</h2>
              <p className="text-xl font-semibold text-[#757575] mt-2 mb-4">
                {job.company_name}
              </p>
              <div className="buttons flex gap-8">
                <button className="text-base font-bold text-[#9873FF] border border-[#7E90FE] px-5 py-2 rounded">
                  {job.remote_or_onsite}
                </button>
                <button className="text-base font-bold text-[#9873FF] border border-[#7E90FE] px-5 py-2 rounded">
                  {job.job_type}
                </button>
              </div>
              <div className="location-salary flex flex-wrap items-center gap-6 my-5 text-[#757575]">
                <div className="flex items-center gap-1 text-xl">
                  <GoLocation />
                  {job.location}
                </div>
                <div className="flex items-center gap-1 text-xl">
                  <BiDollarCircle />
                  {job.salary}
                </div>
              </div>
            </div>
            <div>
              <Link to={`/job/${job.id}`}>
                <button
                  type="button"
                  className="text-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-6 py-3 text-center mr-3 md:mr-0 block"
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setIsShowAll(!isShowAll)}
          type="button"
          className="text-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-6 py-3 text-center mr-3 md:mr-0"
        >
          {isShowAll ? "Show Less Jobs" : "Show All Jobs"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
