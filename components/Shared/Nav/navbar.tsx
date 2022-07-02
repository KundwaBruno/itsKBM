import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { My_Logo } from "../../../lib/images";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import NavLinks from "./links";
import { motion } from "framer-motion";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

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
        className={`${
          isNavOpen ? "left-0" : "-left-[100vw]"
        } absolute top-0 bg-black z-50 h-screen w-[60vw] shadow-md shadow-white flex items-center justify-center transition-all duration-400`}
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
              className='text-white text-center text-sm font-normal mb-3'
            >
              <span className='text-[#a96637] mr-3'>{index + 1}.</span>
              <Link href={link.route}>{`${link.label}`}</Link>
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
    <div className='sticky top-0 bg-black z-50 py-5  w-11/12 md:w-[90%] m-auto'>
      <div className='flex justify-between items-center w-full h-full'>
        <div>
          <Image src={My_Logo} />
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
