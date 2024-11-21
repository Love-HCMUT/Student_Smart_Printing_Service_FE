import Header_APP from "../Header/header";

export const UserHeader = () => {
  return (
    <Header_APP
      links={[
        {
          label: "Home",
          href: "/user/home",
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
      ]}
      userName={"Dương Hải Lâm"}
      highlightedIndex={0}
    />
  );
};
