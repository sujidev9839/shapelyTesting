import { Col, Form, Row } from "react-bootstrap";
import { localStrings, userInfoInputList } from "../../utils/Constants";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/Button";
import { IoIosLock } from "react-icons/io";
import { useFunnel } from "../../context/FunnelContext";

const Dietitian = () => {
  const navigate = useNavigate();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { insurancePlan, handleProgressBar, selectedState , userDetails, setUserDetails} = useFunnel();
  const [errors, setErrors] = useState<any>({
    first_name: false,
    last_name: false,
    email: false,
    phone_number: false,
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserDetails({...userDetails, [name] : value})
    setErrors({ ...errors, [name]: false });
  };

  console.log({userDetails})
  return (
    <>
      <div className="flex flex-col flex-1 items-center">
        <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold !mt-8 !mb-2 text-center">
          {insurancePlan === "self-pay" || insurancePlan === "other"
            ? localStrings.SHAPELY_DIETITIAN
            : localStrings.CHECK_INSURANCE_BENEFITS}
        </h1>
        <p className="text-[14px] lg:text-[22px] w-full lg:w-[70%] mx-auto !text-[#231F20] !mb-5 text-center">
          {insurancePlan === "self-pay" || insurancePlan === "other"
            ? localStrings.GUIDE_THROUGH_NEXT_STEP
            : localStrings.USE_SAME_NAME_AS_INSURANCE_PLAN}
        </p>
        <Form className="px-3 pt-2 pb-0">
          <Row className="w-full lg:w-[40%] mx-auto">
            {userInfoInputList.map((userInput, index) => (
              <Col md={index > 1 ? 12 : 6} className="" key={userInput.name}>
                <Form.Group className="mb-3 text-left" controlId={userInput.name}>
                  <Form.Label
                    className="!!text-sm lg:!text-lg !text-[#554A4D]"
                    style={{ marginBottom: "5px" }}
                  >
                    {userInput.label}
                  </Form.Label>
                  <Form.Control
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    className="!border-2 min-h-[52px] !border-[#F1DEDE]"
                    value={userDetails[userInput.name]}
                    style={{
                      border: errors[userInput.name] ? "1px solid #aa182c" : "",
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const nextInput = inputRefs.current[index + 1];
                        if (nextInput) {
                          nextInput.focus();
                        }
                      }
                    }}
                    type={userInput.type}
                  //   inputMode={userInput.inputMode}
                  //   pattern={userInput.pattern}
                    onChange={(e) => handleChange(e)}
                    name={userInput.name}
                  />
                </Form.Group>
                {errors[userInput.name] && (
                  <div>
                    <p className="text-base" style={{ color: "#aa182c" }}>
                      {errors[userInput.name]}
                    </p>
                  </div>
                )}
              </Col>
            ))}
          </Row>
        </Form>
        <p className="!text-sm lg:!text-lg mt-4 text-[#231F20] text-center">
          {localStrings.CONTINUE_TO_AGREE}{" "}
          <Link to="https://www.getshapely.com/privacy-policy" target="_blank">
            {localStrings.PRIVACY_POLICY}
          </Link>{" "}
          {localStrings.AND}{" "}
          <Link to="https://www.getshapely.com/terms-of-use" target="_blank">
            {localStrings.TERMS_OF_USE}
          </Link>
        </p>
      </div>
      <div>
        <div className="flex justify-center">
          <ButtonComponent
            buttonText={localStrings.CONTINUE}
            handleButtonClick={() => {
              if (
                selectedState.value === "california" ||
                selectedState.value === "florida" ||
                selectedState.value?.replace(" ", "") === "newyork" ||
                selectedState.value === "texas"
              ) {
                handleProgressBar();
                navigate("/funnel/your-birthday");
                return;
              }
              navigate("/funnel/thank-you", {
                state: {
                  isNotState: true,
                },
              });
            }}
            className="border-0 !mt-10"
          />
        </div>
        <p className="text-xs sm:text-sm !text-[#231F20] flex gap-2 items-center sm:mx-auto ml-auto mt-3">
          <IoIosLock />
          {localStrings.ALL_INFO_SECURE}
        </p>
      </div>
    </>
  );
};

export default Dietitian;
