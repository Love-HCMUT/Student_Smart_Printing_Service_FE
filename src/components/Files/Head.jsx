import plusCircle from "../../assets/plus-circle.svg";
export const Head = () => {
  return (
    <>
      <div className="h-[88.35px] w-[50%] px-[23.08px] pt-[19.23px] pb-[18.27px] justify-start items-center gap-[15.39px] inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[3.85px] inline-flex">
          <div className="self-stretch justify-start items-center gap-[7.69px] inline-flex">
            <div className="text-[#0f1728] text-lg font-medium font-['Inter'] leading-[26.92px]">
              File type Setting
            </div>
          </div>
          <div className="self-stretch text-[#667084] text-sm font-normal font-['Inter'] leading-tight">
            Configure permitted file type
          </div>
        </div>
        <button className="px-6 py-3 bg-[#1488d8] rounded-[50px] justify-center items-center gap-2.5 flex">
          <img
            className=" w-5 h-5 pl-[0.56px] pr-[0.50px] pt-[0.56px] pb-[0.53px] justify-center items-center flex"
            src={plusCircle}
          />
          <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">
            ADD
          </div>
        </button>
      </div>
    </>
  );
}
