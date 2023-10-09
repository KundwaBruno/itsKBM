import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Image from 'next/image';
import { FC, useCallback, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

interface Props {
  title: string;
  description: string;
  imageUrls: string[];
  links: { url: string; type: 'github' | 'link' | 'learn more' }[];
  techs: string[];
}

const carouselOptions: EmblaOptionsType = {
  dragFree: false,
  containScroll: 'trimSnaps',
};

const ProjectsCard: FC<Props> = (props) => {
  const { description, title, imageUrls, links, techs } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative rounded-lg border border-custom_border_dark">
      <div className="relative w-full h-[160px]">
        <Image
          src={imageUrls[0]}
          alt="Project_thumbnail"
          priority
          fill
          className="object-cover dark:opacity-80 rounded-t-lg"
        />
      </div>

      <div className="p-4 bg-background_light dark:bg-black rounded-b-lg">
        <h1 className="text-left text-custom_black  font-medium dark:text-custom_white">{title}</h1>
        <div className=" text-custom_black dark:text-custom_gray text-left text-sm my-2 font-light line-clamp-2">
          {description}
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
          {techs.map((tch, index) => {
            return (
              <span
                key={index}
                className=" dark:bg-custom_black text-custom_gray border dark:border-custom_border_dark p-1 px-2 rounded-md">
                {tch}
              </span>
            );
          })}
        </div>
        {/* <div className="flex justify-center mb-4">
          {links.map((ln, index) => {
            const { type, url } = ln;
            if (type === "link")
              return (
                <a key={index} href={url} target="_blank" rel="noreferrer">
                  <Icon name="Link" />
                </a>
              );
            if (type === "github")
              return (
                <a key={index} href={url} target="_blank" rel="noreferrer">
                  <Icon name="github" />
                </a>
              );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsCard;
