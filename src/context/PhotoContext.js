import { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export const useImageContext = () => {
  return useContext(ImageContext);
};

export const ImageProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [size, setSize] = useState(false);

  const openOverlay = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
    setSize(false)
  };

  return (
    <ImageContext.Provider value={{ selectedImage, openOverlay, closeOverlay, size, setSize }}>
      {children}
    </ImageContext.Provider>
  );
};