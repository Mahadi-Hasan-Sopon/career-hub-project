// import React from 'react'
import "./jobDetails.css";
import bgImage from "../../assets/images/bg1.png";
import bgImageTop from "../../assets/images/bg2.png";
import { useLoaderData, useParams } from "react-router-dom";
import { TfiBag, TfiEmail, TfiLocationPin } from "react-icons/tfi";
import { BiDollarCircle, BiPhone } from "react-icons/bi";

const JobDetails = () => {
  const params = useParams();

  const fetchedData = useLoaderData();

  const job = fetchedData.filter((job) => job.id === parseInt(params.id));
  console.log(job[0]);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job[0];

  return (
    <div>
      <div className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] custom-bg">
        <h1 className="text-3xl text-center font-bold pt-16">Job Details</h1>
        <img src={bgImage} alt="" />
        <img className="bg-top" src={bgImageTop} alt="" />
      </div>

      <div className="job-details flex gap-10 m-6 md:m-10 lg:m-32">
        <div className="left md:w-2/3">
          <p className="text-base font-medium text-[#757575]">
            <span className="font-bold text-[#1A1919]">Job Description: </span>{" "}
            {job_description}
          </p>
          <p className="text-base font-medium text-[#757575] my-6">
            <span className="font-bold text-[#1A1919]">
              Job Responsibility:{" "}
            </span>
            {job_responsibility}
          </p>
          <p className="text-base font-bold text-[#1A1919]">
            Educational Requirements:
          </p>
          <p className="text-base text-[#757575] mt-4 mb-6">
            {educational_requirements}
          </p>
          <p className="text-base font-bold text-[#1A1919]">Experiences:</p>
          <p className="text-base text-[#757575] mt-4"> {experiences} </p>
        </div>

        <div className="right md:w-1/3 ">
          <div className="rounded-lg p-2 md:p-7 bg-gradient-to-b from-[#7e90fe1a] to-[#9873ff1a]">
            <h5 className="text-xl font-bold border-b border-[#9873ff9f] pb-6 mb-6">
              Job Details
            </h5>
            <div className="flex items-center gap-2 text-xl">
              <BiDollarCircle className="text-[#9873FF]" />
              <span className="font-bold">Salary:</span>
              <span className="text-[#757575]">{salary} (Per Month)</span>
            </div>
            <div className="flex items-center gap-2 text-xl mt-4 mb-8">
              <TfiBag className="text-[#9873FF]" />
              <span className="font-bold">Job Title:</span>
              <span className="text-[#757575]">{job_title}</span>
            </div>
            <div className="contact-info">
              <h5 className="text-xl font-bold border-b border-[#9873ff62] pb-6 mb-6">
                Contact Information
              </h5>

              <div className="flex items-center gap-2 text-xl">
                <BiPhone className="text-[#9873FF]" />
                <span className="font-bold">Phone:</span>
                <span className="text-[#757575]">
                  {contact_information.phone}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xl my-4">
                <TfiEmail className="text-[#9873FF]" />
                <span className="font-bold">Email:</span>
                <span className="text-[#757575]">
                  {contact_information.email}
                </span>
              </div>
              <div className="flex items-start gap-2 text-xl">
                <TfiLocationPin className="text-[#9873FF]" />
                <div>
                  <span className="font-bold">Address:</span>
                  <span className="text-[#757575]">
                    {contact_information.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="text-lg text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-6 py-3 text-center mt-6 w-full"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
