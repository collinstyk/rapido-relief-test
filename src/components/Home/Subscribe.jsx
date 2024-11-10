import React from "react";
import Rock from "../../assets/images/Rock.svg";
import Grightarrow from "../../assets/images/Grightarrow.svg";

export default function Subscribe() {
  return (
    <div>
      <div className="w-full h-[2px] bg-green-dark mt-5 sm:mt-24"></div>
      <div className="py-9 bg-grey-vlight">
        <div className="w-11/12 mx-auto 2xl:max-w-[964px]">
          <div className="grid grid-cols-12 items-center gap-4 xl:gap-16">
            <div className="col-span-12 lg:col-span-4">
              <img src={Rock} className="w-[189px] h-[120px]" alt="" />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-4">
                  <input
                    type="text"
                    className="mt-3 sm:mt-0 w-full rounded-[50px] sm:rounded-none  sm:rounded-l-[50px] h-11 sm:h-[50px] py-4 border border-green-dark f-f-r text-base text-grey-dark pl-10 outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <input
                    type="text"
                    className="mt-3 sm:mt-0 w-full rounded-[50px] sm:rounded-none  h-11 sm:h-[50px] py-4 border border-green-dark f-f-r text-base text-grey-dark pl-10 outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <button className="mt-3 sm:mt-0 w-full h-11 sm:h-[50px] f-f-m text-xl md:text-5xl text-green bg-green-dark rounded-[50px] sm:rounded-none sm:rounded-r-[50px] ">
                    <ul className="inline-flex items-center space-x-3">
                      <li>SUBSCRIBE</li>
                      <li>
                        <img
                          src={Grightarrow}
                          className="w-[30px] h-[30px] "
                          alt=""
                        />
                      </li>
                    </ul>
                  </button>
                </div>
              </div>

              <div className="flex mt-[18px]">
                <div className="flex items-center h-5">
                  <input
                    id="helper-checkbox"
                    aria-describedby="helper-checkbox-text"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-white checked:bg-green-dark border border-green-dark rounded-[5px] subscribe-set"
                  />
                </div>

                <div className="ml-2 text-sm sm:text-base f-f-r text-red-vdark">
                  <label for="helper-checkbox">
                    {" "}
                    By checking this box, you confirm that you have read and are
                    agreeing to our terms of use regarding the storage of the
                    data submitted through this form.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
