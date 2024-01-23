import { useEffect, useState } from "react";

import img1 from "../images/image1.jpg";

import img2 from "../images/image2.jpg";

import img3 from "../images/image3.jpg";

import img5 from "../images/image5.jpg";

import img4 from "../images/image4.jpg";

function Car() {
  const [selectedImage, setSelectedImage] = useState(1,2,3,4,5);

  const [allImages, setAllImages] = useState([img1, img2, img3, img4 ,img5]);

  useEffect(() => {
    setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage < 4 ? selectedImage + 1 : 0
      );
    }, 4000);
  }, []);

  return (
    <div>
      <img
        style={{ width: "100%", height: "50vh" }}
        src={allImages[selectedImage]}
        alt=""
      />
      <br />
    </div>
  );
}

export default Car;
