import CardDetails from "./components/CardDetails";
import ImageContainer from "./components/ImageContainer";
import Navbar from "./components/Navbar";
import { useContext } from "react";


// importing Context
import CommerceContext from "./context/CommerceContext";

const App = () => {
  const { blockScreen } = useContext(CommerceContext)!
  return (
    <div className={`all-wrapper ${blockScreen ? "block-screen" : ""} | min-h-screen grid`}>

      <Navbar/>
      <div className="content | flex justify-center items-center">
        <div className="content-wrapper | flex xs:flex-col items-center gap-x-14">
        
        <ImageContainer/>
        <CardDetails/>

        </div>

      </div>
    </div>
  );
};

export default App;
