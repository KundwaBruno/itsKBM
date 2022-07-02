import { FC } from "react";
import {
  FaEnvelope,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

interface IconProps {
  name: string;
}

const IconComponent: FC<IconProps> = ({ name }) => {
  const iconWidth = 20; // Change icon width here

  const chooseIcon = () => {
    switch (name) {
      case "email":
        return <FaEnvelope width={iconWidth} />;
      case "twitter":
        return <FaTwitter width={iconWidth} />;
      case "linkedin":
        return <FaLinkedinIn width={iconWidth} />;
      case "github":
        return <FaGithub width={iconWidth} />;
      case "facebook":
        return <FaFacebookF width={iconWidth} />;
      case "instagram":
        return <FaInstagram width={iconWidth} />;
      default:
        return null;
    }
  };
  return <div>{chooseIcon()}</div>;
};

export default IconComponent;
