import PortfolioData from "./types/portfolioData";

const portfolioData: PortfolioData = {
  name__abbr: "KBM",
  full__name: "Kundwa Bruno",
  salutation: "Hello there, I'm",
  passion: "Fullstack web developer",
  profile__image: "/assets/images/profile.png",
  current__status: "Open to offers",
  looking__into: "Blockchain development with solidity",
  status: "Open to offers",
  resume__link: "https://itskbm.com/resume.pdf",
  copyright: "Built with courage by KBM",
  tech_stacks: [
    {
      title: "Web developer",
      icon: "fas fa-laptop",
    },

    {
      title: "Frontend Developer",
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
      title: "MySQL",
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
    bio: `Hi again!, My name is <a href='https://www.linkedin.com/in/kundwabruno/' target='_blank'>Kundwa Bruno Materne</a>, I am a web developer. I joined the carrer of web development back in 2019 after completing college in computer science. I joined an Engineering apprenticeship at <a href="https://andela.com" target="_blank">Andela Rwanda</a> which populated me with the right skills, courage and love that i have right now for Web technologies.  <p>Up to today, I 've committed to this journey for over 2+ years now, Gaining <a href='/experience'>experience</a> and skills from great influencers like <a href='https://udemy.com/' target='_blank'>Udemy</a>, <a href='https://freecodecamp.org/' target='_blank'>FreeCodeCamp</a> and so many other sources from the internet.</p>`,
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
      company: "Awesomity Lab",
      companyLink: "https://awesomity.rw/",
      position: "Frontend developer",
      timeFrame: "Oct 2021 - Present",
      length: "6 months",
      location: "Germany",
      description: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, frameworks, platforms, and content management systems such as JavaScript, TypeScript, React, NextJs, Ant Design, AWS, Sockets.",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      company: "Techenfold",
      companyLink:
        "https://www.linkedin.com/company/tech-enfold/?trk=ppro_cprof&originalSubdomain=rw",
      position: "Fullstack developer",
      timeFrame: "Jun 2021 - Nov 2021",
      length: "6 months",
      location: "Germany",
      description: [
        "Installation and deployment of a developed management software and the website",
        "Bug fixing and support for the software",
        "Designing of the website’s frontend",
        "Integrate continuous feedback together with the customer",
        "Analyzation of code quality and continuous code reviews",
      ],
    },
    {
      company: "Andela Rwanda",
      companyLink: "https://andela.com/",
      position: "Developer Apprentice",
      timeFrame: "Feb 2021 - Oct 2021",
      length: "9 months",
      location: "Kigali-Rwanda",
      description: [
        "Worked on my personal web portfolio with the help of Andela managers and team leads ( Technology used: HTML,SASS,Javascript ( Vanilla Javascript )",
        "Worked within a team using scrum on a local bus transportation system ( Technologies used were : React, Material UI, Node Js )",
        "Assigned to be a team lead for several sprints within a team of four developers.",
        "Worked with a local german company partnered with Andela as an intern on a E-learning platform.",
      ],
    },
  ],
};

export default portfolioData;
