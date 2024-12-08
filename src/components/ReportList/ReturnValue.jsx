import { NavLink } from "react-router-dom";

const returnValue = ({ context, month, year }) => {
    return (
        <div className="flex flex-col ml-6 my-4 h-fit min-w-[45%] p-6 bg-white rounded-2xl shadow hover:cursor-pointer hover:opacity-90">
            {context}
            <NavLink
                to={"detail"}
                className="text-center text-black text-xl font-normal font-['Open Sans']"
                state={{ month, year }}
            >
                {(month ? `Tháng ${month} - ${year}` : `Năm ${year}`)}
            </NavLink>
        </div>
    )
}

export default returnValue;