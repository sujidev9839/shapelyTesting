import { IoIosLock } from "react-icons/io"
import ButtonComponent from "../../components/Button"
import { localStrings } from "../../utils/Constants"
import Images from "../../utils/Images"
import { useNavigate } from "react-router-dom"
import { useFunnel } from "../../context/FunnelContext"

const Match = () => {
    const navigate = useNavigate()
    const { handleProgressBar } = useFunnel()
    const url = "/funnel/scheduled-call/?appointment_name=Initial%20Medicare%20Provider%20Consultation&first_name=test&last_name=sujit&email=test@yopmail.com&phone_number=9023256655&&offering_id=47848&dietitian_id=2612119&state=California&org_level=true"
    return (
        <>
            <div className="flex-1 flex flex-col items-center">
                <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold !mt-8 !mb-2">
                    {localStrings.YOU_COVERED}
                </h1>
                <p className="text-[14px] lg:text-[22px] sm:max-w-[50%] mx-auto max-sm:text-center whitespace-pre-line !text-[#231F20] !mb-5">{localStrings.BASED_ON_ANS}</p>
                <p className="text-xl font-semibold whitespace-pre-line mx-auto !text-[#231F20] !mb-3">{localStrings.MEET_MATCH}</p>
                <div className="bg-[#EFEFEF] mx-auto w-[250px] h-[250px] mb-3">
                    <img src={Images.DefaultDieticianThumbnail} className="w-full h-full object-cover" alt="" />
                </div>
                <p className="text-xl font-semibold mb-2">
                    Megan Murphy, RDN
                </p>
                <p className="text-base font-medium mb-3">
                    Specialist in weight loss & hormone health
                </p>
            </div>
            <div className="">
                <div className="w-full flex justify-center">
                    <ButtonComponent
                        buttonText={localStrings.BOOK_YOUR_VISIT}
                        handleButtonClick={() => {
                            handleProgressBar();
                            navigate(url)
                        }}
                        className="border-0 !mt-3 "
                    />
                </div>
                <p className="text-base text-[#231F20] font-medium mt-3 mx-auto w-max">
                    {localStrings.QUESTIONS}{" "}
                    <span className="text-[#FF789A] underline">
                        {localStrings.TALK_TO_COORDINATOR}
                    </span>
                </p>
                <p className="text-xs sm:text-sm !text-[#231F20] flex gap-2 items-center  mt-3">
                    <IoIosLock />
                    {localStrings.ALL_INFO_SECURE}
                </p>
            </div>
        </>
    )
}

export default Match