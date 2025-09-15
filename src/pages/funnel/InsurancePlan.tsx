import { Col, Row } from "react-bootstrap";
import { localStrings } from "../../utils/Constants";
import { insurancePlanList } from "../../utils/formConstants";
import ButtonComponent from "../../components/Button";
import { IoIosLock } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFunnel } from "../../context/FunnelContext";
import toast from "react-hot-toast";
import { allowedStates } from "./YourState";

type CategoryButtonProps = {
  buttonText: string;
  onClick: () => void;
  value: string;
};
const InsurancePlan = () => {
  const navigate = useNavigate();
  const { insurancePlan, setInsurancePlan, handleProgressBar, selectedState } =
    useFunnel();

  const checkOptions = ["self-pay", "other"];

  const CategoryButton = ({
    buttonText,
    value,
    onClick,
  }: CategoryButtonProps) => (
    <button
      className={`!border-2 w-full items-center flex gap-2 !rounded-[11px] p-3 !text-sm lg:!text-lg ${
        insurancePlan === value
          ? "!bg-[#089DF4] text-white !border-[#089DF4]"
          : "!border-[#F1DEDE] bg-white"
      }`}
      onClick={onClick}
    >
      <span
        className={`w-[23px] h-[23px] rounded-full shrink-0 ${
          insurancePlan === value
            ? "w-[15px] h-[15px] border-[4px] border-[#fff]"
            : "border-2 w-[23px] h-[23px] border-[#F1DEDE]"
        }`}
      />
      {buttonText}
    </button>
  );

  const handleClick = () => {
    if (!insurancePlan) {
      toast.error("Please select an option");
      return;
    }
    const normalizedState = selectedState.value
      ?.replace(/\s+/g, "")
      .toLowerCase();
    if (
      allowedStates.includes(normalizedState) &&
      checkOptions.includes(insurancePlan)
    ) {
      navigate("/");
    }

    handleProgressBar();
    navigate("/funnel/dietitian");
  };

  return (
    <>
      <div className="flex-1 flex flex-col items-center">
        <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold !mt-8 !mb-2">
          {localStrings.INSURANCE_PLAN}
        </h1>
        <p className="text-[14px] lg:text-[22px] w-full lg:w-[70%] mx-auto !text-[#231F20] !mb-5">
          {localStrings.ACCEPT_MAJOR_PPO}
        </p>
        <Row className="w-full lg:max-w-4xl mx-auto">
          {insurancePlanList?.map((nutritionGoal) => (
            <Col md={6} className="mb-3" key={nutritionGoal.label}>
              <CategoryButton
                key={nutritionGoal.value}
                buttonText={nutritionGoal.label}
                value={nutritionGoal.value}
                onClick={() => setInsurancePlan(nutritionGoal.value)}
              />
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <div className="flex justify-center">
          <ButtonComponent
            buttonText={localStrings.CONTINUE}
            handleButtonClick={handleClick}
            className="border-0 !mt-10"
          />
        </div>
        <p className="text-xs sm:text-sm !text-[#231F20] flex gap-2 mt-3 lg:mt-0 items-center max-sm:justify-center text-left">
          <IoIosLock />
          {localStrings.ALL_INFO_SECURE}
        </p>
      </div>
    </>
  );
};

export default InsurancePlan;
