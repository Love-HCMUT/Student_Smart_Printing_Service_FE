import barsFilterIcon from "../../assets/bars-filter.svg";
export const Filters = () => {
  return (
    <>
      <div className="hover:cursor-pointer h-10 px-4 py-2.5 bg-white rounded-lg shadow border border-[#cfd4dc] justify-center items-center gap-2 inline-flex">
        <div className="w-5 h-5 relative">
          <img src={barsFilterIcon} alt="Bars Filters icon" title="Filter" />
        </div>
        <div className="text-[#344053] text-sm font-['Circular Std'] leading-tight">
          Filters
        </div>
      </div>
    </>
  );
};
