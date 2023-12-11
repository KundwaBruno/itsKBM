type PortfolioDta = {
  name__abbr: string;
  prodUrl: string;
  full__name: string;
  salutation: string;
  homeDescription: string;
  meta__img: string;
  passion: string;
  copyright: string;
  resume__link: string;
  tech_stacks: { title: string; icon: string }[];
  recent_technologies: string[];
  about: {
    bio: string;
    contactDescription: string;

    contact: {
      name: string;
      data: string;
      icon: any;
    }[];
  };
  projects: {
    title: string;
    description: string;
    data: {
      title: string;
      description: string;
      imageUrls: string[];
      links: { url: string; type: 'github' | 'link' | 'learn more' }[];
      techs: string[];
    }[];
  };
  experience: {
    company: string;
    position: string;
    companyLink: string;
    timeFrame: string;
    length: string;
    location: string;
    description: string[];
  }[];
};

export default PortfolioDta;
