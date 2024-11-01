import Header_APP from "../Header/header";

export const StaffHeader = () => {
  return (
    <Header_APP
      links={[
        {
          label: "Home",
          href: "/staff",
        },
        {
          label: "Printing Manager",
          href: "staff/printing",
        },
      ]}
      userName={"Dương Hải Lâm"}
      highlightedIndex={0}
    />
  );
};
