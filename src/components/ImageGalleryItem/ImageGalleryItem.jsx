import React, { Component } from 'react';
import {
  ImageGalleryItemBox,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { isModalOpen } = this.state;
    const { image, tags, largeImage } = this.props;

    return (
      <ImageGalleryItemBox>
        <ImageGalleryItemImage
          onClick={this.toggleModal}
          src={image}
          alt={tags}
        />
        {isModalOpen && <Modal onClose={this.toggleModal} image={largeImage} />}
      </ImageGalleryItemBox>
    );
  }
}

export default ImageGalleryItem;
