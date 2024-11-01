import shoppingCart from "../../assets/shopping-cart.svg";
export const Stats = ({
  title = "Default Title",
  number = "Default Number",
  icon = shoppingCart,
}) => {
  return (
    <>
      <div className="m-4 w-[337.24px] h-[172px] relative shadow justify-start items-start inline-flex">
        <div className="w-[337.24px] h-[172px] p-10 bg-[#fbfdeb] rounded-[14px] shadow flex gap-16 justify-center align-middle">
          <div className="w-[84.31px] h-[85px] items-center">
            <div className="w-[84.31px] h-[85px] bg-[#00b074]/20 rounded-full">
              <img src={icon} alt="Orders" class="w-full h-full" />
            </div>
          </div>
          <div className="w-[87.27px] h-[98px]">
            <div className="w-[87.27px] h-5 text-[#464154] text-base font-normal font-['Barlow']">
              {title}
            </div>
            <div className="w-[72px] h-[45px] text-[#464154] text-[46px] font-bold font-['Barlow']">
              {number}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
