import { IoIosLock } from "react-icons/io";
import { localStrings } from "../../utils/Constants";
import Images from "../../utils/Images";
import { useFunnel } from "../../context/FunnelContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ThankYou = () => {
  const { isUnder18, setProgressBar } = useFunnel();
  const { state } = useLocation();
  useEffect(() => {
    setProgressBar(100);
  });
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col flex-1 items-center">
        <div>
          <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold !mt-8 !mb-2 text-center">
            {localStrings.THANKS_FOR_INTEREST}
          </h1>
          <p className="text-[14px] lg:text-[22px] max-w-[70%] mx-auto text-center whitespace-pre-line !text-[#231F20] !mb-5 ">
            {state?.notInterested ? (
              <>
                {localStrings.CHECK_BACK_SOON}
                <br />
                {localStrings.FEEL_FREE_TO_REACH}{" "}
                <a
                  className="!text-[#231F20]"
                  href={`mailto:${localStrings.SHAPELY_EMAIL}`}
                  target="_blank"
                >
                  {localStrings.SHAPELY_EMAIL}
                </a>{" "}
                {localStrings.FOR_ANY_QUESTION}
              </>
            ) : isUnder18() ? (
              localStrings.SHAPELY_NOT_SERVING_CURRENTLY_PATIENTS_UNDER_18
            ) : (
              localStrings.SHAPELY_NOT_SERVING_CURRENTLY_IN_YOUR_STATE
            )}
          </p>
        </div>
        <img src={Images.Thankyou} alt="" className="md:h-[40vh] max-h-[50vh] max-w-4xl w-full mx-auto object-fill  rounded-lg" />
      </div>
      <div>
        <p className="text-xs sm:text-sm !text-[#231F20] flex gap-2 mt-3 lg:mt-0 items-center max-sm:justify-center text-left">
          <IoIosLock />
          {localStrings.ALL_INFO_SECURE}
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
