import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import { FC, useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface Props {
  title: string;
  description: string;
  imageUrls: string[];
  links: { url: string; type: "github" | "link" | "learn more" }[];
  techs: string[];
}

const carouselOptions: EmblaOptionsType = {
  dragFree: false,
  containScroll: "trimSnaps",
};

const ProjectsCard: FC<Props> = (props) => {
  const { description, title, imageUrls, links, techs } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-96 h-[430px] bg-[#1E1E1E] rounded-2xl p-4 relative">
      <div className="relative h-1/2">
        {prevBtnEnabled && (
          <button
            onClick={scrollPrev}
            className="bg-white rounded-full p-2 shadow-md border absolute z-10 -left-3 top-1/2  -translate-y-1/2"
          >
            <FaChevronLeft size={10} />
          </button>
        )}

        <div
          ref={emblaRef}
          className="overflow-hidden w-full cursor-pointer h-full"
        >
          <div className="flex w-full h-full">
            <PhotoProvider>
              {imageUrls.map((img, index) => {
                return (
                  <div
                    key={index}
                    className="w-fulll h-full bg-black relative rounded-2xl"
                    style={{ flex: "0 0 100%" }}
                  >
                    <PhotoView src={img}>
                      <Image
                        src={img}
                        alt="Project_thumbnail"
                        fill
                        priority
                        className="object-cover rounded-2xl"
                      />
                    </PhotoView>
                  </div>
                );
              })}
            </PhotoProvider>
          </div>
        </div>
        {nextBtnEnabled && (
          <button
            onClick={scrollNext}
            className="bg-white rounded-full p-2 shadow-md border absolute z-10 -right-3 top-1/2  -translate-y-1/2"
          >
            <FaChevronRight size={10} />
          </button>
        )}
      </div>

      <div className="mt-5">
        <h1 className="gradient-text text-xl">{title}</h1>
        <p
          className="text-sm text-gray-400"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex flex-wrap gap-3 text-xs text-gray-500 justify-center mb-4">
          {techs.map((tch, index) => {
            return <span key={index}>{tch}</span>;
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
