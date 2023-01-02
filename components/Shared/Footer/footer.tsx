import React, { FC, useState, useRef } from "react";
import Collapsable from "../Collapsable";
import {
  IdentificationIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";
import { IoIosArrowBack } from "react-icons/io";
import PersonalData from "../../../lib/portfolioData";
import useOutSideClick from "../../../lib/hooks/useOutsideClick";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

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
    if (path === "/") {
      setShowHidden(!showHidden);
      setIsCollapsed(false);
    } else {
      router.back();
    }
  };

  return (
    <div className="flex py-10 items-center justify-center w-11/12 md:w-[90%] m-auto relative">
      <div className="text-gray-400 text-xs">
        {PersonalData.copyright}
        <span className="ml-2">&#128170;&#127998;</span>
      </div>
      <div ref={mediasRef} className="absolute right-0">
        <Collapsable
          isCollapsed={isCollapsed}
          onClose={handleUnCollapse}
          items={PersonalData.about.contact}
        >
          <IdentificationIcon width={20} />
        </Collapsable>
      </div>
    </div>
  );
};

export default Footer;
