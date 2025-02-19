import { Head } from "./Head.jsx";
import { Filters } from "./Filters.jsx";
import { Search } from "./Search.jsx";
import { Input } from "./Input.jsx";
import { Description } from "./Description.jsx";
import { List } from "./List.jsx";
import { getRecentlyMonthlyOrder } from "../../services/statistic-spso-api.js";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ReportList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    listCurrentMonth: [],
    monthYear: [],
  });
  const currentYear = new Date().getFullYear();
  const [month, setMonth] = useState(``);
  const [year, setYear] = useState(``);
  const getThreeLatestMonths = () => {
    const names = [];
    const date = new Date();
    for (let i = 0; i < 3; i++) {
      const newDate = new Date(date.getFullYear(), date.getMonth() - i, 1);
      names.push({ month: newDate.getMonth() + 1, year: newDate.getFullYear() });
    }
    return names;
  };

  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const data = await getRecentlyMonthlyOrder(new Date().getMonth() + 1, new Date().getFullYear());
        console.log("Fetched data:", data)
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchApi();
  }, []);

  const handleKeyboardEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };
  const handleSubmit = async () => {
    if (month !== `` && year !== ``) {
      console.log(month, year);
      // Navigate to detail page
      navigate(`/spso/report/detail`, { state: { month, year } });
    }
  };

  return (
    <>
      <div className="m-auto max-w-[70%] flex flex-col justify-center align-middle">
        <div className="mt-4 inline-flex flex-col w-full">
          <Head>
            <Filters />
            <Search />
            <form className="flex" onKeyDown={handleKeyboardEnter}>
              <Input label="Month" min={1} max={12} onChange={setMonth} />
              <Input label="Year" min={2000} max={currentYear} onChange={setYear} />
            </form>
          </Head>
          <Description title="Report" description="Monthly/Yearly Reports" />
          <div className="w-full">
            <List
              names={getThreeLatestMonths()}
              data={data.listCurrentMonth}
            />
          </div>
          <div className="w-full flex justify-center mb-4">
            <List names={[{ year: getYear() }]} year data={data.monthYear} />
          </div>
        </div>
      </div>
    </>
  );
};
