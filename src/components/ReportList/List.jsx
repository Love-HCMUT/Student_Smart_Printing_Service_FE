import { Year } from "./Year";
import { Month } from "./Month";

export const List = ({ names, year, data }) => {

  return (
    <>
      <div className={`grid grid-cols-${names.length} gap-2 w-full`}>
        {names.map((item, index) => {
          return year ? (
            <Year key={index} data={item} chartData={data} />
          ) : (
            <Month key={index} data={item} chartData={data[index]} />
          );
        })}
      </div>
    </>
  );
};