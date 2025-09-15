import { Col, Row } from "react-bootstrap";
import { localStrings } from "../../utils/Constants";
import { diagnoses } from "../../utils/formConstants";
import { useFunnel } from "../../context/FunnelContext";
import ButtonComponent from "../../components/Button";
import { IoIosLock } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Diagnose = {
  label: string;
  value: string;
};

type CategoryButtonProps = {
  buttonText: string;
  onClick: () => void;
  value: string;
};

const SelectDiagnoses = () => {
  const { nutritionGoals, setNutritionGoals, handleProgressBar } = useFunnel();
  const navigate = useNavigate();

  const handleButtonClick = (value: string) => {
    if (nutritionGoals.includes(value)) {
      setNutritionGoals(nutritionGoals.filter((g: any) => g !== value));
    } else {
      setNutritionGoals([...nutritionGoals, value]);
    }
    console.log("option select - ",nutritionGoals);
  };

  const CategoryButton = ({
    buttonText,
    value,
    onClick,
  }: CategoryButtonProps) => (
    <button
      className={`!border-2 w-full flex gap-2 !rounded-[11px] h-full p-3 !text-sm lg:!text-lg ${
        nutritionGoals.includes(value)
          ? "!bg-[#089DF4] text-white !border-[#089DF4]"
          : "!border-[#F1DEDE] bg-white"
      }`}
      onClick={onClick}
    >
      <span
        className={`w-[23px] h-[23px] rounded-full shrink-0 ${
          nutritionGoals.includes(value)
            ? "w-[15px] h-[15px] border-[4px] border-[#fff]"
            : "border-2 w-[23px] h-[23px] border-[#F1DEDE]"
        }`}
      />
      {buttonText}
    </button>
  );



  return (
    <>
      <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold !mt-8 !mb-2">
        {localStrings.WHICH_FOLLOWING_APPLY}
      </h1>
      <p className="text-[14px] lg:text-[22px] !text-[#231F20] !mb-1">
        {localStrings.SELECT_THAT_APPLY}
      </p>
      <p className="text-[14px] lg:text-[22px] w-full lg:w-[70%] mx-auto !text-[#231F20] !mb-8">
        {localStrings.CERTAIN_DIAGNOSES}
      </p>
      <Row className="row w-full max-w-4xl mx-auto">
        {diagnoses?.map((diagnose: Diagnose) => (
          <Col md={6} className="mb-3">
            <CategoryButton
              key={diagnose.value}
              buttonText={diagnose.label}
              value={diagnose.value}
              onClick={() => handleButtonClick(diagnose.value)}
            />
          </Col>
        ))}
      </Row>
      <ButtonComponent
        buttonText={localStrings.CONTINUE}
        handleButtonClick={() => {
          handleProgressBar();
          const criticalConditions = [
      "type_1_diabetes",
      "chronic_kidney_disease",
      "type_2_diabetes",
      "kidney_transplant_in_last_12_months",
    ];
    
    console.log(" option chose form user -- ",nutritionGoals);
    if (nutritionGoals.some((g) => criticalConditions.includes(g))) {
      navigate("/funnel/match");
    }
    else{
          navigate("/funnel/self-pay");
          }
        }}
        className="border-0 !mt-10"
      />
      <p className="sm:text-sm text-xs !text-[#231F20] flex gap-2 items-center text-left mt-3 lg:mt-0">
        <IoIosLock />
        {localStrings.ALL_INFO_SECURE}
      </p>
    </>
  );
};

export default SelectDiagnoses;