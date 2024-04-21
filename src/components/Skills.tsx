import HTML from "../assets/htmlicon.svg";
import CSS from "../assets/cssicon.svg";
import JS from "../assets/javascripticon.svg";
import TS from "../assets/typescripticon.svg";
import REACT from "../assets/reacticon.svg";
import NEXT from "../assets/nextjsiconwhite.svg";
import NODE from "../assets/nodejsicon.svg";
import TAILWIND from "../assets/tailwindicon.svg";
import EX from "../assets/expressiconwhite.svg";
import SASS from "../assets/sassicon.svg";
import FIGMA from "../assets/figmaicon.svg";
import PS from "../assets/PS.png";
import VegasPro from "../assets/Vegas_Pro_19.svg.png";
import MySQL from "../assets/mysql-official.svg";
import Strapi from "../assets/strapi-icon-svgrepo-com.svg";
import ScrollWhenEnterViewPort from "./ScrollWhenEnterViewPort";

const Skills = () => {
  return (
    <>
      <div id="#skills" className="w-max mx-auto flex flex-col items-center">
        <h3 className="text-[24px] font-bold">
          <span className="text-[#07ABFD] text-[24px] mr-1">&lt;</span>
          Skills
          <span className="text-[#07ABFD] text-[24px] ml-2">/&gt;</span>
        </h3>
        <h1 className="xl:text-[36px] lg:text-[36px] md:text-[28px] sm:text-[28px] max-[639px]:text-[28px] font-bold">My TechStack and Skills</h1>
      </div>
      <div className="2xl:w-[1500px] lg:w-full md:w-full sm:w-full mx-auto mt-12">
        <div className="xl:grid lg:grid md:flex md:flex-col md:justify-center md:items-center grid-cols-5 2xl:w-[1500px] lg:w-full md:w-full sm:w-full xl:mb-0 lg:mb-0 md:mb-16 sm:mb-16 max-[639px]:mb-16 xl:px-0 lg:px-0 md:px-0 sm:px-4 max-[639px]:px-4 max-[639px]:w-full grid-rows-5 gap-4 object-contain">
          <div className="col-span-2 row-span-3 xl:w-[600px] lg:w-[600px] md:w-[600px] sm:w-full h-full object-contain">
            <ScrollWhenEnterViewPort position="-200px">
              <div className="bg-[#151B2D] p-4 rounded-lg">
                <div className="mb-4 bg-[#151B2D] rounded-lg">
                  <h3 className="text-[24px] text-center py-2 font-bold">
                    <span className="text-[#07ABFD] text-[24px] mr-1">
                      &lt;
                    </span>
                    WebDevelopment
                    <span className="text-[#07ABFD] text-[24px] ml-2">
                      /&gt;
                    </span>
                  </h3>
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 max-[639px]:grid-cols-3 gap-2 max-[520px]:grid-cols-2">
                  <div className="w-max mx-auto border-2 border-[#DB4444] h-[142px] rounded-xl flex">
                    <img
                      className="py-4 px-2 object-contain"
                      width={130}
                      src={HTML}
                      alt=""
                    />
                  </div>
                  <div className="w-max mx-auto border-2 border-[#00FFFF] h-[142px] rounded-xl flex">
                    <img
                      className="py-4 px-2 object-contain"
                      width={130}
                      src={CSS}
                      alt=""
                    />
                  </div>
                  <div className="w-max mx-auto border-2 border-[#FFD700] h-[142px] rounded-xl flex">
                    <img
                      className="p-4 object-contain"
                      width={130}
                      src={JS}
                      alt=""
                    />
                  </div>
                  <div className="w-max mx-auto border-2 border-[#1E90FF] h-[142px] rounded-xl flex">
                    <img
                      className="p-4 object-contain"
                      width={130}
                      src={TS}
                      alt=""
                    />
                  </div>
                  <div className="w-max mx-auto border-2 border-[#00BFFF] h-[142px] rounded-xl flex">
                    <img
                      className="p-4 object-contain"
                      width={130}
                      src={REACT}
                      alt=""
                    />
                  </div>
                  <div className="w-max mx-auto border-2 border-[#F8F8FF] h-[142px] rounded-xl flex">
                    <img
                      className="p-4 object-contain"
                      width={130}
                      src={NEXT}
                      alt=""
                    />
                  </div>
                  <div className="w-max mx-auto border-2 border-[#228B22] h-[142px] rounded-xl flex">
                    <img
                      className="p-4 object-contain"
                      width={130}
                      src={NODE}
                      alt=""
                    />
                  </div>
                  <div className="w-max mx-auto border-2 border-[#00CED1] h-[142px] rounded-xl flex">
                    <img
                      className="p-4 object-contain"
                      width={130}
                      src={TAILWIND}
                      alt=""
                    />
                  </div>
                  <div className="w-max mx-auto border-2 border-[#F8F8FF] h-[142px] rounded-xl flex">
                    <img
                      className="p-4 object-contain"
                      width={130}
                      src={EX}
                      alt=""
                    />
                  </div>
                  <div className="w-max mx-auto border-2 border-[#FF1493] h-[142px] rounded-xl flex">
                    <img
                      className="p-4 object-contain"
                      width={130}
                      src={SASS}
                      alt=""
                    />
                  </div>
                  <div className="w-max mx-auto border-2 border-[#294599] h-[142px] rounded-xl flex">
                    <img
                      className="p-4 object-contain"
                      width={130}
                      src={MySQL}
                      alt=""
                    />
                  </div>
                  <div className="w-max mx-auto border-2 border-[#512bb9] h-[142px] rounded-xl flex">
                    <img
                      className="p-4 object-contain"
                      width={130}
                      src={Strapi}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </ScrollWhenEnterViewPort>
          </div>
          <div className="col-span-2 row-span-3 col-start-4 2xl:w-[500px] xl:w-full lg:w-full row-start-3 h-max">
            <ScrollWhenEnterViewPort position="200px">
            <div className="bg-[#151B2D] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-4 max-[639px]:mt-4 p-4 rounded-lg">
              <div className="mb-4">
                <h3 className="text-[24px] text-center py-2 font-bold">
                  <span className="text-[#07ABFD] text-[24px] mr-1">&lt;</span>
                  Tools
                  <span className="text-[#07ABFD] text-[24px] ml-2">/&gt;</span>
                </h3>
              </div>
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 max-[639px]:grid-cols- min-[540px]:grid-cols-2 gap-2 p-4 object-contain">
                <div className="mx-auto border-2 border-[#48D1CC] w-[130px] h-[142px] rounded-xl flex">
                  <img
                    className="p-8 w-full object-contain"
                    src={FIGMA}
                    alt=""
                  />
                </div>
                <div className="w-max mx-auto border-2 border-[#0B4562] xl:h-[142px] rounded-xl flex">
                  <img
                    className="p-4 object-contain"
                    width={130}
                    src={PS}
                    alt=""
                  />
                </div>
                <div className="w-max mx-auto border-2 border-[#1E90FF] xl:h-[142px] rounded-xl flex">
                  <img
                    className="p-4 object-contain"
                    width={130}
                    src={VegasPro}
                    alt=""
                  />
                </div>
              </div>
            </div>
            </ScrollWhenEnterViewPort>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
