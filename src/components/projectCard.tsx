import Image from 'next/image';
import { FC } from 'react';
import IconComponent from './icon';

interface Props {
  title: string;
  description: string;
  imageUrls: string[];
  links: { url: string; type: 'github' | 'link' | 'learn more' }[];
  techs: string[];
}

const ProjectsCard: FC<Props> = (props) => {
  const { description, title, imageUrls, techs, links } = props;

  return (
    <div className="relative rounded-lg border-2 dark:border-custom_border_dark bg-background_light dark:bg-black">
      <div className="relative w-full h-[160px]">
        <Image
          src={imageUrls[0]}
          alt="Project_thumbnail"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-cover dark:opacity-80 rounded-t-lg"
        />
      </div>

      <div className="p-4 rounded-b-lg relative">
        <h1 className="text-left text-custom_black  font-medium dark:text-custom_white">{title}</h1>
        <div className=" text-custom_black dark:text-custom_gray text-left text-sm my-2 font-light line-clamp-3">
          {description}
        </div>
        <div className="flex overflow-x-auto gap-2 text-xs text-gray-500">
          {techs.map((tch, index) => {
            return (
              <span
                key={index}
                className=" dark:bg-custom_black whitespace-nowrap text-custom_black dark:text-custom_gray border dark:border-custom_border_dark p-1 px-2 rounded-md">
                {tch}
              </span>
            );
          })}
        </div>
        <div className="flex absolute top-5 right-3 gap-4">
          {links.map((ln, index) => {
            const { type, url } = ln;
            if (type === 'link')
              return (
                <a key={index} href={url} target="_blank" rel="noreferrer">
                  <IconComponent name="Link" />
                </a>
              );
            if (type === 'github')
              return (
                <a key={index} href={url} target="_blank" rel="noreferrer">
                  <IconComponent name="github" />
                </a>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
