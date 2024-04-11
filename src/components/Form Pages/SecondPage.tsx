import { useState } from "react";
import ten from '../../assets/10.png';
import eleven from '../../assets/11.png';
import seven from '../../assets/7.png';
import eight from '../../assets/8.png';
import nine from '../../assets/9.png';

interface SecondPageProps {
  forwardButton: () => void;
}

const options: JSX.Element[] = [
  <><img className="w-8 h-8 md:w-10 md:h-10" src={seven} alt="" /> <p className="text-xs text-left md:text-base">Learning specific skills to advance my career</p></>,
  <><img className="w-8 h-8 md:w-10 md:h-10" src={eight} alt="" /> <p className="text-xs text-left md:text-base">Exploring new topics I'm interested in</p></>,
  <><img className="w-8 h-8 md:w-10 md:h-10" src={nine} alt="" /> <p className="text-xs text-left md:text-base">Refreshing my math foundations</p></>,
  <><img className="w-8 h-8 md:w-10 md:h-10" src={ten} alt="" /> <p className="text-xs text-left md:text-base">Exercising my brain to stay sharp</p></>,
  <><img className="w-8 h-8 md:w-10 md:h-10" src={eleven} alt="" /> <p className="text-xs text-left md:text-base">Something else</p></>
];

const SecondPage = ({ forwardButton }: SecondPageProps) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);

  return (
    <div className=" flex flex-col justify-center items-center py-4">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">Which are you most interested in?</h1>
        <p className="text-sm md:text-base">Choose just one. This will help us get you started (but won't limit your experience).</p>
      </div>

      <div className="flex flex-col gap-4 w-full md:w-[55%] mx-auto mt-4 p-5">
        {options.map((ele, i) => (
          <button 
            key={i} 
            className={`${selectedButton === i ? "border-orange-400" : ""} border flex gap-4 p-2 rounded-md items-center`} 
            onClick={() => {
              setDisabled(false)
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

export default SecondPage;
