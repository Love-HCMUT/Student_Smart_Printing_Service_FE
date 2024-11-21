import Package from "../Order/Package";
import Note from "../Payment/Note";

export const UserOrder = () => {
  return (
    <>
      <div className="mt-[40px] w-screen flex flex-col justify-center align-middle items-center">
        <Package />
        <button className="items-center rounded-xl bg-blue-600 mt-8 p-4">
          Add more package
        </button>
        <div className="w-[50%] shirnk mt-4">
          <Note />
        </div>
        <button className="w-[50%] mb-4 rounded-xl bg-blue-600 mt-8 p-4">
          Next
        </button>
      </div>
    </>
  );
};
