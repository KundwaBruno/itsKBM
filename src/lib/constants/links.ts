import { NavigationLink } from '../types/nav';

const NavigationLinks: NavigationLink[] = [
  {
    name: 'Experience',
    label: 'Experience',
    route: '/#experience',
  },
  {
    name: 'Contact',
    label: 'Contact',
    route: '/#contact',
  },
  {
    name: 'Feedback',
    label: 'Feedback',
    isNew: false,
    route: '/feedback',
  },
];

export default NavigationLinks;
