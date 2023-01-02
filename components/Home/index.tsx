import { FC } from "react";
import Image from "next/image";
import PageData from "../../lib/portfolioData";
import Button from "../Shared/Button";
import { ArrowNarrowDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import portfolioData from "../../lib/portfolioData";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = () => (
  <div className="w-[84%] m-auto">
    <div className="flex flex-col lg:flex-row mt-[12%] md:mt-[5%] h-auto md:h-[70vh] mb-16 md:mb-0">
      <div className="w-full md:w-[68%] flex flex-col justify-center mb-10 md:mb-0">
        <div className="text-[#B0B0B0] mb-2 text-sm">{PageData.salutation}</div>
        <div className="text-4xl md:text-7xl font-extrabold tracking-tighter text-gray-300">
          {PageData.full__name}
        </div>
        <h1 className="text-[2.3rem] md:text-[5rem] leading-[1.2] text-transparent bg-clip-text  custom-text-gradient font-extrabold tracking-tighter mb-5">
          {PageData.passion}
        </h1>
        <div className="w-full md:w-4/6 mb-7 text-gray-300 text-sm md:text-base">
          {PageData.homeDescription}
        </div>
        <a
          href={portfolioData.about.contact[0].data}
          target="_blank"
          rel="noreferrer"
          className="w-max"
        >
          <Button className="py-[15px] px-[50px]">Say hello !</Button>
        </a>
      </div>
      <div className="flex-1 h-[400px] md:h-[85%] bg-gradient-to-b from-[#1E1E1E] to-transparent rounded-[50px] relative">
        <div className="relative h-full w-[80%] m-auto">
          <Image
            src={PageData.profile__image}
            objectFit="contain"
            layout="fill"
            alt="Profile image"
            className="rounded-[50px] mix-blend-overlay hover:mix-blend-normal cursor-pointer transition-all duration-500 hover:scale-110"
          />
        </div>
      </div>
    </div>
    <div className="text-center">
      <Link href="#about">
        <ArrowNarrowDownIcon
          className="text-[#797979] inline cursor-pointer animate-bounce duration-200"
          width={40}
        />
      </Link>
    </div>
  </div>
);

export default LandingPage;
