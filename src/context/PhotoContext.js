import { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export const useImageContext = () => {
  return useContext(ImageContext);
};

export const ImageProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openOverlay = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <ImageContext.Provider value={{ selectedImage, openOverlay, closeOverlay }}>
      {children}
    </ImageContext.Provider>
  );
};