export const Foot = ({ func }) => {
  return (
    <>
      <button
        onClick={func}
        className="w-[50%] h-[50%] p-4 bg-[#5570f1] rounded-xl shadow justify-center items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 text-center text-white text-xl font-normal font-['Inter']">
          Save
        </div>
      </button>
    </>
  );
};
