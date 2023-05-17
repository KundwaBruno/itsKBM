import { NavigationLink } from "../../../lib/types/nav";

const NavigationLinks: NavigationLink[] = [
  {
    name: "About",
    label: "About",
    route: "/#about",
  },
  {
    name: "Experience",
    label: "Experience",
    route: "/#experience",
  },
  {
    name: "Projects",
    label: "Projects",
    route: "/#projects",
  },
  {
    name: "Contact",
    label: "Contact",
    route: "/#contact",
  },
  {
    name: "Feedback",
    label: "Feedback",
    isNew: false,
    route: "/feedback",
  },
];

export default NavigationLinks;
