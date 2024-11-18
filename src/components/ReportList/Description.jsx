export const Description = ({ title, description }) => {
  return (
    <>
      <div className="h-full p-[24px] justify-start items-center gap-[16px] inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[4px] inline-flex">
          <div className="self-stretch justify-start items-center gap-[8px] inline-flex">
            <div className="text-[rgb(15,23,40)] text-lg font-medium font-['Inter'] leading-[24px]">
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
