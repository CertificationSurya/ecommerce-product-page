import { CloseIcon, NextIcon, PreviousIcon } from "../../assets";
// import { product1, product2, product3, product4} from "../../assets"
// const products = [product1, product2, product3, product4]

type ImageModalProps = {
  currentImage: string;
  setCurrentImage: React.Dispatch<React.SetStateAction<string>>;
  setCurrentThumbnail: React.Dispatch<React.SetStateAction<string>>;
  setOpenImageModal: React.Dispatch<React.SetStateAction<boolean>>;
  thumbnails: string[];
  products: string[];
  currentThumbnail: string;
};

const ImageModal: React.FC<ImageModalProps> = ({
  currentImage,
  setCurrentImage,
  setOpenImageModal,
  setCurrentThumbnail,
  currentThumbnail,
  products,
  thumbnails,
}) => {
  const changeImageModal = (changePositive: boolean) => {
    const currentIndex = products.indexOf(currentImage);
    // const newIndex = changePositive ? currentIndex + 1 : currentIndex - 1
    console.log(currentIndex);
    if(changePositive && currentIndex === products.length - 1){
      setCurrentImage(products[0])
    }
    else if(changePositive){
      setCurrentImage(products[currentIndex + 1])
    }

    else if(!changePositive && currentIndex === 0){
      setCurrentImage(products[products.length - 1])
    }
    else {
      setCurrentImage(products[currentIndex - 1])
    }

    setCurrentImage(products[currentIndex]);
  };

  return (
    <div className="img-modal w-[25rem] h-10 z-100 activeElement">
      <CloseIcon className="hover:bg-orange cursor-pointer float-right my-2" />

      <div className="swipeCard relative">
        <div className="swipeCard__inner">
          <span
            className="change-btn | flex items-center justify-center btn-left absolute top-1/2 -left-5 h-10 w-10 rounded-full"
            // onClick={() => changeImageModal(true)}
              onClick={() => changeImageModal(false)}
          >
            <PreviousIcon />
          </span>

          <img
            src={currentImage}
            alt="product"
            className="swipeCard__img rounded-xl h-100"
          />

          <span className="change-btn btn-right | absolute h-10 w-10 flex items-center justify-center rounded-full top-1/2 -right-5">
            <NextIcon fill="blue" />
          </span>
        </div>
      </div>

      <div className="modal-thumbnails flex gap-x-4 my-8">
        {thumbnails.map((eachThumbnail, index) => (
          <div className="thumbnail" key={index}>
            <img
              src={eachThumbnail}
              alt="Thumbnail Image"
              className={` hover:opacity-70 ${
                eachThumbnail === currentThumbnail ? "opacty-30" : ""
              } cursor-pointer rounded-md`}
              onClick={() => {
                setOpenImageModal(true);
                setCurrentThumbnail(eachThumbnail);
                const currentIndex = thumbnails.indexOf(eachThumbnail);
                setCurrentImage(products[currentIndex]);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageModal;
