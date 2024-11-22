import Header_APP from "../Header/header";

export const StaffHeader = ({
  links = [
    {
      label: "Home",
      href: "/staff/home",
    },
    {
      label: "Printing Manager",
      href: "printing",
    },
  ],
  username = "Dương Hải Lâm",
  highlightedIndex = 0,
}) => {
  return (
    <Header_APP
      links={links}
      userName={username}
      highlightedIndex={highlightedIndex}
    />
  );
};
