import React from "react";
import styles from "../style";
import { discount, robot, dropbox, photo } from "../assets";
import insta from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";

function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden flex flex-col rounded-lg shadow-sm pb-7 pt-0 gap-5"
    >
      <div className="flex flex-col gap-3 md:flex-row flex-1 bg-slate-600 justify-center items-center ">
        <div className="flex  justify-center  flex-1">
          <img className="" src={photo} alt="" />
        </div>
        <div className="flex flex-col p-3 justify-center items-center  flex-1 gap-4">
          <h1 className="h1-white">Ankit</h1>
          <h4 className="h4-gray">developer</h4>
          <div className="flex gap-6">
            <div className="h-[32px] w-[32px] cursor-pointer rounded-full">
              <img className="h-full w-full" src={insta} alt="" />
            </div>
            <div className="h-[32px] w-[32px] rounded-full cursor-pointer">
              <img className="h-full w-full" src={facebook} alt="" />
            </div>
            <div className="h-[32px] w-[32px] rounded-full cursor-pointer">
              <img className="h-full w-full" src={dropbox} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 px-4 justify-around">
        <div className="flex flex-1 flex-col items-center gap-5">
          <h2 className="h2-black">About Me</h2>
          <p className="text-black text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nulla
            velit, minima optio amet consectetur hic libero perspiciatis facilis
            suscipit obcaecati aspernatur, nihil expedita repellendus!Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. In nulla velit,
            minima optio amet consectetur hic libero perspiciatis facilis
            suscipit obcaecati aspernatur, nihil expedita repellendus!
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2">
          <span className="span-black-lg">name</span>
          <span className="span-black-lg">Ankit</span>
          <span className="span-black-lg">city</span>
          <span className="span-black-lg">varanasi</span>
          <span className="span-black-lg">email</span>
          <span className="text-blue-500">ankit@mail.com</span>
          <span className="span-black-lg">phone</span>
          <span className="span-black-lg">993503</span>
          <span className="span-black-lg">freelance</span>
          <span className="span-black-lg">available</span>
          <span className="span-black-lg">name</span>
          <span className="span-black-lg">name</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
