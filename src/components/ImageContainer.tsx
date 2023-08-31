import { useState } from "react"
import { product1, product2, product3, product4, thumbnail1, thumbnail2, thumbnail3, thumbnail4 } from "../assets"
import ImageModal from "./subComponents/ImageModal"

const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]
const products = [product1, product2, product3, product4]

const ImageContainer = () => {
  const [currentImage, setCurrentImage] = useState<string>(product1)

  const [currentThumbnail, setCurrentThumbnail] = useState<string>(thumbnail1)

  const [openImageModal, setOpenImageModal] = useState<boolean>(false)

  return (
    <div className="image-container flex flex-col items-center mx-4 max-w-md">
      <div className="current-img ">
        <img src={currentImage} alt="Selected image" className="rounded-2xl" />
      </div>

      <div className="thumbnails flex gap-6 my-6">
        {
          thumbnails.map((eachThumbnail, index) => (
            <div className="thumbnail" key={index}>

              <img src={eachThumbnail} 
              alt="Thumbnail Image" 
              className={`eachThumbnail | ${eachThumbnail == currentThumbnail ? "opacity-30" : "" }  hover:opacity-60 cursor-pointer rounded-md`}
              
              onClick={()=> {
                setOpenImageModal(true)

                setCurrentThumbnail(eachThumbnail)
                // const currentIndex = thumbnails.indexOf(eachThumbnail)
                // setCurrentImage(products[currentIndex])
              }}
              />
            </div>
          ))
        }
        
      </div>

        {openImageModal && <ImageModal currentImage={currentImage} thumbnails={thumbnails} setCurrentImage={setCurrentImage} setOpenImageModal={setOpenImageModal} setCurrentThumbnail={setCurrentThumbnail} products={products} currentThumbnail={currentThumbnail}/>}

    </div>
  )
}

export default ImageContainer
