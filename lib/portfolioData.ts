import PortfolioData from "./types/portfolioData";

const portfolioData: PortfolioData = {
  name__abbr: "KBM",
  full__name: "Kundwa Bruno",
  salutation: "Hello there, I'm",
  passion: "Software developer",
  profile__image: "/assets/images/profile.png",
  current__status: "Open to offers",
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
      title: "Web developer",
      icon: "fas fa-laptop",
    },

    {
      title: "Applications Developer",
      icon: "fas fa-code",
    },
    {
      title: "React Js",
      icon: "fab fa-react",
    },
    {
      title: "React Native",
      icon: "fab fa-react",
    },
    {
      title: "Next Js",
      icon: "fab fa-react",
    },
    {
      title: "NodeJs",
      icon: "fab fa-node",
    },
    {
      title: "Express",
      icon: "fab fa-mysql",
    },
    {
      title: "Typescript",
      icon: "fab fa-js",
    },
    {
      title: "Javascript",
      icon: "fab fa-js",
    },
    {
      title: "Tailwind CSS",
      icon: "fab fa-css3",
    },
    {
      title: "Ant Design",
      icon: "fab fa-css3",
    },
    {
      title: "Git/github",
      icon: "fab fa-github",
    },
    {
      title: "Firebase",
      icon: "fab fa-google",
    },
  ],
  about: {
    bio: `Hi again!, My name is <a href='https://www.linkedin.com/in/kundwabruno/' target='_blank'>Kundwa Bruno Materne</a>, I am a software engineer. I joined the carrer of web development back in 2019 after completing college in computer science, Where as i joined an Engineering apprenticeship at <a href="https://andela.com" target="_blank">Andela Rwanda</a> which populated me with the right skills, courage and love that i have right now for Web technologies.  <p>Up to today, I 've committed to this journey for over 3+ years now, Gaining <a href='/experience'>experience</a> and skills from great influencers like <a href='https://udemy.com/' target='_blank'>Udemy</a>, <a href='https://freecodecamp.org/' target='_blank'>FreeCodeCamp</a> and so many other sources from the internet.</p>`,
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
      position: "Frontend developer",
      timeFrame: "Jan 2022 - Present",
      length: "6 months",
      location: "United States",
      description: [
        "Built a crypto coins based wallet app that allowed users to transfer and receive XRPs using React native in collaboration with blockchain developers",
        "Worked on a platform that earns users real crypto tokens upon completing social public tasks using modern tech like metamask.",
        "Build  a web platform that accepts payments and moves money globally for any scale business, device or channel.",
      ],
    },
    {
      company: "Awesomity Lab",
      companyLink: "https://awesomity.rw/",
      position: "Frontend developer",
      timeFrame: "Sep 2021 - Present",
      length: "6 months",
      location: "Germany",
      description: [
        "Worked with a netherland client in partnership with the New York Bank to develop a data collection system  using GraphQl.",
        "Introduced the usage of TailwindCSS framework that increased the team’s speed and performance  in building scalable user interfaces and experience.",
        "Worked with the backend team to build a local goods transportation management system that is generating over USD 14K a month.Nextjs, Ant design, Tailwind Css, AWS and sockets.",
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
