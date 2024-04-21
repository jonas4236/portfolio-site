import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import DetailsSlide from "./DetailsSlide";
import { dataProject as data } from "@/lib/data";
import DetailsSlideResponsive from "./DetailsSlideResponsive";

const Projects = () => {
  // for (let i: number = 0; i < data.length; i++) {
  //   <div className={`${i === 0 ? "" : "mt-16"}`}>
  //     <DetailsSlideResponsive project={data[i]} />
  //   </div>;
  // }

  return (
    <>
      <div
        id="#projects"
        className="w-max mx-auto flex flex-col items-center mb-8"
      >
        <h3 className="text-[24px] font-bold">
          <span className="text-[#07ABFD] text-[24px] mr-1">&lt;</span>
          Projects
          <span className="text-[#07ABFD] text-[24px] ml-2">/&gt;</span>
        </h3>
        <h1 className="xl:text-[36px] lg:text-[36px] md:text-[28px] sm:text-[28px] max-[639px]:text-[28px] font-bold">
          My Projects
        </h1>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full max-xl:hidden"
      >
        {data &&
          data.map((project) => (
            <SwiperSlide
              key={project.id}
              className="bg-[#151B2D] rounded-[18px]"
            >
              <div className="text-white flex flex-row gap-8">
                <DetailsSlide project={project} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="min-[1280px]:hidden rounded-[18px] mx-4">
        <div>
          {data &&
            data.map((project, index) => (
              <div key={index} className={`${index === 0 ? "" : "mt-16"}`}>
                <DetailsSlideResponsive project={project} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
