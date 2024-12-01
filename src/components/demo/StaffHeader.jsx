import Header_APP from "../Header/header";
import { useEffect, useState } from "react";



export const StaffHeader = ({
  links = [
    {
      label: "Home",
      href: "/staff",
    },
    {
      label: "Printing Manager",
      href: "printing",
    },
  ],
  highlightedIndex = 0,
}) => {

  const [usename, setUsername] = useState('')

  useEffect(() => {
    const un = localStorage.getItem('username')
    setUsername(un)
  }, [])


  return (
    <Header_APP
      links={links}
      userName={usename}
      highlightedIndex={highlightedIndex}
    />
  );
};
