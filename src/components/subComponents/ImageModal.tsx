import { useAppDispatch } from "../../app/hooks";
import { CloseIcon, NextIcon, PreviousIcon } from "../../assets";

import { commerceAction } from "../../features/commerce/commerceSlice";
const { setCurrentImage, setBlockScreen } = commerceAction


type ImageModalProps = {
  currentImage: string;
  setCurrentThumbnail: React.Dispatch<React.SetStateAction<string>>;
  setOpenImageModal: React.Dispatch<React.SetStateAction<boolean>>;
  thumbnails: string[];
  products: string[];
  currentThumbnail: string;
};

const ImageModal: React.FC<ImageModalProps> = ({
  currentImage,
  setOpenImageModal,
  setCurrentThumbnail,
  currentThumbnail,
  products,
  thumbnails,
}) => {
  // store
  const dispatch = useAppDispatch()
  let currentIndex = products.indexOf(currentImage);

  const changeImageModal = (changePositive: boolean) => {

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
    dispatch(setCurrentImage(products[currentIndex]));
  };


  return (
    <div className="img-modal -mt-5 w-[25rem] | activeElement">
      <div className="closeCard flex justify-end">
        <CloseIcon
          onClick={() => {
            setOpenImageModal(false);
            dispatch(setBlockScreen(false));
          }}
          className="close-icon | cursor-pointer z-20 "
        />
      </div>

      <div className="swipeCard | relative mt-2">
        <div className="swipeCard__inner">
          <span
            className="change-btn | flex items-center justify-center btn-left absolute top-1/2 -left-5 h-10 w-10 rounded-full"
            onClick={() => changeImageModal(false)}
          >
            <PreviousIcon />
          </span>

          <img
            src={currentImage}
            alt="product"
            className="swipeCard__img rounded-xl h-100"
          />

          <span
            onClick={() => changeImageModal(true)}
            className="change-btn btn-right | absolute h-10 w-10 flex items-center justify-center rounded-full top-1/2 -right-5"
          >
            <NextIcon fill="blue" />
          </span>
        </div>
      </div>

      <div className="modal-thumbnails flex gap-x-4 my-6 px-4">
        {thumbnails.map((eachThumbnail, index) => (
          <div className="thumbnail" key={index}>
            <img
              src={eachThumbnail}
              alt="Thumbnail Image"
              className={` hover:opacity-70 ${
                eachThumbnail == currentThumbnail ? "opacity-50" : ""
              } cursor-pointer rounded-md`}
              onClick={() => {
                setOpenImageModal(true);
                setCurrentThumbnail(eachThumbnail);
                const currentIndex = thumbnails.indexOf(eachThumbnail);
                dispatch(setCurrentImage(products[currentIndex]));
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageModal;
