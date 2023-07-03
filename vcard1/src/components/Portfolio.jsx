import React, { useEffect, useState } from "react";
import Project from "./Project";
import { obj } from "../projectData";
import { Link } from "react-router-dom";

function Portfolio() {
  const [anim, setAnim] = useState("animate-bounce");

  useEffect(() => {
    setTimeout(() => {
      setAnim("");
    }, 500);
  }, []);
  const [projectVisible, setProjectVisible] = useState(false);

  const [projectList, setProjectList] = useState([]);

  const arr = ["all", "coding", "design", "logo"];
  let data = [];
  data[0] = [
    "cpp",
    "java",
    "javascript",
    "dribble",
    "ui/ux,",
    "web design",
    "round logo",
    "photoshop",
    "canva",
  ];
  data[1] = ["cpp", "java,", "javascript"];
  data[2] = ["dribble", "ui/ux,", "web design"];
  data[3] = ["round logo", "photoshop", "canva"];

  const clickHandler = (it) => {
    setProjectList(obj[it]);
    setProjectVisible(true);
  };

  const [active, setActive] = useState(0);
  //   console.log(data[active]);

  return !projectVisible ? (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="h1-gray mt-8"> Portfolio</h1>

      <div>
        <nav>
          <ul className="list-none flex gap-2">
            {arr.map((it, i) => {
              return (
                <li
                  onClick={() => {
                    setActive(i);
                  }}
                  key={i}
                  className={`p-2 ${active == i ? "active" : ""}`}
                >
                  {it}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div
        className={`${anim} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 gap-4 justify-center items-center`}
      >
        {data[active].map((it, i) => {
          return (
            <Link to={`/portfolio/${it}`}>
              <div
                onClick={() => {
                  clickHandler(it);
                }}
                key={i}
                className="justify-self-center border shadow-xl rounded-lg border-gray-400 p-4  flex gap-3 flex-col items-center"
              >
                <div className="flex-1">
                  <img src="card.png" alt="" />
                </div>
                <div className="flex-1">
                  <h3 className="h3-gray">{it}</h3>
                  <span>Theme</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <Project list={projectList} setProjectVisible={setProjectVisible} />
  );
}

export default Portfolio;
