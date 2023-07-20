import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  handleClose = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;

    return (
      <div className={css.overlay} onClick={this.handleClose}>
        <div className={css.modal}>
          <button className={css.closeButton} onClick={this.props.onClose}>
            X
          </button>
          <img src={image.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
