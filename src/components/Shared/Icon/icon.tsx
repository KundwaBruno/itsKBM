import { FC } from "react";
import {
  FaEnvelope,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaArrowUp,
  FaArrowDown,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface IconProps {
  name: string;
  color?: string;
}

const IconComponent: FC<IconProps> = ({ name, color }) => {
  const iconWidth = 20; // Change icon width here

  const chooseIcon = () => {
    switch (name) {
      case "email":
        return <FaEnvelope width={iconWidth} color={color} />;
      case "twitter":
        return <FaTwitter width={iconWidth} color={color} />;
      case "linkedin":
        return <FaLinkedinIn width={iconWidth} color={color} />;
      case "github":
        return <FaGithub width={iconWidth} color={color} />;
      case "facebook":
        return <FaFacebookF width={iconWidth} color={color} />;
      case "instagram":
        return <FaInstagram width={iconWidth} color={color} />;
      case "Up":
        return <FaArrowUp width={iconWidth} color={color} />;
      case "Down":
        return <FaArrowDown width={iconWidth} color={color} />;
      case "Link":
        return <FaExternalLinkAlt width={iconWidth} color={color} />;
      default:
        return null;
    }
  };
  return <div>{chooseIcon()}</div>;
};

export default IconComponent;
