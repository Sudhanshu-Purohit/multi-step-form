import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import back from '../assets/back.png';
import FifthPage from "./Form Pages/FifthPage";
import FirstPage from "./Form Pages/FirstPage";
import FourthPage from "./Form Pages/FourthPage";
import SecondPage from "./Form Pages/SecondPage";
import ThirdPage from "./Form Pages/ThirdPage";

const MultiStepForm = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentProgressValue, setCurrentProgressValue] = useState<number>(20);

  const handlePageChangeForward = (): void => {
    setCurrentPage(currentPage + 1);
    setCurrentProgressValue(currentProgressValue + 20);
  };

  const handlePageChangeBackward = (): void => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
    setCurrentProgressValue(currentProgressValue - 20);
  };

  const renderPage = (): JSX.Element => {
    switch (currentPage) {
      case 1:
        return <FirstPage forwardButton={handlePageChangeForward} />;
      case 2:
        return <SecondPage forwardButton={handlePageChangeForward} />;
      case 3:
        return <ThirdPage forwardButton={handlePageChangeForward} />;
      case 4:
        return <FourthPage forwardButton={handlePageChangeForward} />;
      case 5:
        return <FifthPage />;
      default:
        return <FirstPage forwardButton={handlePageChangeForward} />;
    }
  };

  return (
    <div className="mx-auto w-[80%] p-8 flex flex-col gap-5 min-h-screen  max-lg:w-[100%]">

      <div className="flex flex-col justify-between min-h-[75vh]">
        {currentPage <= 5 ? (
          <div className="flex gap-2 items-center">
            {currentPage <= 1 ? null : (
              <button onClick={handlePageChangeBackward}> <img className="w-4" src={back} alt="back button" /> </button>
            )}
            <div className="w-full">
              <ProgressBar height="5px" bgColor="#169b7c" completed={currentProgressValue} customLabel=" " />
            </div>
          </div>
        ) : null}

        {renderPage()}

      </div>
    </div>
  );
};

export default MultiStepForm;
