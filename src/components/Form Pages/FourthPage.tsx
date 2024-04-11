import { useState } from "react";
import arithmetic from '../../assets/Arithmetic.png';
import basic_algebra from '../../assets/basic_algebra.png';
import calculus from '../../assets/calculus.png';
import intermediate_algebra from '../../assets/intermediate_algebra.png';

interface FourthPageProps {
  forwardButton: () => void;
}

const options: JSX.Element[] = [
  <>
    <img src={arithmetic} alt="arithmetic" />
    <div>
      <p className="font-medium text-sm">Arithmetic</p>
      <p className="text-gray-500">Introductory</p>
    </div>
  </>,

  <>
    <img className="mt-4" src={basic_algebra} alt="basic_algebra" />
    <div>
      <p className="font-medium text-sm">Basic Algebra</p>
      <p className="text-gray-500">Foundational</p>
    </div>
  </>,

  <>
    <img src={intermediate_algebra} alt="intermediate_algebra" />
    <div>
      <p className="font-medium text-sm">Intermediate Algebra</p>
      <p className="text-gray-500">Intermediate</p>
    </div>
  </>,

  <>
    <img src={calculus} alt="calculus" />
    <div>
      <p className="font-medium text-sm">Calculus</p>
      <p className="text-gray-500">Advanced</p>
    </div>
  </>,
]

const FourthPage = ({ forwardButton }: FourthPageProps) => {

  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);

  return (
    <div className="flex flex-col pt-5 pb-5">

      <div className="flex flex-col gap-6 items-center">
        <h1 className="font-bold text-xl text-center md:text-2xl lg:text-3xl">What is your math comfort level?</h1>
        <p className="text-center text-sm md:text-base">Choose the highest level you feel confident in - you can always adjust later.</p>
      </div>

      <div className="flex flex-col gap-4 w-full md:flex-row md:gap-0 md:w-[70%] mx-auto mt-12 p-5">
        {options.map((ele, i) => (
          <button key={i} className={`${selectedButton === i ? "border-orange-400" : ''} border flex flex-col gap-3 p-3 rounded-md items-center justify-between md:flex-col md:w-full md:gap-4`} onClick={() => {
            setDisabled(false)
            setSelectedButton(i);
          }}>
            {ele}
          </button>
        ))}
      </div>

      <div className="flex justify-center ">
        <button className={`${disabled ? "bg-gray-300 cursor-not-allowed" : "bg-black"} text-white pt-2 pb-2 pl-9 pr-9 rounded-lg`} onClick={forwardButton} disabled={disabled}>Continue</button>
      </div>
      
    </div>
  )
}

export default FourthPage;
