import Button from '@/components/button';
import SectionWrapper from '@/components/sectionWrapper';
import NavLinks from '@/lib/constants/links';
import useOnClickOutside from '@/lib/hooks/useOutsideClick';
import useScrollOffset from '@/lib/hooks/useScrollOfset';
import { Pivot as Hamburger } from 'hamburger-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isWebBarScrolled, setIsWebBarScrolled] = useState<boolean>(false);

  const navRef = useRef<HTMLDivElement>(null);

  const { setTheme, resolvedTheme } = useTheme();

  const router = useRouter();

  useOnClickOutside(navRef, () => setIsNavOpen(false));

  const scrollOffSet = useScrollOffset();

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isNavOpen]);

  useMemo(() => {
    if (scrollOffSet > 70) {
      setIsWebBarScrolled(true);
    } else {
      setIsWebBarScrolled(false);
    }
  }, [scrollOffSet]);

  const ToggleButton = () => {
    return (
      <div className="md:hidden">
        <div className="outline-none w-full relative">
          <div className="flex items-center gap-4">
            <Link href="/resume.pdf" target="_blank">
              <Button>Resume</Button>
            </Link>
            <ToogleThemeButton />
            <Hamburger
              toggled={isNavOpen}
              toggle={toggleNavOpen}
              color={resolvedTheme === 'light' ? 'black' : 'white'}
              size={22}
              rounded
            />
          </div>
        </div>
      </div>
    );
  };

  const MobileNav = () => {
    return (
      <div
        className="fixed h-screen w-screen top-16 backdrop-blur-lg pt-16 overflow-hidden transition-all z-[999999]"
        style={{
          right: isNavOpen ? 0 : '-100%',
        }}>
        {NavLinks.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.route}
              onClick={() => setIsNavOpen(false)}
              className="text-xl dark:text-custom_white text-custom_black py-5 text-center block">
              {`${link.label}`}
            </Link>
          );
        })}
      </div>
    );
  };

  const ToogleThemeButton = () => {
    return (
      <button
        className="text-custom_black dark:text-custom_white rounded-full p-3 hover:bg-gray-200 dark:hover:bg-primary/20 transition-all duration-100"
        onClick={() => (resolvedTheme === 'light' ? setTheme('dark') : setTheme('light'))}>
        {resolvedTheme === 'light' ? <FaMoon /> : <FaSun />}
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
      className={`z-50 sticky top-0 transition-all duration-200w-full py-3 ${
        isWebBarScrolled && 'backdrop-blur-md '
      }`}>
      <div className="flex justify-between items-center">
        <div className="relative font-bold text-lg">
          <span onClick={() => router.push('/')} className="cursor-pointer text-primary">
            KBM
          </span>
        </div>
        <ToggleButton />
        <Web />
      </div>
      <MobileNav />
    </SectionWrapper>
  );
};

export default NavBar;
