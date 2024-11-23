import Header_APP from "../Header/header";

export const SPSOHeaderSetting = ({ highlightedIndex = 0 }) => {
  return (
    <Header_APP
      links={[
        {
          label: "Paper",
          href: "paper",
        },
        {
          label: "File",
          href: "file",
        },
      ]}
      userName={"Dương Hải Lâm"}
      highlightedIndex={highlightedIndex}
    />
  );
};
