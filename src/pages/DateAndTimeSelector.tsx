import DayPicker from '../components/DayPicker';
import AvailableSlots from '../components/AvailableTimeSlots';
import { localStrings } from '../utils/Constants';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { IoIosLock } from 'react-icons/io';

interface DateAndTimeSelector {
  isFromFunnel?: boolean
}

function DateTimeSelector({ isFromFunnel }: DateAndTimeSelector) {
  return (
    <>
      <h1 className={`!text-[28px] lg:!text-[52px] !text-[#231F20] !font-semibold mb-3 ${isFromFunnel ? "!mt-8" : ""}`}>{localStrings.GREET_MEET_YOUR_SHAPELY_PROVIDER}</h1>
      <h5 className={`mb-3 ${isFromFunnel ? "font-medium" : ""}`}>{localStrings.WHAT_TIME_WORKS_BEST}</h5>
      <Card className="card p-4 !shadow-md !rounded-2xl">
        <h5 className='text-center mb-3'>
          {localStrings.SELECT_DATE_TIME}
        </h5>
        <Container>
          <Row>
            <Col md={12} lg={6} xl={6} sm={12} xs={12}>
              <DayPicker />
            </Col>
            <Col md={12} lg={6} xl={6} sm={12} xs={12}>
              <AvailableSlots isFromFunnel={isFromFunnel} />
            </Col>
          </Row>
        </Container>
      </Card>
      {isFromFunnel &&
        <>
        <p className="text-sm text-[#554A4D] mx-auto w-full lg:w-[60%] mt-5 lg:mt-10">
        {localStrings.IF_YOU_NEED_CANCEL_RESCHEDULE}
      </p>
      <p className="text-sm !text-[#231F20] flex gap-2 items-center text-left mt-3 lg:mt-0">
        <IoIosLock />
        {localStrings.ALL_INFO_SECURE}
      </p>
      </>
      }
    </>
  );

}

export default DateTimeSelector;
