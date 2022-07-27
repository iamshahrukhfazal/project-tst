import "../styles/globals.css";
import { AudioPlayer, Player } from "./components/Audio-Player/custom-payer";
import Countdown from 'react-countdown';
import Link from "next/link";


// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span className="text-white">H :: {hours} M:: {minutes} S:: {seconds}</span>;
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className="absolute top-0 left-0 w-full h-24 bg-gray-600 z-30">
      <div className="absolute bottom-8 right-3">
        <Countdown
        date={Date.now() + 150000}
        renderer={renderer}
      
      />  
      </div>
    </div>
    {/* // <AudioPlayer> */}
     <div className="mt-24">
     <Component {...pageProps} />
     </div>
     <div className="bg-black w-full h-16 flex justify-center items-center space-x-3 mt-3"> 
       <Link href="/policy">
         <div className="text-white text-xl cursor-pointer   hover:text-gray-500">Policy</div>
       </Link>
       <Link href="/term-condition">
       <div className="text-white text-xl cursor-pointer hover:text-gray-500">Terms and Conditions</div>
       </Link>

       <Link href="/contact">

       <div className="text-white text-xl cursor-pointer hover:text-gray-500">Contact Us</div>
       </Link>

     </div>
     </>
    // {/* // </AudioPlayer> */}


  );
}

export default MyApp;
