import React from "react";

import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div>
      <div className=" my-10 text-2xl text-center pt-8 ">
        <h2>Contact us</h2>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-gray-600 text-xl">Our Store</p>
          <p className="text-xl font-light">
            54709 Willms Station Suite 350, Washington, USA
          </p>
          <p className="text-xl font-light">Tel: (415) 555-0132</p>
          <p className="text-sm font-light">Email: admin@Prescripto.com</p>
          <p className="text-2xl text-gray-600">Careers at Prescripto</p>
          <p className="text-xl font-extralight">
            Learn more about our teams and job openings.
          </p>

          <button className="px-4 py-3 border-gray-300 border-2  text-black hover:bg-black hover:text-white transition-all duration-300 ">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
