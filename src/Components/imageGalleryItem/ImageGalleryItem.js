import React from "react";
import PropTypes from "prop-types";
import s from "./Image.module.css";

const ImageGalleryItem = ({ image, largeImg, onPictureOpen }) => {
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() => {
        onPictureOpen(largeImg);
      }}
    >
      <img src={image} alt="#" className={s.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onPictureOpen: PropTypes.func.isRequired,
};
