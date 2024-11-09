import Header_APP from "../Header/header";

export const SPSOHeaderLog = ({ highlightedIndex = 0 }) => {
  return (
    <Header_APP
      links={[
        {
          label: "Printing",
          href: "printing",
        },
        {
          label: "Payment",
          href: "payment",
        },
      ]}
      userName={"Dương Hải Lâm"}
      highlightedIndex={highlightedIndex}
    />
  );
};
