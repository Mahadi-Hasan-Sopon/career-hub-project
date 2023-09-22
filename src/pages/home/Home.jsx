// import React from 'react'

import CategoryList from "../../components/categoryList/CategoryList";
import FeaturedJobs from "../../components/featuredJobs/FeaturedJobs";

function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-32 shadow-sm bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d]">
        <div className="left-component lg:w-1/3 md:w-1/2">
          <h1 className="text-7xl font-bold">
            One Step Closer To Your{" "}
            <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent	">
              Dream Job
            </span>
          </h1>
          <p className="text-lg font-medium text-[#757575] my-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button
            type="button"
            className="text-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-6 py-3 text-center mr-3 md:mr-0"
          >
            Get Started
          </button>
        </div>
        <div className="right-img">
          <img src="/src/assets/images/user.png" alt="" />
        </div>
      </div>
      <div className="my-20 mx-32">
        <CategoryList />
      </div>
      <div>
        <FeaturedJobs />
      </div>
    </div>
  );
}

export default Home;
