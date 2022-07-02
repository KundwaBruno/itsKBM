import PortfolioData from "./types/portfolioData";

const portfolioData: PortfolioData = {
  name__abbr: "KBM",
  full__name: "Kundwa Bruno",
  salutation: "Hello there, I'm",
  passion: "Frontend web developer",
  profile__image: "/assets/images/profile.png",
  current__status: "Open to offers",
  resume__link: "https://itskbm.com/resume.pdf",
  copyright: "Built with courage by KBM",
  tech_stacks: [
    {
      title: "Software engineer",
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
      title: "Next Js",
      icon: "fab fa-react",
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
      title: "Git/github",
      icon: "fab fa-github",
    },
    {
      title: "Firebase",
      icon: "fab fa-google",
    },
  ],
  about: {
    bio: `Hi again!, My name is <a href='https://www.linkedin.com/in/kundwabruno/' target='_blank'>Kundwa Bruno Materne</a>, I am a frontend developer ( heavy ) but also does some backend in my freetime. I joined the carrer of web development back in 2019 after completing college in computer science. I joined an Engineering apprenticeship at <a href="https://andela.com" target="_blank">Andela Rwanda</a> which populated me with the right skills, courage and love that i have right now for Web technologies.  <p>Up to today, I 've committed to this journey for over 2+ years now, Gaining <a href='/experience'>experience</a> and skills from great influencers like <a href='https://udemy.com/' target='_blank'>Udemy</a>, <a href='https://freecodecamp.org/' target='_blank'>FreeCodeCamp</a> and so many other sources from the internet.</p>`,
    contact: [
      { name: "Email", data: "kundwabruno@gmail.com", icon: "email" },
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
      company: "Andela",
      position: "Developer apprentive",
      from: "11-11-1999",
      to: "11-11-1999",
      length: "10 Yrs",
      location: "Kigali-Rwanda",
      description: [
        `Lorem ipsum dolor`,
        `Lorem ipsum dolor`,
        `Lorem ipsum dolor`,
      ],
    },
  ],
};

export default portfolioData;
