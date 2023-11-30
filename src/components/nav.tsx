import { motion } from 'framer-motion';
import { Pivot as Hamburger } from 'hamburger-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, Fragment, useMemo, useRef, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import NavLinks from '../lib/constants/links';
import useOnClickOutside from '../lib/hooks/useOutsideClick';
import useScrollOffset from '../lib/hooks/useScrollOfset';
import { My_Logo } from '../lib/images';
import Button from './button';
import SectionWrapper from './sectionWrapper';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isWebBarScrolled, setIsWebBarScrolled] = useState<boolean>(false);
  const navRef = useRef<any>();

  const { theme, setTheme, systemTheme } = useTheme();

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
            <Link href="/resume.pdf" target="_blank">
              <Button>Resume</Button>
            </Link>
            <ToogleThemeButton />
            <Hamburger
              toggled={isNavOpen}
              toggle={toggleNavOpen}
              color={
                theme === 'system' && systemTheme === 'light'
                  ? 'black'
                  : theme === 'light'
                  ? 'black'
                  : 'white'
              }
              size={22}
              rounded
            />
          </div>

          {isNavOpen ? (
            <motion.div
              ref={navRef}
              className="absolute right-0 top-16 rounded-2xl bg-custom_white dark:bg-background_dark shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
              <div className="text-white p-10">
                {NavLinks.map((link, index) => {
                  return (
                    <div key={index} className={`${index !== NavLinks.length - 1 && 'mb-10'}`}>
                      <Link
                        href={link.route}
                        key={link.name}
                        className="text-center text-sm font-bold dark:text-custom_white text-custom_black">
                        {`${link.label}`}
                      </Link>
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

  const ToogleThemeButton = () => {
    return (
      <button
        className="text-custom_black dark:text-custom_white rounded-full p-3 hover:bg-gray-200 dark:hover:bg-primary/20 transition-all duration-100"
        onClick={() =>
          theme === 'system' && systemTheme === 'light'
            ? setTheme('dark')
            : theme === 'light'
            ? setTheme('dark')
            : setTheme('light')
        }>
        {theme === 'system' && systemTheme === 'light' ? (
          <FaMoon />
        ) : theme === 'light' ? (
          <FaMoon />
        ) : (
          <FaSun />
        )}
      </button>
    );
  };

  const Web = () => {
    return (
      <Fragment>
        <div className="hidden md:flex items-center gap-14">
          {NavLinks.map((link) => {
            return (
              <Link
                href={link.route}
                key={link.name}
                className="dark:text-gray-300 text-custom_black text-sm cursor-pointer">
                {`${link.label}`}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/resume.pdf" target="_blank">
            <Button>Resume</Button>
          </Link>
          <ToogleThemeButton />
        </div>
      </Fragment>
    );
  };

  const toggleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <SectionWrapper
      className={`z-50 sticky top-0 transition-all duration-200 w-full py-3 ${
        isWebBarScrolled && 'backdrop-blur-md border-b-[0.5px] border-b-custom_border_dark'
      }`}>
      <div className="flex justify-between items-center">
        <div className="relative font-bold text-lg">
          <span onClick={() => router.push('/')} className="cursor-pointer">
            KBM
          </span>
          {/* <Image
            alt="website_logo"
            src={My_Logo}
            onClick={() => router.push('/')}
            className="cursor-pointer"
            fill
            sizes="100vw"
            priority
            style={{
              objectFit: 'contain',
            }}
          /> */}
        </div>
        <ToggleButton />
        <Web />
      </div>
    </SectionWrapper>
  );
};

export default NavBar;
