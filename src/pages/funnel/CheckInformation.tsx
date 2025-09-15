import { Col, Form, Row } from "react-bootstrap"
import { localStrings } from "../../utils/Constants"
import ButtonComponent from "../../components/Button"
import { IoIosLock } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { useFunnel } from "../../context/FunnelContext"

// type ValueObjType = FormDataType & {
//   insurancePlan: string;
//   memberId: string;
// };

type ValueObjType = {
  first_name: string;
  last_name: string;
  state: string;
  dob: string;
  insurancePlan: string;
  memberId: string;
  [key: string]: string; // Keeps indexing dynamic
};

const CheckInformation = () => {
    const navigate = useNavigate()
    const { handleProgressBar, insurancePlan, userDetails,memberId, selectedState, birthDate  } = useFunnel()

    const valueObj: ValueObjType = {
    first_name: userDetails.first_name,
    last_name: userDetails.last_name,
    state: selectedState.label, // Or selectedState.value if that's what you need
    dob: birthDate ? birthDate.toISOString().split("T")[0] : "",
    insurancePlan,
    memberId,
  };

    console.log(valueObj)
    return (
        <>
            <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold !mt-8 !mb-2">
                {localStrings.DOUBLE_CHECK_INFO}
            </h1>
            <p className="text-[14px] lg:text-[22px] whitespace-pre-line mx-auto !text-[#231F20] !mb-5">{localStrings.NOT_ABLE_TO_VERIFY}</p>
            <Row className="w-full lg:w-[60%] mx-auto">
                {localStrings.DETAILS.map((detail) => (
                    <Col xs={12} lg={6}>
                        <Form.Group className="mb-3 text-left" controlId={detail.key}>
                            <Form.Label className="!!text-sm lg:!text-lg !font-normal !text-[#554A4D]" style={{ marginBottom: "5px" }}>{detail.label}</Form.Label>
                            <Form.Control className="!border-2 min-h-[52px] !border-[#F1DEDE]" type={detail.type} value={valueObj[detail.key] ?? ""} name={detail.key} />
                        </Form.Group>
                    </Col>
                ))}
            </Row>
            <ButtonComponent
                buttonText={localStrings.CONTINUE}
                handleButtonClick={() => {
                    handleProgressBar();
                    navigate("/funnel/diagnoses")
                }}
                className="border-0 !mt-10 min-w-full lg:min-w-[250px] !max-w-[300px] mx-auto !px-12 min-h-13 !rounded-full !bg-[#ff769a]"
            />
            <p className="text-sm !text-[#231F20] flex gap-2 items-center text-left mt-3 lg:mt-0">
                <IoIosLock />
                {localStrings.ALL_INFO_SECURE}
            </p>
        </>
    )
}

export default CheckInformation