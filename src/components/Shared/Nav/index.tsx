import React, { FC, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { My_Logo } from "../../../lib/images";
import NavLinks from "./links";
import useOnClickOutside from "../../../lib/hooks/useOutsideClick";
import useScrollOffset from "../../../lib/hooks/useScrollOfset";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Button from "../Button";
import { Pivot as Hamburger } from "hamburger-react";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isWebBarScrolled, setIsWebBarScrolled] = useState<boolean>(false);
  const navRef = useRef<any>();

  const router = useRouter();

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
      <div className=" md:hidden">
        <div className="outline-none w-full relative">
          <div className="flex items-center gap-4">
            <a href="/resume.pdf" target="_blank">
              <Button>Resume</Button>
            </a>
            <Hamburger
              toggled={isNavOpen}
              toggle={toggleNavOpen}
              color="white"
              size={22}
              rounded
            />
          </div>

          {isNavOpen ? (
            <motion.div
              ref={navRef}
              className="absolute right-0 top-16 rounded-2xl bg-gradient-to-b from-[#1E1E1E] to-black"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <div className="text-white p-10">
                {NavLinks.map((link, index) => {
                  return (
                    <div
                      key={index}
                      className={`${index !== NavLinks.length - 1 && "mb-10"}`}
                    >
                      <div
                        key={link.name}
                        className="text-center text-sm font-bold"
                        onClick={() => router.push(link.route)}
                      >
                        {`${link.label}`}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    );
  };

  const Web = () => {
    return (
      <div className="hidden md:flex items-center gap-14">
        {NavLinks.map((link) => {
          return (
            <div
              onClick={() => router.push(link.route)}
              key={link.name}
              className="text-gray-300 text-sm cursor-pointer"
            >
              {`${link.label}`}
            </div>
          );
        })}
        <a href="/resume.pdf" target="_blank">
          <Button>Resume</Button>
        </a>
      </div>
    );
  };

  const toggleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div
      className={`z-50 fixed top-0 transition-all duration-200 w-full ${
        isWebBarScrolled && "backdrop-blur-md border-b-[0.5px]"
      }`}
    >
      <div className="flex justify-between items-center h-full w-11/12 md:w-[84%] max-w-screen-2xl m-auto">
        <div className="w-[80px] h-[70px] relative">
          <Image
            alt="website_logo"
            src={My_Logo}
            onClick={() => router.push("/")}
            className="cursor-pointer"
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <ToggleButton />

        <Web />
      </div>
    </div>
  );
};

export default NavBar;
