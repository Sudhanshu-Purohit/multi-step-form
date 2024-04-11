import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import learningPath from '../assets/learning-path.png';

const options: JSX.Element[] = [
  <>
    <div className="text-start">
      <p>
        <b>Foundational Math</b> Build your foundational skills in algebra,
        geometry, and probability.
      </p>
    </div>
    <img src={learningPath} alt="arithmetic" className="max-w-full" />
  </>,
  <>
    <div className="text-start">
      <p>
        <b>Mathematical Thinking</b> Build your foundational skills in algebra,
        geometry, and probability.
      </p>
    </div>
    <img src={learningPath} alt="basic_algebra" className="max-w-full mt-4" />
  </>
];

const LastPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <div className="flex flex-col justify-center mx-auto min-h-screen">
      <div className="flex flex-col pt-5 pb-5 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 px-4">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
            Learning paths based on your answers
          </h1>
          <p className="text-sm md:text-base text-center">
            Choose one to get started. You can switch anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:w-[70%] sm:grid-cols-2 gap-4 w-full mx-auto mt-12 p-5 justify-center ">
          {options.map((ele, i) => (
            <button
              key={i}
              className={`${selectedButton === i ? "border-orange-400" : ''
                } border flex lg:flex-row flex-col relative items-center rounded-md p-5 gap-4`}
              onClick={() => {
                setDisabled(false);
                setSelectedButton(i);
              }}
            >
              {i === 0 ?
                <>
                  <span className="p-1 rounded-full left-1/2 transform -translate-x-1/2 w-28 absolute -top-3 bg-[#f1b331] text-xs font-bold"> Most Popular </span>
                  {ele}
                </> :
                ele
              }
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastPage;