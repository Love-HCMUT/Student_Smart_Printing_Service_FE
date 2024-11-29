import { Head } from "./Head.jsx";
import { Filters } from "./Filters.jsx";
import { Search } from "./Search.jsx";
import { Input } from "./Input.jsx";
import { Description } from "./Description.jsx";
import { List } from "./List.jsx";
import { getRecentlyMonthlyOrder } from "../../services/statistic-spso-api.js";

import { useState, useEffect, useMemo } from "react";

export const ReportList = () => {
  const [data, setData] = useState({
    listCurrentMonth: [],
    monthYear: [],
  });

  const getThreeLatestMonths = () => {
    const names = []
    for (let i = 0; i < 3; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      names.push({ month: date.getMonth() + 1, year: date.getFullYear() });
    }
    return names;
  }

  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  }

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getRecentlyMonthlyOrder();
      setData(data)
    }
    fetchApi()
  }, [])

  return (
    <>
      <div className="m-auto max-w-[70%] h-screen flex flex-col justify-center align-middle">
        <div className="m-auto inline-flex flex-col w-full">
          <Head>
            <Filters />
            <Search />
            <Input label="Month" min={1} max={12} />
            <Input label="Year" min={2000} max={2050} />
          </Head>
          <Description title="Report" description="Monthly/Yearly Reports" />
          <div className="w-full">
            <List
              names={getThreeLatestMonths()}
              data={data.listCurrentMonth}
            />
          </div>
          <div className="w-full flex justify-center">
            <List names={[{ year: getYear() }]} year data={data.monthYear} />
          </div>
        </div>
      </div>
    </>
  );
};
