import plusCircle from "../../assets/plus-circle.svg";
export const Head = ({ types, setTypes }) => {
  const handleOnClick = () => {
    const result = prompt("Please enter a new file type:");
    setTypes({ ...types, [result]: 1 });
  };
  return (
    <>
      <div className="h-full w-[50%] p-5 justify-start items-center gap-[16px] inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[4px] inline-flex">
          <div className="self-stretch justify-start items-center gap-[8px] inline-flex">
            <div className="text-[#0f1728] text-lg font-medium font-['Inter'] leading-[24px]">
              File type Setting
            </div>
          </div>
          <div className="self-stretch text-[#667084] text-sm font-normal font-['Inter'] leading-tight">
            Configure permitted file type
          </div>
        </div>
        <button
          onClick={handleOnClick}
          className="px-6 py-3 bg-[#1488d8] rounded-[50px] justify-center items-center gap-2.5 flex"
        >
          <img
            className=" w-5 h-5 justify-center items-center flex"
            src={plusCircle}
          />
          <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">
            ADD
          </div>
        </button>
      </div>
    </>
  );
};
