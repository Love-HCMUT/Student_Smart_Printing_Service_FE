import { Head } from "./Head.jsx";
import { Filters } from "./Filters.jsx";
import { Search } from "./Search.jsx";
import { Input } from "./Input.jsx";
import { Description } from "./Description.jsx";
import { List } from "./List.jsx";
export const ReportList = () => {
  return (
    <>
      <div className="m-auto max-w-[50%] max-h-[50%] flex flex-col justify-center align-middle">
        <div className="m-auto inline-flex flex-col">
          <Head>
            <Filters />
            <Search />
            <Input label="Month" min={1} max={12} />
            <Input label="Year" min={2000} max={2050} />
          </Head>
          <Description title="Report" description="Monthly/Yearly Reports" />
          <div className="w-full">
            <List
              names={[
                { month: 12, year: 2024 },
                { month: 11, year: 2024 },
                { month: 10, year: 2024 },
              ]}
            />
          </div>
          <div className="w-full flex justify-center">
            <List names={[{ year: 2023 }]} year />
          </div>
        </div>
      </div>
    </>
  );
};
