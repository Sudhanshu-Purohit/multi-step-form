import { useNavigate } from 'react-router-dom';
import ghost from '../../assets/ghost.png';
import stars from '../../assets/stars.png';

const FifthPage = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate('/learning-path');
  }

  return (
    <div className=''>
      <div className="flex flex-col md:flex-row w-full mx-auto mt-5 md:mt-10 mb-5 md:mb-10">
        <div className="w-full md:w-1/2 flex justify-center flex-col items-center">
          <img className="w-[250px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px]" src={ghost} alt="ghost" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
          <div className="flex flex-col gap-5 p-4">
            <h1 className="text-2xl md:text-3xl font-bold">You're on your way!</h1>
            <div className="flex flex-col gap-2">
              <img className="w-20 md:w-28 lg:w-32" src={stars} alt="stars" />
              <em>"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real-world problem-solving situations."</em>
              <p><em>- Jacob S.</em></p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <button className={`bg-black text-white pt-2 pb-2 pl-9 pr-9 rounded-lg`} onClick={nextPage}>Continue</button>
      </div>
    </div>
  );
};

export default FifthPage;
