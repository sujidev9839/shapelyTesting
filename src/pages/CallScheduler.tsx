import { useContext } from "react";
import DateTimeSelector from "./DateAndTimeSelector";
import OnboardSteps from "./OnboardSteps";
import UserInformation from "./UserInformation";
import { CallSchedulerContext } from "../context/CallSchedulerContext";
import Images from "../utils/Images";

function CallScheduler() {
    const context = useContext(CallSchedulerContext);
    if (!context) {
        return;
    }

    const { step } = context;
    return (
        <div className="mainContainer relative z-[1] px-4 min-h-screen w-full text-[14px] lg:text-[22px]">
            <img src={Images.Logo} alt="Logo" className="h-8" />
            <div className="mt-4 text-start contentContainer w-[75%] mx-auto">
                {step === "dateTime" && <DateTimeSelector isFromFunnel={false} />}
                {step === "userInfo" && <UserInformation />}
                {step === "onboardSteps" && <OnboardSteps />}
            </div>
        </div>
    )
}

export default CallScheduler