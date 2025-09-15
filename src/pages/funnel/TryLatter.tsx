import { IoIosLock } from "react-icons/io"
import { localStrings } from "../../utils/Constants"

const StillProcessing = () => {
  return (
    <div className="flex flex-col justify-between mt-20 flex-1">
       <div>
           <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold !mt-8 !mb-2 text-center">{localStrings.STILL_CHECKING}</h1>
           <p className="text-[14px] lg:text-[22px] sm:max-w-[70%] mx-auto text-center whitespace-pre-line !text-[#231F20] !mb-5 ">{localStrings.WAITING_TO_HEAR} </p>
       </div>
    <div>
            <p className="text-xs sm:text-sm !text-[#231F20] flex gap-2 mt-3 lg:mt-0 items-center max-sm:justify-center text-left">
              <IoIosLock />
              {localStrings.ALL_INFO_SECURE}
            </p>
          </div>
    </div>
  )
}

export default StillProcessing