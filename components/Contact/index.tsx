import Link from "next/link";
import { FC } from "react";
import portfolioData from "../../lib/portfolioData";
import Data from "../../lib/portfolioData";
import Button from "../Shared/Button";

interface ContactProps {}

const Contact: FC<ContactProps> = () => (
  <section id="contact" className="text-center my-[10%]">
    <h1 className="leading-[5rem] font-extrabold tracking-tighter gradient-text text-3xl md:text-5xl mb-10">
      Reach Me !
    </h1>
    <p
      className="text-gray-400 w-11/12 md:w-1/2 m-auto mb-16 text-sm md:text-base"
      dangerouslySetInnerHTML={{ __html: Data.about.contactDescription }}
    />
    <div>
      <a
        href={portfolioData.about.contact[0].data}
        target="_blank"
        rel="noreferrer"
      >
        <Button className="py-[15px] px-[50px]">Say hello!</Button>
      </a>
    </div>
  </section>
);

export default Contact;
