import PortfolioData from "./types/portfolioData";

const portfolioData: PortfolioData = {
  name__abbr: "KBM",
  full__name: "Kundwa Bruno",
  salutation: "Hello there ! , Name is",
  passion: "Software engineer.",
  passions: [
    "Software Engineer",
    "Frontend developer",
    "Backend developer",
    "UI/UX Designer",
  ],
  profile__image: "/assets/images/profileLg.jpg",
  current__status: "Open to offers",
  homeDescription:
    "I am passionate software engineer, familiar with a wide range of programming languages and frameworks and specializes in developing and maintaining websites of all sizes and complexity. ",
  looking__into:
    "Now that Web3 > is already here, I am currently looking forward to add blockchain development with solidity to my tech stacks.",
  status: "Open to offers",
  resume__link: "https://itskbm.com/resume.pdf",
  copyright: "Built with courage by KBM",
  recent_technologies: [
    "Javascript",
    "GraphQl",
    "React Js",
    "NextJs",
    "Ant Design",
    "TailwindCss",
    "Typescript",
    "Apollo Client",
  ],
  tech_stacks: [
    {
      title: "React Js",
      icon: "/assets/icons/React.svg",
    },
    {
      title: "React Native",
      icon: "/assets/icons/ReactNative.svg",
    },
    {
      title: "Next Js",
      icon: "/assets/icons/NextJs.svg",
    },

    {
      title: "Typescript",
      icon: "/assets/icons/Typescript.svg",
    },
    {
      title: "Javascript",
      icon: "/assets/icons/Javascript.svg",
    },
    {
      title: "Tailwind CSS",
      icon: "/assets/icons/TailwindCss.svg",
    },
    {
      title: "Ant Design",
      icon: "/assets/icons/AntDesign.svg",
    },

    {
      title: "Apollo Client",
      icon: "/assets/icons/ApolloClient.svg",
    },
    {
      title: "GraphQl",
      icon: "/assets/icons/GraphQl.svg",
    },
  ],
  about: {
    bio: `Hi again!, My name is <a href='https://www.linkedin.com/in/kundwabruno/' target='_blank'>Kundwa Bruno Materne</a>, I am a software engineer. I joined the carrer of web development back in 2019 after completing college in computer science, Where as i joined an Engineering apprenticeship at <a href="https://andela.com" target="_blank">Andela Rwanda</a> which populated me with the right skills, courage and love that i have right now for Web technologies.  <p>Up to today, I 've committed to this journey for over 3+ years now, Gaining <a href='/#experience'>experience</a> and skills from great influencers like <a href='https://udemy.com/' target='_blank'>Udemy</a>, <a href='https://freecodecamp.org/' target='_blank'>FreeCodeCamp</a> and so many other sources from the internet.</p>`,
    contactDescription:
      "You can reach out to me anytime by clicking on bottom right corner button to view my contact info or, click the button below. My inbox is always open, I will try my best to get back to you as soon as possible.",
    contact: [
      { name: "Email", data: "mailto:kundwabruno@gmail.com", icon: "email" },
      {
        name: "linkedin",
        data: "https://www.linkedin.com/in/kundwabruno/",
        icon: "linkedin",
      },
      {
        name: "github",
        data: "https://github.com/KundwaBruno",
        icon: "github",
      },
      {
        name: "instagram",
        data: "https://www.instagram.com/bruno_kbm/",
        icon: "instagram",
      },
      {
        name: "twitter",
        data: "https://twitter.com/bruno_kbm",
        icon: "twitter",
      },
      {
        name: "facebook",
        data: "https://www.facebook.com/kundwa.bruno/",
        icon: "facebook",
      },
    ],
  },

  experience: [
    {
      company: "Montech Studios",
      companyLink: "https://www.montech.io/",
      position: "Senior Frontend developer",
      timeFrame: "Jan 2022 - Present",
      length: "6 months",
      location: "United States",
      description: [
        "Built crypto coins based wallet app that allowed users to transfer and receive XRPs using React native in collaboration with blockchain developers",
        "Worked on a platform that earns users real crypto tokens upon completing social public tasks using modern tech like metamask.",
        "Build a web platform that accepts payments and moves money globally for any scale business, device or channel.",
      ],
    },
    {
      company: "Awesomity Lab",
      companyLink: "https://awesomity.rw/",
      position: "Frontend developer",
      timeFrame: "Sep 2021 - Jan 2023",
      length: "6 months",
      location: "Germany",
      description: [
        "Worked with a netherland client in partnership with the New York Bank to develop a data collection system  using GraphQl.",
        "Introduced the usage of TailwindCSS framework that increased the team’s speed and performance  in building scalable user interfaces and experience.",
        "Worked on a mobile payment feature generating over USD 14K a month. Nextjs, Ant design, Tailwind Css, AWS and sockets.",
      ],
    },
    {
      company: "Techenfold",
      companyLink:
        "https://www.linkedin.com/company/tech-enfold/?trk=ppro_cprof&originalSubdomain=rw",
      position: "Fullstack developer",
      timeFrame: "Jun 2021 - Jan 2022",
      length: "6 months",
      location: "Germany",
      description: [
        "Introduced the usage of NextJs, an open-source web framework which increased the client’s project overall performance and SEO.",
        "Re-designed the overall company’s website mockups using Figma.",
        "Worked with a skillful team on development of an E-learning platform that targeted TVET schools in Rwanda.",
      ],
    },
    {
      company: "Andela Rwanda",
      companyLink: "https://andela.com/",
      position: "Developer Apprentice",
      timeFrame: "Jan 2021 - Jan 2022",
      length: "1 Year 1 mo",
      location: "Kigali-Rwanda",
      description: [
        "Built my first personal website using React and NodeJs that had a Blog which helped me land my first contract as a software engineer.",
        "Worked within a team of 6 people on a local bus transportation system using the latest technologies like React,Nodes and Mysql.",
        "Assigned to be a team lead for several sprints within a team of four developers.",
      ],
    },
  ],
};

export default portfolioData;
