const avatarNameMaker = (name: string | undefined): string => {
  const firstName = name?.split(" ")[0]?.toUpperCase();
  const lastName = name?.split(" ")[name?.split(" ").length - 1]?.toUpperCase();
  if (lastName) {
    const firstLetter = firstName?.split("")[0];
    const lastLetter = lastName.split("")[0];
    return `${firstLetter}${lastLetter}`;
  } else {
    return `${firstName?.split("")[0]}`;
  }
};

export default avatarNameMaker;
