import { useEffect, useState } from "react";
import Header_APP from "../Header/header";

export const UserHeader = ({
  links = [
    {
      label: "Home",
      href: "/user",
    },
    {
      label: "Account Balance",
      href: "balance",
    },
    {
      label: "History",
      href: "history",
    },
    {
      label: "Order",
      href: "order",
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
