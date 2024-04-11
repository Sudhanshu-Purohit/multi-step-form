import ClipLoader from "react-spinners/ClipLoader";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-[40%] flex flex-col items-center justify-center gap-4 mx-auto">
        <ClipLoader color="#ffc107" size={60} />
        <div className="flex flex-col items-center text-center w-[85%]">
          <p className="font-bold text-sm md:text-base lg:text-lg">Finding learning path recommendations for you based on your responses</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage;
