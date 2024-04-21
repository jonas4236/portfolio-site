import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface AboutProps {
  title: string;
  subtitle: string;
  detail: string;
  date: string;
  icon: string;
}

interface dataAboutProps {
  data: AboutProps;
}

const DetailsAbout = ({ data }: dataAboutProps) => {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#151B2D", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #151B2D" }}
        date={data.date}
        iconStyle={{ background: "#fff", color: "#fff" }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={data.icon}
              alt={""}
              className="rounded-full w-[60px] h-[60px] object-contain"
            />
          </div>
        }
      >
        <h3 className="vertical-timeline-element-title">{data.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{data.subtitle}</h4>
        <p>{data.detail}</p>
      </VerticalTimelineElement>
    </>
  );
};

export default DetailsAbout;
