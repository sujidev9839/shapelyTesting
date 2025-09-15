import { IoIosLock } from "react-icons/io"
import { localStrings } from "../../utils/Constants"
import Images from "../../utils/Images"

const NextSteps = () => {
    return (
        <div className="min-h-[60vh] sm:min-h-[80vh] flex items-start justify-start flex-col overflow-x-clip">
            <h1 className="!text-[28px] lg:!text-[52px] w-[100%] mx-auto !text-[#231F20] !font-semibold !mt-8 !mb-5 !m-0">
                {localStrings.YOU_ARE_ALL_SET}
            </h1>
            <div className="w-full max-w-3xl mx-auto flex-1">
                {localStrings.STEPS("April 19, 2025 at 4:20 PM PST").map((step, index) => (
                    <div className={`flex items-start mb-4 ${step.LIST ? "" : "gap-3"}`} key={index}>
                        <span className={`lg:w-[58px] lg:h-[58px] w-[32px] h-[32px] mt-2 text-white text-[14px] lg:text-[22px] font-semibold rounded-full flex items-center justify-center ${step.LIST ? "me-3" : ""}`}
                            style={{ background: "#089DF4", flexShrink: 0 }}
                        >{index + 1}</span>
                        <div className="flex flex-col items-start">
                        <h4 className="!text-base !font-normal text-left flex flex-col items-start justify-start">
                            <b className="!font-semibold text-xl pe-2">
                                {step.HEADING}
                            </b>
                            {step.SUBHEADING}
                        </h4>
                        {step.LIST ?
                            <ul className="w-full p-0">
                                <li className="list-disc text-left text-base">
                                    Your appointment is scheduled for April 19, 2025 at 4:20 PM PST
                                </li>
                                <li className="list-disc text-left text-base">
                                    You'll receive a secure video link via email to join your video visit. Please join 5 minutes early to ensure everything is working properly.
                                </li>
                            </ul> : ""
                        }
                        </div>
                    </div>
                ))}
                <div className="flex justify-between">
                <img src={Images.AllSet1} alt="" className="relative lg:fixed !bottom-[-16px] lg:!bottom-0 !left-[-8.1%] lg:!left-0 h-[50vh] lg:h-[60vh] object-cover" />
                <img src={Images.AllSet2} alt="" className="relative lg:fixed !bottom-[-16px] lg:!bottom-12 !right-[-8.1%] lg:!right-0 h-[50vh] lg:h-[60vh] object-cover" />
                </div>
                <p className="text-sm fixed hidden bottom-2 left-4 !text-[#231F20] lg:flex gap-2 items-center text-left">
                <IoIosLock />
                {localStrings.ALL_INFO_SECURE}
            </p>
            </div>
        </div>
    )
}

export default NextSteps