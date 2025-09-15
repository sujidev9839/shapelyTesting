import { IoIosLock } from "react-icons/io"
import ButtonComponent from "../../components/Button"
import { localStrings } from "../../utils/Constants"
import Images from "../../utils/Images"
import { useNavigate } from "react-router-dom"
import { useFunnel } from "../../context/FunnelContext"

const Testimonial = () => {
    const navigate = useNavigate()
    const { handleProgressBar } = useFunnel()
    return (
        <>
            <div className="flex flex-col items-center flex-1">
                <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold !mt-8 !mb-2 text-center">
                    {localStrings.IN_A_GOOD_COMPANY}
                </h1>
                <p className="text-[14px] lg:text-[22px] w-full lg:w-[70%] mx-auto !text-[#231F20] !mb-5 text-center">{localStrings.THOUSANDS_OF_PEOPLE}</p>
                <ul className="flex gap-3 w-full max-w-4xl mb-5 mx-auto !pl-0 md:flex-row flex-col">
                    {localStrings.BENEFITS_LITS.map((benefit) => (
                        <li className="flex text-[13px] lg:text-[20px] md:items-start justify-center items-center  text-pretty text-left  gap-2" key={benefit}>
                            <img src={Images.CheckmarkIcon} className="w-6 h-6 lg:mt-2 md:mt-1" />
                            {benefit}</li>
                    ))}
                </ul>
                <div className="flex items-center gap-4 w-full lg:w-[50%] mb-4 mx-auto">
                    <img src={Images.TestimonialImage} className="max-sm:w-28 h-44" alt="" />
                    <div className="flex items-start flex-col">
                        <h4 className="sm:text-[25px] !text-base text-left !font-medium text-[#231F20]">
                            "My dietitian changed my life. I feel healthier, happier, and more in control."
                        </h4>
                        <p className="!text-sm lg:!text-lg text-[#231F20] font-normal text-start">Michelle G., Verified Shapely Patient</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center w-full lg:w-[50%] mx-auto flex-wrap justify-center">
                    {Images.TestimonialImages.map((image) => <img src={image} alt="" className="max-sm:w-14 object-cover" />)}
                </div>
            </div>
            <ButtonComponent
                buttonText={localStrings.CONTINUE}
                handleButtonClick={() => {
                    handleProgressBar();
                    navigate("/funnel/insurance-plan")
                }} className="!mt-10 mx-auto " />
            <p className="text-xs sm:text-sm !text-[#231F20] flex gap-2 items-center max-sm:justify-center mt-3 lg:mt-0">
                <IoIosLock />
                {localStrings.ALL_INFO_SECURE}
            </p>
        </>
    )
}

export default Testimonial