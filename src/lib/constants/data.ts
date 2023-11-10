import PortfolioData from '../types/portfolioData';

const portfolioData: PortfolioData = {
  name__abbr: 'KBM',
  full__name: 'Kundwa Bruno Materne.',
  salutation: 'Hello there , My name is',
  passion: 'Software engineer.',
  passions: ['Software Engineer', 'Frontend developer', 'Backend developer', 'UI/UX Designer'],
  profile__image:
    'https://res.cloudinary.com/dxyu6elli/image/upload/v1682203668/1655309573260_gandfq.jpg',
  current__status: 'Open to offers',
  homeDescription: `Experienced Front-End Software Engineer from Rwanda 🇷🇼, dedicated to crafting accessible web and mobile solutions.`,
  looking__into:
    'Now that Web3 > is already here, I am currently looking forward to add blockchain development with solidity to my tech stacks.',
  status: 'Open to offers',
  resume__link: 'https://itskbm.com/resume.pdf',
  copyright: 'Built with courage by KBM',
  recent_technologies: [
    'Javascript',
    'GraphQl',
    'React Js',
    'NextJs',
    'Ant Design',
    'TailwindCss',
    'Typescript',
    'Apollo Client',
  ],
  tech_stacks: [
    {
      title: 'React Js',
      icon: '/assets/icons/React.svg',
    },
    {
      title: 'React Native',
      icon: '/assets/icons/ReactNative.svg',
    },
    {
      title: 'Next Js',
      icon: '/assets/icons/NextJs.svg',
    },

    {
      title: 'Typescript',
      icon: '/assets/icons/Typescript.svg',
    },
    {
      title: 'Javascript',
      icon: '/assets/icons/Javascript.svg',
    },
    {
      title: 'Tailwind CSS',
      icon: '/assets/icons/TailwindCss.svg',
    },
    {
      title: 'Ant Design',
      icon: '/assets/icons/AntDesign.svg',
    },

    {
      title: 'Apollo Client',
      icon: '/assets/icons/ApolloClient.svg',
    },
    {
      title: 'GraphQl',
      icon: '/assets/icons/GraphQl.svg',
    },
  ],
  about: {
    bio: `In 2019, I embarked on a web development career after completing a computer science degree. My journey began with an Engineering apprenticeship at <a href="https://andela.com" target="_blank">Andela Rwanda</a>, igniting my passion for web technologies.

    Fast forward to today, I've dedicated over three years to this field, enhancing my knowledge through various reputable online sources. These experiences have honed my abilities, making me a dedicated and proficient professional.`,
    contactDescription:
      'You can reach out to me anytime by clicking on bottom right corner button to view my contact info or, click the button below. My inbox is always open, I will try my best to get back to you as soon as possible.',
    contact: [
      { name: 'Email', data: 'mailto:kundwabruno@gmail.com', icon: 'email' },
      {
        name: 'linkedin',
        data: 'https://www.linkedin.com/in/kundwabruno/',
        icon: 'linkedin',
      },
      {
        name: 'github',
        data: 'https://github.com/KundwaBruno',
        icon: 'github',
      },
      // {
      //   name: 'instagram',
      //   data: 'https://www.instagram.com/bruno_kbm/',
      //   icon: 'instagram',
      // },
      // {
      //   name: 'twitter',
      //   data: 'https://twitter.com/bruno_kbm',
      //   icon: 'twitter',
      // },
      // {
      //   name: 'facebook',
      //   data: 'https://www.facebook.com/kundwa.bruno/',
      //   icon: 'facebook',
      // },
    ],
  },
  projects: {
    title: 'Projects',
    description:
      'Below is some of the recent projects i have been working on, and ranked by most recent!',
    data: [
      {
        title: 'Business Analytics',
        description:
          'Data collection system that enhances organizational process visualization and management.',
        imageUrls: [
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1682210515/Screenshot_2023-04-23_at_02.39.44_kjj0dk.png',
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1682210619/Screenshot_2023-04-23_at_02.43.22_ngdazg.png',
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1682210516/Screenshot_2023-04-23_at_02.40.06_xw1tro.png',
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1682210516/Screenshot_2023-04-23_at_02.41.33_sjdhlh.png',
        ],
        techs: ['NextJs', 'Apollo Client', 'MapBox'],
        links: [],
      },
      {
        title: 'Transport System',
        description: 'Transportation services in Rwanda with a substantial daily user base.',
        imageUrls: [
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1682205795/Screenshot_2023-04-23_at_01.22.02_oabfh8.png',
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1682205794/Screenshot_2023-04-23_at_01.19.01_mzoqfr.png',
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1682205795/Screenshot_2023-04-23_at_01.19.40_bjdqpr.png',
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1682205864/Screenshot_2023-04-23_at_01.24.08_sgbglo.png',
        ],
        techs: ['NextJs', 'Typescript', 'Google Maps'],
        links: [],
      },
      {
        title: 'Verification Seal',
        description:
          'A system that evaluates and sell online trust/reliability certificates for online websites',
        imageUrls: [
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1682211174/Screenshot_2023-04-23_at_02.52.29_l80kkb.png',
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1682211174/Screenshot_2023-04-23_at_02.51.19_ueehfu.png',
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1682211174/Screenshot_2023-04-23_at_02.52.09_juodpc.png',
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1682211175/Screenshot_2023-04-23_at_02.51.03_qvvtk3.png',
        ],
        techs: ['Javascript', 'NextJs', 'ReduxToolkit'],
        links: [],
      },
      {
        title: 'Alaafia Solutions',
        description: 'A professional landing page for a consultancy firm.',
        imageUrls: [
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1699088766/Screenshot_2023-11-04_at_11.05.58_njswpm.png',
        ],
        techs: ['NextJs', 'TailwindCss', 'Framer motion'],
        links: [{ url: 'https://alaafia-solutions.vercel.app/', type: 'link' }],
      },
      {
        title: 'My personal portfolio',
        description: 'My my personal profile that talks about me and what i do.',
        imageUrls: [
          'https://res.cloudinary.com/drqtk4af2/image/upload/v1697038327/meta_kismhm.png',
        ],
        techs: ['NextJs', 'TailwindCss', 'Framer motion'],
        links: [{ url: 'https://www.itskbm.com/', type: 'link' }],
      },
    ],
  },
  experience: [
    {
      company: 'Awesomity Lab',
      companyLink: 'https://awesomity.rw/',
      position: 'Senior Frontend engineer',
      timeFrame: 'Sep 2021 - Sep 2023',
      length: '6 months',
      location: 'Germany',
      description: [
        'Authored comprehensive technical documentation, providing step by step walkthroughs.',
        'Initiated the implementation of tailwindCSS framework resulting in a substantial enhancement of our team’s efficiency in constructing scalable user interfaces and delivering superior user experiences.',
      ],
    },
    {
      company: 'Montech Software Studios',
      companyLink: 'https://www.montech.io/',
      position: 'Frontend engineer',
      timeFrame: 'Jan 2022 - May 2023',
      length: '6 months',
      location: 'United States',
      description: [
        'Contributed to the improvement of existing internal UI components.',
        'Conducted professional briefing sessions with clients, outlining the latest developments in projects',
        'Conducted code reviews and weekly technical presentations to the rest of the team.',
        `Built a variety of client's  landing pages and websites.`,
      ],
    },

    {
      company: 'Techenfold',
      companyLink:
        'https://www.linkedin.com/company/tech-enfold/?trk=ppro_cprof&originalSubdomain=rw',
      position: 'Fullstack developer',
      timeFrame: 'Jun 2020 - Jun 2021',
      length: '6 months',
      location: 'Germany',
      description: [
        `Converted an early stage client’s website into NextJs framework that increased client’s website performance and speed  by 40%`,
        `Emphasized  the usage of wireframing and prototyping using Figma.`,
        `Engineered a set of API endpoints to facilitate data communication.`,
        `Conducted performance enhancements by optimizing the efficiency of existing database queries.
        `,
      ],
    },
    {
      company: 'Andela Rwanda',
      companyLink: 'https://andela.com/',
      position: 'Developer Apprentice',
      timeFrame: 'Jan 2020 - Sep 2020',
      length: '1 Year 1 mo',
      location: 'Kigali-Rwanda',
      description: [
        `Writen unit and integration tests for both Frontend and Backend.`,
        `Developed my first fullstack personal portfolio as a web developer.`,
        `Participated in weekly team project presentations to technical managers.`,
        `Made research on world class technologies used in web development.`,
      ],
    },
  ],
};

export default portfolioData;
