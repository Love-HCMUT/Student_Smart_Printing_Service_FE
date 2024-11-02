import Header_APP from "../Header/header";

export const SPSOHeader = ({ highlightedIndex = 0 }) => {
  return (
    <Header_APP
      links={[
        {
          label: "Home",
          href: "/spso/home",
        },
        {
          label: "Manage Printer",
          href: "printer",
        },
        {
          label: "Log",
          href: "log",
        },
        {
          label: "Setting",
          href: "setting",
        },
        {
          label: "Report",
          href: "report",
        },
      ]}
      userName={"Dương Hải Lâm"}
      highlightedIndex={highlightedIndex}
    />
  );
};
