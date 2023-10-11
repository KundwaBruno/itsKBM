import { IdentificationIcon, XCircleIcon, XIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { FC, useRef, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import useOutSideClick from '../../../lib/hooks/useOutsideClick';
import PersonalData from '../../../lib/portfolioData';
import Collapsable from '../Collapsable';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [showHidden, setShowHidden] = useState<boolean>(false);
  const mediasRef = useRef<any>();
  const infoRef = useRef<any>();

  const router = useRouter();
  const path = router.pathname;

  useOutSideClick(mediasRef, () => setIsCollapsed(false));
  useOutSideClick(infoRef, () => setShowHidden(false));

  const handleUnCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setShowHidden(false);
  };

  const toggleShowHidden = () => {
    if (path === '/') {
      setShowHidden(!showHidden);
      setIsCollapsed(false);
    } else {
      router.back();
    }
  };

  return (
    <div className="flex py-10 items-center justify-center w-11/12 md:w-[90%] m-auto relative dark:bg-black bg-white">
      <div className="text-custom_gray text-xs">
        {PersonalData.copyright}
        <span className="ml-2">&#128170;&#127998;</span>
      </div>
      <div ref={mediasRef} className="fixed bottom-10 right-20">
        <Collapsable
          isCollapsed={isCollapsed}
          onClose={handleUnCollapse}
          items={PersonalData.about.contact}>
          {isCollapsed ? (
            <XIcon width={20} color="black" />
          ) : (
            <IdentificationIcon color="black" width={20} />
          )}
        </Collapsable>
      </div>
    </div>
  );
};

export default Footer;
