import { FC, useEffect, useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { SectionName, navLinks } from "@/lib/data";
import ScrollHashViewPort from "./ScrollHashViewPort";

interface CustomNavLinkType {
  linkTo: string;
  children: ReactNode;
  linkText?: string;
}

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [isMobileNav, setIsMobileNav] = useState<boolean>(false);

  const CustomNavLink: FC<CustomNavLinkType> = ({
    linkTo,
    children,
    linkText,
  }) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const isLinkActive = isHover || linkText === activeSection;

    const linkCSS = isLinkActive
      ? "transition-all"
      : "opacity-20 transition-all";

    const leftArrow = isLinkActive && (
      <span className="text-[#07ABFD] text-[20px] font-medium absolute -left-4 top-0 max-[1024px]:hidden">
        &lt;
      </span>
    );

    const rightArrow = isLinkActive && (
      <span className="text-[#07ABFD] text-[20px] font-medium absolute top-0 -right-6 max-[1024px]:hidden">
        /&gt;
      </span>
    );

    return (
      <NavLink
        to={linkTo}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`relative ${linkCSS}`}
      >
        {leftArrow}
        {children}
        {rightArrow}
      </NavLink>
    );
  };

  useEffect(() => {
    const handleResponsiveNavBar = () => {
      if (window.innerWidth <= 1024) {
        setIsMobileNav(true);
      } else {
        setIsMobileNav(false);
      }
    };

    handleResponsiveNavBar();

    window.addEventListener("resize", handleResponsiveNavBar);

    return () => window.removeEventListener("resize", handleResponsiveNavBar);
  }, []);

  return (
    <>
      <ScrollHashViewPort />
      <nav className="w-max mx-auto flex fixed left-0 right-0 top-8 p-4 gap-16 border-2 border-white rounded-full bg-[#151B2D] z-[99] xl:flex px-16 lg:flex md:hidden sm:hidden max-[639px]:hidden">
        {navLinks.map((link, index) => (
          <CustomNavLink key={index} linkTo={link.hash} linkText={link.en}>
            {link.en === activeSection ? (
              <div>
                <span className="text-[20px]">{link.en}</span>
              </div>
            ) : (
              <div
                onClick={() => {
                  setActiveSection(link.en);
                }}
              >
                <span className="text-[20px]">{link.en}</span>
              </div>
            )}
          </CustomNavLink>
        ))}
      </nav> 
      {isMobileNav && (
        <nav className="w-11/12 mx-auto flex items-center text-center justify-center fixed left-0 right-0 bottom-4 rounded-[18px] p-4 border-2 border-white bg-[#151B2D] z-[99] min-[1024px]:hidden opacity-95 gap-8">
          {navLinks.map((link, mobileIdx: number) => (
            <CustomNavLink
              key={mobileIdx}
              linkTo={link.hash}
              linkText={link.en}
            >
              {link.en === activeSection ? (
                <div>
                  <link.icon size={25} />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setActiveSection(link.en);
                  }}
                >
                  <link.icon size={25} />
                </div>
              )}
            </CustomNavLink>
          ))}
        </nav>
      )}
    </>
  );
};

export default NavBar;
