import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineData from "./TimelineData";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import Card from "./ui/Card";
// import Transitions from "./Transition";

function Resume() {
  let sx = {
    [`& .${timelineItemClasses.root}:before`]: {
      flex: 0,
      padding: 0,
    },
  };
  return (
  
      <Card>
        <section className="flex flex-col gap-4   mt-3">
          <div className="flex py-4 justify-center items-center h-1/5 bg-slate-700">
            <h1 className="text-center h1-white">Resume</h1>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-4">
            <h2 className="h2-black text-center">Education</h2>
            <h2 className="h2-black text-center row-start-3 row-end-3 md:row-start-auto md:row-end-auto">
              Experience
            </h2>

            <div className="">
              <LeftPositionedTimeline
                position="right"
                sx={sx}
                school={true}
                data={[
                  { course: "BCA", date: "2022", des: "" },
                  { course: "12th", date: "2018", des: "" },
                ]}
              />
            </div>

            <div className="">
              <LeftPositionedTimeline
                position="right"
                school={false}
                sx={sx}
                data={[
                  {
                    company: "Nextgen Samvaad Pvt. Limited",
                    date: "23 Jan 2022",
                    role: "web developer",
                  },
                ]}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 justify-center ">
              <h2 className="text-center mb-3 h2-black">Design Skills</h2>

              <span>reactJs</span>
              <div className="h-4 w-full border border-black">
                <div className="w-1/2 bg-slate-700 h-full"></div>
              </div>
              <span>Tailwind Css</span>
              <div className="h-4 w-full border border-black">
                <div className="w-3/4  bg-slate-700 h-full"></div>
              </div>
              <span>Html/Css</span>
              <div className="h-4 w-full border border-black">
                <div className="w-1/2  bg-slate-700 h-full"></div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="mb-3 h2-black text-center">coding Skills</h2>

              <span>NodeJs</span>
              <div className="h-4 w-full border border-black">
                <div className="w-1/2  bg-slate-700 h-full"></div>
              </div>
              <span>Java</span>
              <div className="h-4 w-full border border-black">
                <div className="w-1/2  bg-slate-700 h-full"></div>
              </div>
            </div>
          </div>
        </section>
      </Card>
   
  );
}

function LeftPositionedTimeline({ position, sx, data, school }) {
  let x = sx ? sx : "";

  if (school) {
    let school = [
      [
        "BCA",
        "2022",
        "I am graduated from Microtek College in Varanasi in 2022, where I have successfully completed a BCA course that laid the foundation for my journey into the world of technology.",
        "73%",
      ],
      [
        "12th (Science)",
        "2018",
        "I have completed 12th from Bengali Tola Inter College, Varanasi.",
        "65.5%",
      ],
    ];

    return (
      <Timeline position={position} sx={x}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className=" flex flex-col gap-2 card">
              <h3 className="h3-black">Graduation</h3>
              <span className="text-gray-500">BCA (2022)</span>
              <span className="text-gray-500">percantage 73%</span>
              <p className="md:text-xl">
                I am graduated from Microtek College in Varanasi in 2022, where
                I have successfully completed a BCA course that laid the
                foundation for my journey into the world of technology.
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className=" flex flex-col gap-2 card">
              <h3 className="h3-black">12th</h3>
              <span className="text-gray-500">Science (2018)</span>
              <span className="text-gray-500">percantage 65.5%</span>
              <p className="md:text-xl">
                I have completed 12th from Bengali Tola Inter College, Varanasi.
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  } else {
    return (
      <Timeline position={position} sx={x}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className=" flex flex-col gap-2 card">
              <h3 className="h3-black">Company</h3>
              <span className="text-gray-500">
                Nextgen Samvaad Pvt. Limited
              </span>
              <p className="md:text-xl">
                I have undertook an internship at NextGen Samvaad Pvt. Ltd., a
                prominent player in the tech industry. This experience provided
                me with valuable insights into real-world application
                development, honing my skills and enriching my perspective on
                the industry. I worked on technology like : nodeJs, reactJs,
                Java.
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  }
}

export default Resume;
