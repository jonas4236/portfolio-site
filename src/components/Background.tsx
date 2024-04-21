import { type ReactNode } from "react";

interface ChildrenType {
  children: ReactNode;
}

const Background = ({ children }: ChildrenType) => {
  return (
    <div className="h-full w-full bg-[#06080f] bg-dot-white/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-[#06080f] [mask-image:radial-gradient(ellipse_at_center,transparent_100%,white)]"></div>
      {children}
    </div>
  );
};

export default Background;
