import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { dataAbout } from "@/lib/data";
import DetailsAbout from "./DetailsAbout";
import { PiStarFill } from "react-icons/pi";

const About = () => {
  return (
    <>
      <div
        id="#educations"
        className="w-max mx-auto mt-24 flex flex-col items-center mb-8"
      >
        <h3 className="text-[24px] font-bold">
          <span className="text-[#07ABFD] text-[24px] mr-1">&lt;</span>
          Educations
          <span className="text-[#07ABFD] text-[24px] ml-2">/&gt;</span>
        </h3>
        <h1 className="xl:text-[36px] lg:text-[36px] md:text-[28px] sm:text-[28px] max-[639px]:text-[28px] font-bold">
          My Educational History
        </h1>
      </div>
      <VerticalTimeline>
        {dataAbout.map((val) => (
          <DetailsAbout key={val.id} data={val} />
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<PiStarFill />}
        />
      </VerticalTimeline>
    </>
  );
};

export default About;
