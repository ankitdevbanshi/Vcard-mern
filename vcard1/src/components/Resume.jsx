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

function Resume() {
  let sx = {
    [`& .${timelineItemClasses.root}:before`]: {
      flex: 0,
      padding: 0,
    },
  };
  return (
    <Card>
      <section className="flex flex-col gap-4  md:m-12 mt-3">
        <div className="flex py-4 justify-center items-center h-1/5 bg-slate-700">
          <h1 className="text-center h1-white">Resume</h1>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-4">
          <h2 className="h2-black text-center">Education</h2>
          <h2 className="h2-black text-center row-start-3 row-end-3 md:row-start-auto md:row-end-auto">
            Experience
          </h2>

          <div className="">
            <LeftPositionedTimeline position="right" sx={sx} />
          </div>

          <div className="">
            <LeftPositionedTimeline position="right" sx={sx} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 justify-center ">
            <h2 className="text-center mb-3 h2-black">Design Skills</h2>

            <span>reactJs</span>
            <div className="h-4 w-full border border-black">
              <div className="w-1/2 bg-slate-700 h-full"></div>
            </div>
            <span>NodeJs</span>
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

            <span>reactJs</span>
            <div className="h-4 w-full border border-black">
              <div className="w-1/2  bg-slate-700 h-full"></div>
            </div>
            <span>NodeJs</span>
            <div className="h-4 w-full border border-black">
              <div className="w-3/4  bg-slate-700 h-full"></div>
            </div>
            <span>Html/Css</span>
            <div className="h-4 w-full border border-black">
              <div className="w-1/2  bg-slate-700 h-full"></div>
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
}

function LeftPositionedTimeline({ position, sx }) {
  let x = sx ? sx : "";
  return (
    <Timeline position={position} sx={x}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineData />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineData />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineData />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineData />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default Resume;
