import CardDetails from "./components/CardDetails";
import ImageContainer from "./components/ImageContainer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <ImageContainer />
        <CardDetails />
      </div>
    </>
  );
};

export default App;
