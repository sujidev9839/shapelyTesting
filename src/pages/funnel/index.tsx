import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { localStrings } from "../../utils/Constants";
import Images from "../../utils/Images";
import { useFunnel } from "../../context/FunnelContext";

function FunnelLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { progressBar, handleBack } = useFunnel();
  return (
    <div className="max-w-[1280px] mx-auto w-full min-h-screen flex flex-col p-3">
      <header className="relative flex items-center justify-center flex-col">
        {location.pathname !== localStrings.NUTRITION_GOAL_URL &&
        location.pathname !== localStrings.NEXT_STEPS_URL ? (
          <button
            onClick={() => {
              handleBack();
              navigate(-1);
            }}
            className="!rounded-full w-7 h-7 lg:w-11 lg:h-11 flex justify-center !bg-[#1a1a1a] items-center !p-0 !border-0 !focus-within:shadow-md left-0 absolute top-0"
          >
            <FaArrowLeft className="text-white" />
          </button>
        ) : (
          ""
        )}
        <img
          src={Images.Logo}
          alt="Shapely"
          className="mb-[30px] h-10 lg:h-13"
        />
        {location.pathname !== localStrings.NEXT_STEPS_URL && (
          <div className="progress-bar w-full !bg-[#E4F1F4] h-[13px] rounded-[6.5px]">
            <div
              className="filled-progress-bar h-full bg-[#089DF4] rounded-[6.5px]"
              style={{ width: `${progressBar}%` }}
            ></div>
          </div>
        )}
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}

export default FunnelLayout;
