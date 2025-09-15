import { Col, Form, Row } from "react-bootstrap"
import { localStrings } from "../../utils/Constants"
import DatePicker from "react-datepicker"
import { useState } from "react"
import Images from "../../utils/Images"
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import ButtonComponent from "../../components/Button"
import { IoIosLock } from "react-icons/io"
import { useNavigate } from "react-router-dom"

const CardInfo = () => {
    const [expiryDate, setExpiryDate] = useState(new Date())
    const navigate = useNavigate()
    return (
        <div className="card_info_wrapper flex items-center justify-center flex-col">
            <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold !mt-8 !mb-2">
                {localStrings.NEED_A_CARD}
            </h1>
            <p className="text-[14px] lg:text-[22px] max-w-[80%] mx-auto whitespace-pre-line !text-[#231F20] !mb-4">{localStrings.CONFIRM_COVERAGE_BEFORE_APPOINTMENT}</p>
            <Row className="w-full mx-auto lg:w-[80%]">
                <Col md={5} xs={12}>
                    <Form.Group className="mb-3 text-left" controlId="card_number">
                        <Form.Label className="!!text-sm lg:!text-lg !text-[#554A4D]" style={{ marginBottom: "5px" }}>{localStrings.CARD_NUMBER}</Form.Label>
                        <Form.Control className="!border-2 min-h-[52px] !border-[#F1DEDE]" type={localStrings.TYPE_NUMBER} name="card_number" />
                    </Form.Group>
                </Col>
                <Col md={4} xs={6}>
                    <Form.Group className="mb-3 text-left" controlId="expiry_date">
                        <Form.Label className="!!text-sm lg:!text-lg !text-[#554A4D]" style={{ marginBottom: "5px" }}>{localStrings.MM_YY}</Form.Label>
                        <DatePicker className="date-picker-birthday expiry-date min-w-full" selected={expiryDate} onChange={(date: any) => setExpiryDate(date)} />
                    </Form.Group>
                </Col>
                <Col md={3} xs={6}>
                    <Form.Group className="mb-3 text-left" controlId="cvc">
                        <Form.Label className="!!text-sm lg:!text-lg !text-[#554A4D]" style={{ marginBottom: "5px" }}>{localStrings.CVC}</Form.Label>
                        <Form.Control className="!border-2 min-h-[52px] !border-[#F1DEDE]" type={localStrings.TYPE_NUMBER} name="cvc" />
                    </Form.Group>
                </Col>
            </Row>
            <p className="text-[#554A4D] font-semibold !mb-10 text-sm">{localStrings.RISK_FREE_BOOKING_CANCELATION}</p>
            <div className="flex items-center justify-center flex-col lg:flex-row mb-10">
            <div className="flex gap-1 items-center">
                {Array(5).fill(5).map((_) => (
                    <img src={Images.StarIcon} alt="" className="me-2" />
                ))}
                    </div>
                <p className="text-base !mb-0 text-[#554A4D] font-bold">{localStrings.RATED_5_STAR}</p>
            </div>
            <div className="flex items-start gap-3 mx-auto w-full lg:w-[75%] mb-3">
                <span className="w-[40px] shrink-0 h-[40px] rounded-full flex items-center justify-center bg-[#F04040]">
                    <RxCross2 className="text-[#fff]" />
                </span>
                <div className="flex flex-col items-start">
                    <h4 className="text-[#231F20] sm:!text-3xl !text-xl text-start font-semibold mb-2">
                        {localStrings.ELIGIBLE_TO_JOIN}
                    </h4>
                    <p className="sm:text-base text-sm text-left text-[#231F20]">
                        {localStrings.CURRENTLY_SHAPELY_SERVES}
                    </p>
                </div>
            </div>
            <div className="flex items-start justify-start gap-3 mx-auto w-full lg:w-[75%] mb-3">
                <span className="w-[40px] shrink-0 h-[40px] rounded-full flex items-center justify-center bg-[#231F20]">
                    <GoPlus className="text-[#fff]" />
                </span>
                <h4 className="text-[#231F20] sm:!text-3xl !text-xl text-start font-semibold mb-0">
                    {localStrings.WHAT_DOES_COVER}
                </h4>
            </div>
            <ButtonComponent buttonText={localStrings.CONTINUE} handleButtonClick={() => navigate("/funnel/next-steps")} className="border-0 !mb-3 !mt-10 min-w-full lg:min-w-[250px] !max-w-[300px] mx-auto !px-12 min-h-13 !rounded-full !bg-[#ff769a]" />
            <p className="text-sm static mt-4 lg:mt-0 lg:fixed left-4 bottom-0 !text-[#231F20] flex gap-2 items-center text-left">
                <IoIosLock />
                {localStrings.ALL_INFO_SECURE}
            </p>
        </div>
    )
}

export default CardInfo