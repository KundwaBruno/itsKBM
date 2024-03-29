import PortfolioData from '../types/portfolioData';

const portfolioData: PortfolioData = {
  name__abbr: 'KBM',
  full__name: 'Kundwa Bruno Materne',
  salutation: 'Hello there , My name is',
  passion: 'Software engineer.',
  homeDescription: `Experienced Front-End Software Engineer from Rwanda 🇷🇼, dedicated to crafting accessible web and mobile solutions.`,
  prodUrl: 'https://itskbm.com/',
  resume__link: 'https://itskbm.com/resume.pdf',
  meta__img: 'https://res.cloudinary.com/dxyu6elli/image/upload/v1702290838/meta_ab07nt.png',
  copyright: 'Built with courage by Bruno',
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
    bio: `Welcome! I'm a web development enthusiast who started my journey in 2018. My passion for web technologies was sparked during an Engineering apprenticeship at Andela Rwanda. With over three years in the field, I've continuously expanded my expertise through various online platforms, shaping me into a dedicated and skilled web professional.`,
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
    ],
  },
  projects: {
    title: 'Projects',
    description: 'Below is some of the recent projects i have worked on.',
    data: [
      {
        title: 'Sinc - Dashboard',
        description:
          'A startup that i co-founded that provided event management and ticket selling solutions.',
        imageUrls: [
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1706351180/Screenshot_2024-01-27_at_12.26.09_ub9xrz.png',
        ],
        techs: ['ReactJs', 'NextJs', 'TailwindCss', 'Ant Design', 'MapBoxGL', 'Framer motion'],
        links: [{ url: 'https://organizer.sinc.today/', type: 'link' }],
      },
      {
        title: 'Sinc - Home page',
        description:
          'A startup that i co-founded that provided event management and ticket selling solutions.',
        imageUrls: [
          'https://res.cloudinary.com/dxyu6elli/image/upload/v1706350940/Screenshot_2024-01-27_at_12.22.11_e7dzg7.png',
        ],
        techs: ['NextJs', 'TailwindCss', 'Framer motion'],
        links: [{ url: 'https://sinc.today/', type: 'link' }],
      },
      // {
      //   title: 'Business Analytics',
      //   description:
      //     'Data collection system that enhances organizational process visualization and management.',
      //   imageUrls: [
      //     'https://res.cloudinary.com/dxyu6elli/image/upload/v1682210515/Screenshot_2023-04-23_at_02.39.44_kjj0dk.png',
      //     'https://res.cloudinary.com/dxyu6elli/image/upload/v1682210619/Screenshot_2023-04-23_at_02.43.22_ngdazg.png',
      //     'https://res.cloudinary.com/dxyu6elli/image/upload/v1682210516/Screenshot_2023-04-23_at_02.40.06_xw1tro.png',
      //     'https://res.cloudinary.com/dxyu6elli/image/upload/v1682210516/Screenshot_2023-04-23_at_02.41.33_sjdhlh.png',
      //   ],
      //   techs: ['NextJs', 'Apollo Client', 'MapBox'],
      //   links: [],
      // },
      // {
      //   title: 'OX Delivers',
      //   description:
      //     'A dashboard that manages transportation services in Rwanda with a substantial daily user base.',
      //   imageUrls: [
      //     'https://res.cloudinary.com/dxyu6elli/image/upload/v1682205795/Screenshot_2023-04-23_at_01.22.02_oabfh8.png',
      //     'https://res.cloudinary.com/dxyu6elli/image/upload/v1682205794/Screenshot_2023-04-23_at_01.19.01_mzoqfr.png',
      //     'https://res.cloudinary.com/dxyu6elli/image/upload/v1682205795/Screenshot_2023-04-23_at_01.19.40_bjdqpr.png',
      //     'https://res.cloudinary.com/dxyu6elli/image/upload/v1682205864/Screenshot_2023-04-23_at_01.24.08_sgbglo.png',
      //   ],
      //   techs: ['NextJs', 'Typescript', 'Google Maps'],
      //   links: [{ url: 'https://www.oxdelivers.com/', type: 'link' }],
      // },
      // {
      //   title: 'Trust seal',
      //   description:
      //     'A platform that evaluates and sell online trust/reliability certificates for online websites',
      //   imageUrls: [
      //     'https://res.cloudinary.com/dxyu6elli/image/upload/v1682211174/Screenshot_2023-04-23_at_02.52.29_l80kkb.png',
      //     'https://res.cloudinary.com/dxyu6elli/image/upload/v1682211174/Screenshot_2023-04-23_at_02.51.19_ueehfu.png',
      //     'https://res.cloudinary.com/dxyu6elli/image/upload/v1682211174/Screenshot_2023-04-23_at_02.52.09_juodpc.png',
      //     'https://res.cloudinary.com/dxyu6elli/image/upload/v1682211175/Screenshot_2023-04-23_at_02.51.03_qvvtk3.png',
      //   ],
      //   techs: ['Javascript', 'NextJs', 'ReduxToolkit'],
      //   links: [],
      // },
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
        title: 'Its KBM',
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
      company: 'Awesomity Global',
      companyLink: 'https://awesomity.nl/',
      position: 'Frontend Engineer',
      timeFrame: 'Sept 2022 - Dec 2023',
      length: '6 months',
      location: 'Delft, Zuid-Holland - Full Time',
      description: [
        'Authored comprehensive technical documentation, providing step by step walkthroughs.',
        'Developed a Data collection system capturing business workflows and regulation compliance, enhancing companies’ decision making capabilities',
      ],
    },
    {
      company: 'Montech Software Studios',
      companyLink: 'https://www.montech.io/',
      position: 'Frontend Engineer',
      timeFrame: 'Jan 2022 - May 2023',
      length: '6 months',
      location: 'United States',
      description: [
        'Contributed to the improvement of existing internal UI components.',
        'Conducted professional briefing sessions with clients, outlining the latest developments in projects',
        'Conducted code reviews and weekly technical presentations to the rest of the team.',
      ],
    },

    {
      company: 'Awesomity Lab',
      companyLink: 'https://awesomity.rw/',
      position: 'Frontend Engineer',
      timeFrame: 'Sept 2021 - Sept 2022',
      length: '6 months',
      location: 'Rwanda,Kigali',
      description: [
        `Converted an early stage client’s website into NextJs framework that increased client’s website performance and speed  by 40%`,
        `Emphasized  the usage of wireframing and prototyping using Figma.`,
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
