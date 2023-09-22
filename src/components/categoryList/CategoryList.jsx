// import React from 'react'

import accounts from "../../assets/images/accounts.svg";
import business from "../../assets/images/business.svg";
import chip from "../../assets/images/chip.svg";
import social from "../../assets/images/social-media.svg";

function CategoryList() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Job Category List</h1>
      <p className="text base font-medium text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="categories grid lg:grid-cols-4 md:grid-cols-2 justify-center md:justify-between items-center gap-7 my-14">
        {/* category 1 */}
        <div className="category bg-[#9873ff0d] p-10 rounded-lg">
          <div className="p-4 bg-[#9873ff0d] inline-block rounded-lg">
            <img src={accounts} alt="" />
          </div>
          <h6 className="text-lg font-bold mt-4 mb-1">Account & Finance</h6>
          <p className="text-base font-medium text-[#A3A3A3]">
            300 Jobs Available
          </p>
        </div>
        {/* category 2 */}
        <div className="category bg-[#9873ff0d] p-10 rounded-lg">
          <div className="p-4 bg-[#9873ff0d] inline-block rounded-lg">
            <img src={business} alt="" />
          </div>
          <h6 className="text-lg font-bold mt-4 mb-1">Creative Design</h6>
          <p className="text-base font-medium text-[#A3A3A3]">
            100+ Jobs Available
          </p>
        </div>
        {/* category 3 */}
        <div className="category bg-[#9873ff0d] p-10 rounded-lg">
          <div className="p-4 bg-[#9873ff0d] inline-block rounded-lg">
            <img src={social} alt="" />
          </div>
          <h6 className="text-lg font-bold mt-4 mb-1">Marketing & Sales</h6>
          <p className="text-base font-medium text-[#A3A3A3]">
            150 Jobs Available
          </p>
        </div>
        {/* category 4 */}
        <div className="category bg-[#9873ff0d] p-10 rounded-lg">
          <div className="p-4 bg-[#9873ff0d] inline-block rounded-lg">
            <img src={chip} alt="" />
          </div>
          <h6 className="text-lg font-bold mt-4 mb-1">Engineering Job</h6>
          <p className="text-base font-medium text-[#A3A3A3]">
            225 Jobs Available
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
