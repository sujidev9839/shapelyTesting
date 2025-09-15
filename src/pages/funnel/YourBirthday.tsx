import DatePicker from "react-datepicker"
import { localStrings } from "../../utils/Constants"
import ButtonComponent from "../../components/Button";
import { IoIosLock } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFunnel } from "../../context/FunnelContext";

const YourBirthday = () => {
    const navigate = useNavigate()
    const { insurancePlan, handleProgressBar, birthDate, setBirthDate, isUnder18 } = useFunnel()

    return (
        <>
        <div className="you-birthday flex-1 flex flex-col sm:justify-center">
            <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold !mt-8 !mb-2 text-center">
                {localStrings.YOUR_BIRTHDAY}
            </h1>
            <p className="text-[14px] lg:text-[22px] w-full lg:w-[70%] mx-auto !text-[#231F20] text-center !mb-8">{insurancePlan === "self-pay" || insurancePlan === "other" ? localStrings.EIGHTEEN_OLDER : localStrings.WE_NEED_THIS_INFO}</p>
            <DatePicker
            wrapperClassName="flex justify-center"
                className="date-picker-birthday w-full"
                selected={birthDate}
                onChange={(date: any) => {
                    setBirthDate(date)
                }}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                maxDate={new Date()}
            />
                </div>
            <div>
                <div className="flex justify-center">
                    <ButtonComponent
                        buttonText={localStrings.CONTINUE}
                        handleButtonClick={() => {
                            if (isUnder18()) {
                                navigate("/funnel/thank-you")
                                return;
                            }
                            handleProgressBar();
                            navigate("/funnel/insurance-details")
                        }}
                        className="!mt-10" />
                </div>
                <p className="text-xs sm:text-sm !text-[#231F20] flex gap-2 items-center max-sm:justify-center mt-3">
                    <IoIosLock />
                    {localStrings.ALL_INFO_SECURE}
                </p>
            </div>
        </>
    )
}

export default YourBirthday