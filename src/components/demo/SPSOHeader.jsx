import Header_APP from "../Header/header";

export const SPSOHeader = () => {
  return (
    <Header_APP
      links={[
        {
          label: "Home",
          href: "/SPSO",
        },
        {
          label: "Manage Printer",
          href: "SPSO/printer",
        },
        {
          label: "Log",
          href: "SPSO/log",
        },
        {
          label: "Setting",
          href: "SPSO/setting",
        },
        {
          label: "Report",
          href: "SPSO/report",
        },
      ]}
      userName={"Dương Hải Lâm"}
      highlightedIndex={0}
    />
  );
};
