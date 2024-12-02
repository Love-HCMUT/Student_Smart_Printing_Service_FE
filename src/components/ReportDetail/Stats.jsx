import shoppingCart from "../../assets/shopping-cart.svg";
export const Stats = ({
  title = "Default Title",
  number = "Default Number",
  icon = shoppingCart,
}) => {
  return (
    <>
      <div className="m-4 w-[50%] h-[50%] relative shadow justify-start items-start inline-flex">
        <div className="w-full h-full p-10 bg-[#fbfdeb] rounded-[14px] shadow flex gap-16 justify-center align-middle">
          <div className="w-[30%] h-[30%] items-center">
            <div className="w-full h-full bg-[#00b074]/20 rounded-full">
              <img src={icon} alt="Orders" className="w-full h-full" />
            </div>
          </div>
          <div className="w-[30%] h-[30%]">
            <div className="w-full h-5 text-[#464154] text-base font-normal font-['Barlow']">
              {title}
            </div>
            <div className="w-full h-full text-[#464154] text-[46px] font-bold font-['Barlow']">
              {number}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
