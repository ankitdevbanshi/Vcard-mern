import { obj } from "../projectData";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import card from "../assets/card.png";
import arrow from "../assets/arrow.png";
import close from "../assets/close.png";

function Project() {
  let params = useParams();

  // console.log();

  const [anim, setAnim] = useState("animate-bounce");
  let list = obj[params.projectname];
  const [selected, setSelected] = useState(list.length > 0 ? 0 : null);

  useEffect(() => {
    setAnim("animate-bounce");

    setTimeout(() => {
      setAnim("");
    }, 500);
  }, [selected]);

  const clickhandler = (flag) => {
    if (flag == "back") {
      setSelected(selected - 1);
    }

    if (flag == "forward") {
      setSelected(selected + 1);
    }
  };

  return selected != null ? (
    <div className="flex  gap-4 p-4 py-8 flex-col items-center">
      <div className="mt-8 flex gap-3">
        <button
          className={`${
            selected == 0 ? "hidden" : ""
          } bg-gray-300  hover:bg-gray-300 hover:text-gray-500"
           rounded-full overflow-hidden`}
        >
          <img
            onClick={() => {
              clickhandler("back");
            }}
            className="-rotate-180 p-1 rounded-full cursor-pointer overflow-hidden w-8"
            src={arrow}
            alt=""
          />
        </button>

        <Link to={"/portfolio"}>
          <img
            onClick={() => {
              clickhandler("close");
            }}
            className="bg-gray-100 p-1 rounded-full cursor-pointer overflow-hidden w-8"
            src={close}
            alt=""
          />
        </Link>
        <img
          onClick={() => {
            clickhandler("forward");
          }}
          className={`rounded-full bg-gray-100 p-1 cursor-pointer overflow-hidden w-8 ${
            selected != list.length - 1 ? "" : "hidden"
          } `}
          src={arrow}
          alt=""
        />
      </div>

      <img
        className={`${anim} flex-grow-0 shadow-xl rounded-2xl border border-gray-300 p-2 w-3/4 sm:h-64 object-contain sm:w-1/2 `}
        src={card}
        alt=""
      />
      <h3 className="h3-gray">about the project</h3>
      <h4 className="h4-gray">{list[selected]}</h4>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt
        delectus maiores ullam omnis alias. Rem maiores, repellat neque alias
        odit deserunt eveniet dolorem expedita itaque sunt sit? Omnis,
        repellendus!
      </p>
      <h4 className="h4-gray">Made for</h4>
      <button className="text-white rounded px-4 py-2 font-bold bg-gray-600">
        Launch Project
      </button>
    </div>
  ) : (
    <h3 className="n3-gray">No project found</h3>
  );
}

export default Project;
