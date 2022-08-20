import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { My_Logo } from "../../../lib/images";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import NavLinks from "./links";
import useOnClickOutside from "../../../lib/hooks/useOutsideClick";
import useScrollOffset from "../../../lib/hooks/useScrollOfset";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isWebBarScrolled, setIsWebBarScrolled] = useState<boolean>(false);
  const navRef = useRef<any>();

  useOnClickOutside(navRef, () => setIsNavOpen(false));

  const scrollOffSet = useScrollOffset();

  useMemo(() => {
    if (scrollOffSet > 70) {
      setIsWebBarScrolled(true);
    } else {
      setIsWebBarScrolled(false);
    }
  }, [scrollOffSet]);

  const ToggleButton = () => {
    return (
      <button onClick={toggleNavOpen} className='outline-none w-full'>
        {isNavOpen ? (
          <HiX color='white' className='text-3xl' />
        ) : (
          <HiMenuAlt3 color='white' className='text-3xl' />
        )}
      </button>
    );
  };

  const Mobile = () => {
    return (
      <div
        ref={navRef}
        className={`fixed top-0 ${
          isNavOpen ? "left-0" : "-left-full"
        }  bg-black z-50 h-screen w-[60vw] shadow-md  border border-y-black border-l-black border-r-secondary flex items-center justify-center transition-all duration-500`}
      >
        <div className='text-white'>
          {NavLinks.map((link, index) => {
            return (
              <div key={index} className='mb-10'>
                <div
                  key={link.name}
                  className='text-center text-lg font-bold mb-3'
                >
                  <Link href={link.route}>{`${link.label}`}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const Web = () => {
    return (
      <div className='hidden md:flex items-center gap-14'>
        {NavLinks.map((link, index) => {
          return (
            <div
              key={link.name}
              className='text-white text-center text-sm font-normal mb-3 flex items-center'
            >
              <span className='text-[#a96637] mr-3'>{index + 1}.</span>
              <Link href={link.route}>{`${link.label}`}</Link>
              {link.isNew && (
                <div className='inline-block bg-yellow-500 w-[7px] h-[7px] rounded-full ml-2'></div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const toggleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div
      className={`py-5 z-50  w-11/12 md:w-[90%] m-auto sticky top-0 transition-all duration-500 ${
        isWebBarScrolled && "backdrop-blur-md"
      }`}
    >
      <div className='flex justify-between items-center w-full h-full'>
        <div>
          <Image alt='website_logo' src={My_Logo} />
        </div>
        <div className='md:hidden'>
          <ToggleButton />
        </div>
        <Mobile />
        <Web />
      </div>
    </div>
  );
};

export default NavBar;
