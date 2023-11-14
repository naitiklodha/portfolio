import Quote from"./Quote";
import Lottie from "react-lottie";
import animationData from "public/loading.json"


export default function Loading() {
  
  

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen px-4">
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
        <Quote/>
      </div>
    );
  }