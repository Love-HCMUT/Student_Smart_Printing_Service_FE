import Header_APP from "../Header/header";

export const UserHeader = () => {
  return (
    <Header_APP
      links={[
        {
          label: "Home",
          href: "/user",
        },
        {
          label: "Account Balance",
          href: "user/balance",
        },
        {
          label: "History",
          href: "user/history",
        },
        {
          label: "Order",
          href: "user/order",
        },
      ]}
      userName={"Dương Hải Lâm"}
      highlightedIndex={0}
    />
  );
};
