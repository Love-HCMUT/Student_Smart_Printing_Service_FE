import { Head } from "./Head.jsx";
import { Filters } from "./Filters.jsx";
import { Search } from "./Search.jsx";
import { Input } from "./Input.jsx";
import { Description } from "./Description.jsx";
import { List } from "./List.jsx";
export const ReportList = () => {
  return (
    <>
      <div className="m-auto max-w-50% max-h-50% flex flex-col justify-center align-middle">
        <div className="m-auto inline-flex flex-col">
          <Head>
            <Filters />
            <Search />
            <Input label="Month" min={1} max={12} />
            <Input label="Year" min={2000} max={2050} />
          </Head>
          <Description title="Report" description="Monthly/Yearly Reports" />
        </div>
        <List
          names={[
            [12, 2024],
            [11, 2024],
            [10, 2024],
            [9, 2024],
            [8, 2024],
            [7, 2024],
          ]}
        />
        <List names={[2023, 2022, 2021, 2020, 2019, 2018]} year />
      </div>
    </>
  );
};
