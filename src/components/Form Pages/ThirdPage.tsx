import image from '../../assets/pulley.png';

interface ThirdPageProps {
  forwardButton: () => void;
}

const ThirdPage = ({ forwardButton }: ThirdPageProps) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full mx-auto mt-5 md:mt-10 mb-5 md:mb-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full md:w-2/4 lg:w-2/4 max-w-xs" src={image} alt="pulley" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
          <div className="flex flex-col gap-5 p-4">
            <h1 className="text-2xl md:text-3xl font-bold">You're in the right place</h1>
            <p className="text-sm md:text-base">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <button className={`bg-black text-white pt-2 pb-2 pl-9 pr-9 rounded-lg`} onClick={forwardButton} >Continue</button>
      </div>

    </div>
  );
};

export default ThirdPage;
