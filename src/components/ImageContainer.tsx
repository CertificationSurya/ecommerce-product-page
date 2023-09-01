import { useState } from "react";
import {
  NextIcon,
  PreviousIcon,
  product1,
  product2,
  product3,
  product4,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
} from "../assets";
import ImageModal from "./subComponents/ImageModal";

const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
const products = [product1, product2, product3, product4];

type ImageContainerProps = {
  currentImage: string;
  setCurrentImage: React.Dispatch<React.SetStateAction<string>>;
}


const ImageContainer: React.FC<ImageContainerProps>  = ({ currentImage, setCurrentImage}) => {

  // const [currentImage, setCurrentImage] = useState<string>(product1);
  const [currentThumbnail, setCurrentThumbnail] = useState<string>(thumbnail1);
  const [openImageModal, setOpenImageModal] = useState<boolean>(false);

  let currentIndex = products.indexOf(currentImage);

  const changeImageModal = (changePositive: boolean) => {
    console.log(currentIndex);

    if (changePositive && currentIndex === products.length - 1) {
      currentIndex = 0;
    } else if (changePositive) {
      currentIndex += 1;
    } else if (!changePositive && currentIndex === 0) {
      currentIndex = products.length - 1;
    } else {
      currentIndex -= 1;
    }
    setCurrentThumbnail(thumbnails[currentIndex]);
    setCurrentImage(products[currentIndex]);
  };

  return (
    <div className="image-container flex flex-col items-center mx-4 max-w-md">
      <div className="current-img">
        <span
          className="prev-btn | absolute hidden"
          onClick={() => changeImageModal(false)}
        >
          <PreviousIcon />
        </span>

        <img src={currentImage} alt="Selected image" className="rounded-2xl" />

        <span className="next-btn | absolute hidden"
          onClick={() => changeImageModal(true)}
        >
          <NextIcon />
        </span>
      </div>

      {/* <div className="thumbnails flex gap-6 my-6">
        {
          thumbnails.map((eachThumbnail, index) => (
            <div className="thumbnail" key={index}>

              <img src={eachThumbnail} 
              alt="Thumbnail Image" 
              className={`eachThumbnail | ${eachThumbnail == currentThumbnail ? "opacity-30" : "" }  hover:opacity-60 cursor-pointer rounded-md`}
              
              onClick={()=> {
                setOpenImageModal(true)
              }}
              />
            </div>
          ))
        }
      </div> */}

      {openImageModal && (
        <ImageModal
          currentImage={currentImage}
          thumbnails={thumbnails}
          setCurrentImage={setCurrentImage}
          setOpenImageModal={setOpenImageModal}
          setCurrentThumbnail={setCurrentThumbnail}
          products={products}
          currentThumbnail={currentThumbnail}
        />
      )}
    </div>
  );
};

export default ImageContainer;
