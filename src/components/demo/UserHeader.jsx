import Header_APP from "../Header/header";

export const UserHeader = ({
  links = [
    {
      label: "Home",
      href: "/user",
    },
    {
      label: "Account Balance",
      href: "balance",
    },
    {
      label: "History",
      href: "history",
    },
    {
      label: "Order",
      href: "order",
    },
  ],
  userName = "Dương Hải Lâm",
  highlightedIndex = 0,
}) => {
  return (
    <Header_APP
      links={links}
      userName={userName}
      highlightedIndex={highlightedIndex}
    />
  );
};
