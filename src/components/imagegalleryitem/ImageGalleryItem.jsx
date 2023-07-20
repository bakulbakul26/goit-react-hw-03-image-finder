import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onItemClick(this.props.image);
  };

  render() {
    const { image } = this.props;

    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={image.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
          onClick={this.handleClick}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
