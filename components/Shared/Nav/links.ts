import { NavigationLink } from "../../../lib/types/nav";

const NavigationLinks: NavigationLink[] = [
  {
    name: "home",
    label: "Home",
    route: "/",
  },
  {
    name: "About",
    label: "Biography",
    route: "/me",
  },
  {
    name: "Experience",
    label: "Experience",
    route: "/experience",
  },
  {
    name: "Feedback",
    label: "Feedback",
    isNew: true,
    route: "/feedback",
  },
];

export default NavigationLinks;
