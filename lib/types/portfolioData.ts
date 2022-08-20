type PortfolioDta = {
  name__abbr: string;
  full__name: string;
  salutation: string;

  passion: string;
  looking__into: string;
  status: string;
  profile__image: string;
  copyright: string;
  current__status: string;
  resume__link: string;
  tech_stacks: { title: string; icon: string }[];
  recent_technologies: string[];
  about: {
    bio: string;
    contact: {
      name: string;
      data: string;
      icon: any;
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
