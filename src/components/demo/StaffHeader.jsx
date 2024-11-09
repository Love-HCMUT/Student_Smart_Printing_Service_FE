import Header_APP from "../Header/header";

export const StaffHeader = () => {
  return (
    <Header_APP
      links={[
        {
          label: "Home",
          href: "/staff/home",
        },
        {
          label: "Printing Manager",
          href: "printing",
        },
      ]}
      userName={"Dương Hải Lâm"}
      highlightedIndex={0}
    />
  );
};
