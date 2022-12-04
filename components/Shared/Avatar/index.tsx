import { FC } from "react";
import avatarNameMaker from "../../../lib/functions/abbrName";

const Avatar: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-gray-800 font-bold text-white">
        {avatarNameMaker(`Anonyous ${name}`)}
      </div>
      <div>{`Anonymous ${name}`}</div>
    </div>
  );
};

export default Avatar;
