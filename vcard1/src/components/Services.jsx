import React from "react";
import Card from "./ui/Card";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";

function Services() {
  return (
    <Card className="m-6">
      <div className="w-full h-full flex flex-col gap-5">
        <div className="bg-slate-500 h-1/3">
          <h1 className="h1-white-sm md:h1-white p-2 xs:p-4 text-center ">
            Services
          </h1>
        </div>

        <div className=" flex flex-col gap-6 p-2 mt-8 xs:p-6">
          <span className="font-bold text-xl mb-8">My Services</span>

          <div className="flex md:flex-row flex-col gap-6">
            <div className="flex items-center flex-col gap-4">
              <div className="h-[32px] w-[32px]">
                <img src="facebook.png" alt="" />
              </div>
              <h3 className="h3-black">web design</h3>
              <p className="md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas quo consectetur adipisci unde vero ut natus facere
                voluptatum pariatur minima.
              </p>
            </div>

            <div className="flex items-center  flex-col gap-4">
              <div className="h-[32px] w-[32px]">
                <img src="facebook.png" alt="" />
              </div>
              <h3 className="h3-black">web design</h3>
              <p className="md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas quo consectetur adipisci unde vero ut natus facere
                voluptatum pariatur minima.
              </p>
            </div>

            <div className="flex items-center  flex-col gap-4">
              <div className="h-[32px] w-[32px]">
                <img src="facebook.png" alt="" />
              </div>
              <h3 className="h3-black">web design</h3>
              <p className="md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas quo consectetur adipisci unde vero ut natus facere
                voluptatum pariatur minima.
              </p>
            </div>

            <div className="flex items-center  flex-col gap-4">
              <div className="h-[32px] w-[32px] hover:">
                <img className="h-full w-full" src="facebook.png" alt="" />
              </div>
              <h3 className="h3-black">web design</h3>
              <p className="md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas quo consectetur adipisci unde vero ut natus facere
                voluptatum pariatur minima.
              </p>
            </div>
          </div>

          <span className="font-bold text-xl mb-8">My Clients</span>

          <div className="clients grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:justify-evenly gap-6 justify-center items-center">
            <div className=" h-24 sm:h-32">
              <img className="h-full" src="facebook.png" alt="" />
            </div>

            <div className=" h-24 sm:h-32">
              <img className="h-full" src="facebook.png" alt="" />
            </div>

            <div className=" h-24 sm:h-32">
              <img className="h-full" src="facebook.png" alt="" />
            </div>

            <div className=" h-24 sm:h-32">
              <img className="h-full" src="facebook.png" alt="" />
            </div>
          </div>
        </div>
        <h1 className="h3-black mb-8">Testimonials</h1>

        <div className="flex gap-4 overflow-scroll overflow-y-hidden">
          <Testimonials />
          <Testimonials />
          <Testimonials />
        </div>

        <h1 className="h3-black mb-8">Pricing</h1>
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          <Pricing />
          <Pricing />
          <Pricing />
        </div>
      </div>
    </Card>
  );
}

export default Services;
