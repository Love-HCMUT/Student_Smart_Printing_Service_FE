export const Description = ({ title, description }) => {
  return (
    <>
      <div className="h-[88.35px] px-[23.08px] pt-[19.23px] pb-[18.27px] justify-start items-center gap-[15.39px] inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[3.85px] inline-flex">
          <div className="self-stretch justify-start items-center gap-[7.69px] inline-flex">
            <div className="text-[rgb(15,23,40)] text-lg font-medium font-['Inter'] leading-[26.92px]">
              {title}
            </div>
          </div>
          <div className="self-stretch text-[#667084] text-sm font-normal font-['Inter'] leading-tight">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};
