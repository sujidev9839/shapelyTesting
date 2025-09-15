import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { localStrings } from '../../utils/Constants';
import ButtonComponent from '../../components/Button';
import { IoIosLock } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useFunnel } from '../../context/FunnelContext';

type insuranceType = {
    label:string,
    value:string
}

const InsuranceDetails = () => {
    const [selectedInsurance, setSelectedInsurance] = useState<null | insuranceType>(null)
    const navigate = useNavigate()
    const { handleProgressBar, userDetails,memberId, setMemberId, birthDate,setInsuranceCheck } = useFunnel();
    const insurance = [
           {
        label: "Aetna",
        value: "Aetna"
    },
    {
        label: "United Healthcare",
        value: "united_healthcare"
    },
    {
        label: "Anthem",
        value: "anthem"
    },
    {
        label: "Self-pay",
        value: "self-pay"
    },
    {
        label: "Blue Cross Blue Shield",
        value: "blue-cross-blue-shield"
    },
    {
        label: "Medicare",
        value: "medicare"
    },
    {
        label: "Other",
        value: "other"
    }

    ]

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setMemberId(e.target.value)
    }

   console.log("birthDate-- ",birthDate);

const formatDate = (dateInput: string | Date | null): string => {
  if (!dateInput) return '';  // Return empty string or handle null as needed
  const date = new Date(dateInput);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
};


const formattedBirthDate = formatDate(birthDate);

    const handleCheckInsurance = async()=>{
        try {

          const response = await fetch(`https://zoho-solution-887781528.development.catalystserverless.com/server/zohocrm/insurance?insurance=${selectedInsurance?.value}&firstName=${userDetails.first_name}&lastName=${userDetails.last_name}&memberId=${memberId}&dateOfBirth=${formattedBirthDate}`, { method:"GET", })

  if (response.ok) {
    // Define the expected shape of your API response
    type InsuranceResponse = {
      output?: {
        Acceptable_Insurance?: string;
        Inferred_insurance_category?:string;
        Payer_Name?:string;
        errors?:string;
        
      };
    };

    const data: InsuranceResponse = await response.json();

    if (data.output?.Acceptable_Insurance === "Yes" && (data.output?.Inferred_insurance_category === "Medicare Advantage" || data.output?.Payer_Name === "Aetna")) {
      navigate("/funnel/diagnoses");
    }
    else if (data.output?.Acceptable_Insurance === "No"){
        setInsuranceCheck(data);
       navigate("/funnel/self-pay");
    } 
    else if (data.output?.errors && data.output.errors.length > 0) {
        console.log("data.output.error.length--",data.output.errors.length);
   navigate("/funnel/check-information");
}
    else {
      console.warn("Insurance not acceptable");
    }
  }
            handleProgressBar()
        } catch (error) {
             console.log(error)
             navigate("/funnel/check-information");
        }
    }

    return (
        <>
            <div className='flex flex-col items-center flex-1'>
                <h1 className="!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold !mt-8 !mb-2 text-center">
                    {localStrings.ADD_YOUR_INSURANCE_DETAILS}
                </h1>
                <p className="text-[14px] lg:text-[22px] w-full lg:w-[80%] mx-auto !text-[#231F20] !mb-5 text-center">{localStrings.SHAPELY_IN_NETWORK_WITH_HEALTH_PLANS}</p>
                <div className='!w-full lg:!w-[40%] mx-auto'>
                    <p className="!!text-sm lg:!text-lg mb-1 text-[#554A4D] text-left">{localStrings.INSURANCE_PLAN_LABEL}</p>
                    <Select
                        value={selectedInsurance}
                        onChange={(e: any) => setSelectedInsurance(e)}
                        options={insurance}
                        className="stateSelect mb-4"
                    />
                    <Form.Group className="mb-3 text-left" controlId={localStrings.MEMBER_ID_KEY}>
                        <Form.Label className="!!text-sm lg:!text-lg !font-normal !text-[#554A4D]" style={{ marginBottom: "5px" }}>{localStrings.MEMBER_ID}</Form.Label>
                        <Form.Control onChange={handleChange} className="!border-2 min-h-[52px] !border-[#F1DEDE]" type="text" name={localStrings.MEMBER_ID_KEY} />
                    </Form.Group>
                </div>
            </div>
            <div className=''>
                <div className="flex justify-center">
                    <ButtonComponent
                        buttonText={localStrings.CONTINUE}
                        handleButtonClick={handleCheckInsurance
                        //     () => {
                        //     handleProgressBar();
                        //     navigate("/funnel/check-information")
                        // }
                    }
                        className="!mt-10" />
                </div>
                <p className="text-xs sm:text-sm !text-[#231F20] flex gap-2 items-center max-sm:justify-center mt-3">
                    <IoIosLock />
                    {localStrings.ALL_INFO_SECURE}
                </p>
            </div>
        </>
    )
}

export default InsuranceDetails