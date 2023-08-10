import React from "react";
import styles from "../style";
import { discount, robot, dropbox, photo, mypic } from "../assets";
import insta from "../assets/instagram.svg";
import github from "../assets/icons8-github.svg";
import facebook from "../assets/facebook.svg";
import Transitions from "./Transition";

function Hero() {
  return (
    <Transitions>
      <section
        id="home"
        className="overflow-hidden flex flex-col rounded-lg shadow-sm pb-7 pt-0 gap-5"
      >
        <div className="flex flex-col gap-3 md:flex-row flex-1 bg-slate-600 justify-center items-center ">
          <div className="flex  justify-center  flex-1">
            <img className=" max-h-96" src={mypic} alt="" />
          </div>
          <div className="flex flex-col p-3 justify-center items-center  flex-1 gap-4">
            <h1 className="h1-white">Ankit</h1>
            <h4 className="h4-gray">developer</h4>
            <div className="flex gap-6">
              <a
                className="h-[32px] w-[32px] cursor-pointer rounded-full"
                href="https://instagram.com/ankitdevbanshi?igshid=ZGUzMzM3NWJiOQ=="
                target="_blank"
              >
                <img className="h-full w-full" src={insta} alt="" />
              </a>
              <a
                className="h-[32px] w-[32px] rounded-full cursor-pointer"
                href="https://www.facebook.com/ankit.devbanshi.7"
                target="_blank"
              >
                <img className="h-full w-full" src={facebook} alt="" />
              </a>
              <a
                className="h-[32px] w-[32px] rounded-full cursor-pointer"
                href="https://github.com/ankitdevbanshi?tab=repositories"
                target="_blank"
              >
                <img className="h-full w-full" src={github} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 px-4 justify-around">
          <div className="flex flex-1 flex-col items-center gap-5">
            <h2 className="h2-black">About Me</h2>
            <p className="text-black m-12 text-base leading-relaxed">
              Meet Ankit Kumar Devbanshi – a talented and skilled developer with
              a passion for creating digital experiences that captivate and
              engage. Ankit graduated from Microtek College in Varanasi in 2022,
              where he successfully completed a BCA course that laid the
              foundation for his journey into the world of technology. Ankit's
              expertise spans a wide range of domains, with a special focus on
              web and mobile application development. His proficiency in Java
              programming language serves as the backbone for his innovative
              creations. With an innate understanding of the intricacies of
              programming, Ankit has harnessed the power of Java to craft
              intricate and efficient solutions that power the digital
              landscape. As a versatile developer, Ankit has left his mark in
              various arenas. His mastery of React JS and Node JS showcases his
              ability to seamlessly merge creativity with technology, resulting
              in visually stunning and highly functional websites. Ankit's
              creations aren't limited to the web – he's also ventured into the
              realm of Android app development, where his imaginative ideas have
              taken shape as the app "Astrophile." This app stands as a
              testament to Ankit's dedication, combining his technical prowess
              with a deep-seated fascination for the cosmos. Ankit's portfolio
              isn't just a collection of projects; it's a reflection of his
              commitment to excellence. Each website and app he develops is a
              testament to his meticulous attention to detail and his unwavering
              passion for his craft. Ankit's creations don't just serve a
              purpose; they inspire and connect people in meaningful ways. With
              a dynamic skill set and an unquenchable thirst for knowledge,
              Ankit Kumar Devbanshi continues to push the boundaries of
              technology. As he ventures further into the digital landscape, we
              can only anticipate more remarkable innovations from this talented
              developer.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2">
            <span className="span-black-lg">name</span>
            <span className="span-black-lg">Ankit Kumar Devbanshi</span>
            <span className="span-black-lg">city</span>
            <span className="span-black-lg">varanasi</span>
            <span className="span-black-lg">email</span>
            <span className="text-blue-500">ankitdevbanshi4@mail.com</span>
            <span className="span-black-lg">phone</span>
            <span className="span-black-lg">9935014821</span>
            <span className="span-black-lg">Education</span>
            <span className="span-black-lg">B.C.A (2022)</span>
          </div>
        </div>
      </section>
    </Transitions>
  );
}

export default Hero;
