import { localStrings } from "../../utils/Constants";
import Select from "react-select";
import ButtonComponent from "../../components/Button";
import { IoIosLock } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { states } from "../../utils/formConstants";
import { useFunnel } from "../../context/FunnelContext";


export const allowedStates = ["california", "florida", "newyork", "texas"];

function YourState() {
  const navigate = useNavigate();
  const { selectedState, setSelectedState, handleProgressBar } = useFunnel();

  const handleSubmit = () => {
    handleProgressBar();
    const normalizedState = selectedState.value
      ?.replace(/\s+/g, "")
      .toLowerCase();
      

    if (allowedStates.includes(normalizedState)) {
      navigate("/funnel/testimonial");
    } else navigate("/funnel/insurance-plan");
  };

  return (
    <>
    <div className="flex sm:justify-center justify-start flex-col text-center items-center py-4 flex-1">
      <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] sm:text-left  !font-semibold !mb-2">
        {localStrings.WHICH_STATE_LIVE_IN}
      </h1>
      <p className="text-[14px] lg:text-[22px] !text-[#231F20] !mb-4">
        {localStrings.MATCH_WITH_REGISTERED_DIETITIAN_ID}
      </p>
      <Select
        value={selectedState}
        onChange={(e: any) => setSelectedState(e)}
        options={states}
        placeholder="Select State"
        className="!w-full lg:!w-[30%] stateSelect"
      />
        </div>
      <div>
        <div className="flex justify-center">
          <ButtonComponent
            buttonText={localStrings.CONTINUE}
            handleButtonClick={handleSubmit}
            className=""
          />
        </div>
        <p className="text-xs sm:text-sm !text-[#231F20] flex gap-2 items-center max-sm:justify-center  mt-3">
          <IoIosLock />
          {localStrings.ALL_INFO_SECURE}
        </p>
      </div>
      </>
  );
}

export default YourState;
