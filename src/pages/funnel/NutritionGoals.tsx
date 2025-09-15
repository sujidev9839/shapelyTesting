import { Col, Row } from "react-bootstrap"
import { useFunnel } from "../../context/FunnelContext"
import { localStrings } from "../../utils/Constants"
import { nutritionGoalsList } from "../../utils/formConstants"
import ButtonComponent from "../../components/Button"
import { useNavigate } from "react-router-dom"

type NutritionGoal = {
    label: string
    value: string
}

type CategoryButtonProps = {
    buttonText: string
    onClick: () => void
    value: string
}

function NutritionGoals() {
    const navigate = useNavigate()
    const { nutritionGoals, setNutritionGoals, handleProgressBar } = useFunnel();

    const handleButtonClick = (value: string) => {
        if (nutritionGoals.includes(value)) {
            setNutritionGoals(nutritionGoals.filter((g: any) => g !== value));
        } else {
            setNutritionGoals([...nutritionGoals, value]);
        }

    }

    const CategoryButton = ({ buttonText, value, onClick }: CategoryButtonProps) => (
        <button
            className={`!border-2 w-full flex gap-2 !rounded-[11px] p-3 !text-sm lg:!text-lg ${nutritionGoals.includes(value) ? "!bg-[#089DF4] text-white !border-[#089DF4]" : "!border-[#F1DEDE] bg-white"}`}
            onClick={onClick}
        >
            <span className={`w-[23px] h-[23px] rounded-full shrink-0 ${nutritionGoals.includes(value) ? "w-[15px] h-[15px] border-[4px] border-[#fff]" : "border-2 w-[23px] h-[23px] border-[#F1DEDE]"}`} />
            {buttonText}
        </button>
    )

    return (
        <>
            <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold !mt-8 !mb-2">
                {localStrings.TOP_NUTRITION_GOALS}
            </h1>
            <p className="text-[14px] lg:text-[22px] !text-[#231F20] mb-0">{localStrings.USE_TO_FIND_MATCH}</p>
            <p className="text-[14px] lg:text-[22px] !text-[#231F20] font-semibold !mb-12">
                {localStrings.SELECT_THAT_APPLY}
            </p>
            <Row className="row !mb-10">
                {nutritionGoalsList?.map((nutritionGoal: NutritionGoal) => (
                    <Col md={3} className="mb-3">
                        <CategoryButton
                            key={nutritionGoal.value}
                            buttonText={nutritionGoal.label}
                            value={nutritionGoal.value}
                            onClick={() => handleButtonClick(nutritionGoal.value)}
                        />
                    </Col>
                ))}
            </Row>
            <ButtonComponent buttonText={localStrings.CONTINUE}
                handleButtonClick={() => {
                    handleProgressBar();
                    navigate("/funnel/insurance-benefits")
                }}
                className="border-0 min-w-full lg:min-w-[250px] mx-auto !px-12 min-h-13 !rounded-full !bg-[#ff769a]" />
        </>
    )
}

export default NutritionGoals
