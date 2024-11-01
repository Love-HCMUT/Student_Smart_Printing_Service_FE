import Header_APP from "../Header/header";

export const AfterLoginHeader = () => {
  return (
    <Header_APP
      links={[
        {
          label: "User",
          href: "/user/home",
        },
        {
          label: "Staff",
          href: "/staff/home",
        },
        {
          label: "SPSO",
          href: "/spso/home",
        },
      ]}
      userName={"Dương Hải Lâm"}
      highlightedIndex={0}
    />
  );
};
