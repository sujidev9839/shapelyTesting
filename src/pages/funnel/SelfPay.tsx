import { Card } from "react-bootstrap";
import { localStrings } from "../../utils/Constants";
import ButtonComponent from "../../components/Button";
import { IoIosLock } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useFunnel } from "../../context/FunnelContext";
import { useEffect } from "react";



const SelfPay = () => {
  const navigate = useNavigate();
  const { handleProgressBar, nutritionGoals, setNutritionGoals,insuranceCheck } = useFunnel();
  console.log("insuranceCheck---   ",insuranceCheck?.output?.Acceptable_Insurance);

  const notOverweight =
    // !nutritionGoals?.includes("chronic_kidney_disease") &&
    // !nutritionGoals?.includes("type_1_diabetes") &&
    // !nutritionGoals?.includes("type_2_diabetes") &&
   // !nutritionGoals?.includes("kidney_transplant_in_last_12_months") &&
    !nutritionGoals?.includes("prediebates") &&
    !nutritionGoals?.includes("overweight/obesity");
  return (
    <>
    <div className="flex items-center justify-center flex-col flex-1">
      <h1 className="!md:text-[32px] !text-[20px] max-w-full lg:max-w-[90%] !mb-8 mx-auto !text-[#231F20] !font-semibold !mt-8 !text-pretty text-center">
        {insuranceCheck?.output?.Acceptable_Insurance === "No"
    ? localStrings.WE_CURRENTLY_NOT_IN_NETWORK_WITH_YOUR_INSURANCE:notOverweight
          ? localStrings.SELF_PAY_PROGRAM
          : localStrings.STILL_COVER_WEIGHT_LOSS_PROGRAM}
      </h1>
      <Card className="bg-white lg:max-w-[70%] max-w-full border-0 mx-auto flex items-center justify-center shadow-[0_4px_20px_0_#0000000D] py-6 rounded-[20px] min-h-[200px]">
        {notOverweight ? (
          <p className="text-[14px] lg:text-[22px] font-semibold !text-[#231F20] max-w-[90%] mx-auto !mb-0">
            {localStrings.PAY_JUST_$125}
          </p>
        ) : (
          <>
            <p className="text-[14px] lg:text-[22px] font-semibold !text-[#231F20] md:max-w-[80%] max-w-[90%] text-center  mx-auto !mb-8">
              {localStrings.CURRENTLY_NOT_COVERING_NUTRITION}
            </p>
            <p className="text-[14px] lg:text-[22px] font-semibold !text-[#231F20] max-w-[90%] mx-auto !mb-4">
              {localStrings.AS_PART_OF_PROGRAM}
            </p>
            <ul className="!pl-0">
              {localStrings.BENEFITS_RECEIVE_LIST.map((benefit) => (
                <li className="text-[12px] lg:text-[22px] flex sm:items-center items-start gap-2 mb-2 justify-start font-normal text-[#231F20]">
                  <span
                    className="w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center"
                    style={{ background: "#231F20" }}
                  >
                    <FaCheck className="text-base" style={{ color: "#fff" }} />
                  </span>
                  <span className="text-left">{benefit}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </Card>
      </div>
      <div
        className={`mt-5 flex sm:flex-row flex-col gap-3 justify-center`}
      >
        <ButtonComponent
          buttonText={localStrings.YES_CONTINUE}
          handleButtonClick={() => {
            handleProgressBar();
            navigate("/funnel/match");
          }}
          className="border-0 sm:!mt-4 lg:!mt-10 !px-3 max-w-[350px]  ml-auto"
        />
        <ButtonComponent
          buttonText={localStrings.NO_THANKS}
          handleButtonClick={() =>
            navigate("/funnel/thank-you", {
              state: {
                notInterested: true,
              },
            })
          }
          className="border-0 sm:!mt-4 lg:!mt-10 !px-3 max-w-[350px] !bg-[#231F20] mr-auto"
        />
      </div>
      <p
        className={`text-xs sm:text-sm !text-[#231F20] mt-4 lg:mt-0 flex gap-2 justify-start items-center text-left `}
      >

        <IoIosLock />
        {localStrings.ALL_INFO_SECURE}
      </p>
    </>
  );
};

export default SelfPay;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 