import { useRef, useState } from "react";
import searchIcon from "../../assets/search-icon.svg";
export const Search = () => {
  const [value, setValue] = useState("");
  const searchDOM = useRef();

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnClick = (e) => {
    console.log(value);
    setValue("");
  };

  const handleEnter = (e) => {
    if (e.code == "Enter") {
      searchDOM.current.click();
      setValue("");
    }
  };
  return (
    <>
      <div className="h-[42px] w-[588px] p-4 bg-[#f2f2f7] rounded-[20px] shadow justify-between items-center inline-flex">
        <input
          value={value}
          placeholder="Search"
          className="text-[#8e8e93] pl-2 w-full outline-none bg-[#f2f2f7] text-[17px] shrink justify-center flex items-center font-normal font-['SF Pro Text'] leading-snug"
          onChange={handleOnChange}
          onKeyDown={handleEnter}
        />
        <div className="hover:cursor-pointer pr-2 w-7 h-7 justify-center items-center flex ">
          <img
            ref={searchDOM}
            onClick={handleOnClick}
            src={searchIcon}
            alt="Search icon"
            title="Search"
          />
        </div>
      </div>
    </>
  );
};
