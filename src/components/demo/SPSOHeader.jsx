import Header_APP from "../Header/header";

export const SPSOHeader = ({
  links = [
    {
      label: "Home",
      href: "/spso",
    },
    {
      label: "Manage Printer",
      href: "printer",
    },
    {
      label: "Log",
      href: "log",
      subLinks: [
        { label: "Printing", href: "log/printing" },
        { label: "Payment", href: "log/payment" },
      ],
    },
    {
      label: "Setting",
      href: "setting",
      subLinks: [
        { label: "Paper", href: "setting/paper" },
        { label: "File", href: "setting/file" },
      ],
    },
    {
      label: "Report",
      href: "report",
    },
    {
      label: "Authorization",
      href: "author",
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
