import ImagePort from "../assets/logo-port.png";
import { RiGithubLine } from "react-icons/ri";
import { MdOutgoingMail } from "react-icons/md";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const words = `Junior FullStack Web Developer based in Thailand`;
  return (
    <div id="#home" className="h-[110vh]">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <motion.div
          className="box flex flex-col items-center "
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -80, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="size-72 object-contain rounded-full"
            src={ImagePort}
            alt="Image_Portfolio"
          />
          <h1 className="xl:text-[30px] lg:text-[30px] md:text-[28px] sm:text-[26px] max-[639px]:text-[26px] fount-bold mt-[2.5rem] flex">
            Hi, I'm Boss{" "}
            <p className="animate-wiggle-more animate-infinite animate-duration-1000 animate-ease-in-out">
              👋
            </p>
          </h1>
        </motion.div>
        <span className="">
          <TextGenerateEffect words={words} />
        </span>
        <motion.div
          className="box max-[639px]:px-2"
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 120, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="mt-[0.5rem] mb-4 xl:w-[800px] lg:w-[800px] sm:w-full xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] max-[639px]:text-[16px] text-center">
            My name is Boss aka Jonas, a Junior FullStack Web Developer and my
            goal is to advance my career. I like doing projects and public them
            to people so I can both gain skills and have other juniors train
            with me.
          </p>
          <div className="flex items-center justify-center">
            <Link to={"/#contact"}>
              <button className="inline-flex mr-8 h-12 animate-shimmer items-center justify-center rounded-md border-2 outline-none border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-white/50">
                <MdOutgoingMail className="mr-2" size={30} />
                Contact Me
              </button>
            </Link>
            <Link to={"https://github.com/jonas4236"}>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border-2 outline-none border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-white/50">
                <RiGithubLine className="mr-2" size={30} />
                My GitHub
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
