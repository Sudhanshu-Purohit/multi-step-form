import { useState } from "react";
import one from '../../assets/1.png';
import two from '../../assets/2.png';
import three from '../../assets/3.png';
import four from '../../assets/4.png';
import five from '../../assets/5.png';
import six from '../../assets/6.png';

interface FirstPageProps {
  forwardButton: () => void;
}

const options: JSX.Element[] = [
  <><img className="w-8 h-8 md:w-10 md:h-10" src={one} alt="" /> <p className="text-xs text-left md:text-base"><b>Student</b> or soon to be enrolled</p></>,
  <><img className="w-8 h-8 md:w-10 md:h-10" src={two} alt="" /> <p className="text-xs text-left md:text-base"><b>Professional</b> pursuing a career</p></>,
  <><img className="w-8 h-8 md:w-10 md:h-10" src={three} alt="" /> <p className="text-xs text-left md:text-base"><b>Parent</b> of a school-age child</p></>,
  <><img className="w-8 h-8 md:w-10 md:h-10" src={four} alt="" /> <b className="text-xs md:text-base">Lifelong Learner</b></>,
  <><img className="w-8 h-8 md:w-10 md:h-10" src={five} alt="" /> <b className="text-xs md:text-base">Teacher</b></>,
  <><img className="w-8 h-8 md:w-10 md:h-10" src={six} alt="" /> <b className="text-xs md:text-base">Other</b></>
];

const FirstPage = ({ forwardButton }: FirstPageProps) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">Which describes you best?</h1>
        <p className="text-sm md:text-base">This will help us personalize your experience.</p>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-[55%] p-5">
        {options.map((ele, i) => (
          <button
            key={i}
            className={`${selectedButton === i ? "border-orange-400" : ""
              } border flex gap-4 p-2 rounded-md items-center`}
            onClick={() => {
              setDisabled(false);
              setSelectedButton(i);
            }}
          >
            {ele}
          </button>
        ))}
      </div>

      <div className="flex justify-center ">
        <button className={`${disabled ? "bg-gray-300 cursor-not-allowed" : "bg-black"} text-white pt-2 pb-2 pl-9 pr-9 rounded-lg`} onClick={forwardButton} disabled={disabled}>Continue</button>
      </div>
    </div>
  );
};

export default FirstPage;
