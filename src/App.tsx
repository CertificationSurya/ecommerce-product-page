import CardDetails from "./components/CardDetails";
import ImageContainer from "./components/ImageContainer";
import Navbar from "./components/Navbar";

// importing store state
import { useAppSelector } from "./app/hooks";

const App = () => {
  // store
  const { blockScreen } = useAppSelector((state) => state.commerce);

  return (
    <div
      className={`all-wrapper ${
        blockScreen ? "block-screen" : ""
      } | min-h-screen grid`}
    >
      <Navbar />
      <div className="content | flex justify-center items-center">
        <div className="content-wrapper | flex xs:flex-col items-center gap-x-14">
          <ImageContainer />
          <CardDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
