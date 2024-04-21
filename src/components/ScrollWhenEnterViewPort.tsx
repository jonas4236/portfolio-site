import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollViewPortProps {
  children: ReactNode;
  position: string;
}

const ScrollWhenEnterViewPort = ({
  children,
  position,
}: ScrollViewPortProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isUserInViewPort = useInView(ref, { once: true });
  //   console.log("REF:", ref);
  return (
    <section ref={ref}>
      <div
        style={{
          transform: isUserInViewPort ? "none" : `translateX(${position})`,
          opacity: isUserInViewPort ? 1 : 0,
          transition: "all 1s",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default ScrollWhenEnterViewPort;
