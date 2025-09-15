import { Col, Row } from "react-bootstrap"
import { localStrings } from "../../utils/Constants"
import ButtonComponent from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { IoIosLock } from "react-icons/io";
import Images from "../../utils/Images";
import { useFunnel } from "../../context/FunnelContext";

function InsuranceBenefits() {
    const navigate = useNavigate()
    const { handleProgressBar } = useFunnel()
    return (
        <>
            <div className="flex-1">
                <Row className="mt-3 flex-col-reverse md:flex-row">
                    <Col md={4}>
                        <img src={Images.InsuranceBenefitsImage} className="max-sm:w-[80%] object-cover max-sm:mx-auto" alt="" style={{ borderRadius: "40px 0 0 40px" }} />
                    </Col>
                    <Col md={8} className="flex items-start flex-col justify-center mb-4 lg:mb-0 md">
                        <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] sm:!text-left !text-center !font-semibold !mb-2">
                            {localStrings.CHECK_INSURANCE_BENEFITS}
                        </h1>
                        <p className="text-[14px] lg:text-[22px] !text-[#231F20] !mb-8 sm:!text-left !text-center">{localStrings.NEED_SOME_INFO}</p>
                        <h4 className="l!text-[28px] g:!text-[36px] !text-[#231F20] lg:whitespace-pre-line sm:!text-left !text-center font-semibold">
                            {localStrings.PATIENTS_HAVE_COVERAGE}
                            <span className="text-[#089DF4]">{localStrings.OUT_OF_POCKET}</span>
                        </h4>
                    </Col>
                </Row>
            </div>
            <div>
                <div className="flex justify-center">
                    <ButtonComponent
                        buttonText={localStrings.CONTINUE}
                        handleButtonClick={() => {
                            handleProgressBar();
                            navigate("/funnel/your-state")
                        }}
                        className="border-0 !mt-10"
                    />
                </div>
                <p className="text-xs sm:text-sm !text-[#231F20] flex gap-2 items-center max-sm:justify-center mt-3">
                    <IoIosLock />
                    {localStrings.ALL_INFO_SECURE}
                </p>
            </div>
        </>
    )
}

export default InsuranceBenefits