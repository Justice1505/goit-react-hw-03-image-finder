import React, { Component } from "react";
import Searchbar from "./Components/searchbar/Searchbar";
import { getPhoto } from "./services/ApiServices";
import ImageGallery from "./Components/imageGallery/ImageGallery";
import Modal from "./Components/modal/Modal";
import Button from "./Components/button/Button";
import Loader from "./Components/loader/Loader";
import "./App.css";

class App extends Component {
  state = {
    find: "",
    gallery: [],
    page: 1,
    total: 0,
    largeImageURL: {},
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.find !== this.state.find) {
      this.setState({
        gallery: [],
      });
      this.makeGallery();
      return;
    }
  }

  makeGallery = () => {
    const { find, page } = this.state;
    this.setState({ isLoading: true });

    getPhoto(find, page)
      .then(({ hits, total }) => {
        console.log("hit", hits);
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
          total,
        }));
        if (page !== 1) {
          this.scroll();
        }

        console.log("state", this.state.gallery);
        if (total === 0) {
          alert("There are no pictures");
        }
      })
      .catch((error) => alert(error.message))
      .finally(() => this.setState({ isLoading: false }));
  };

  onFormSubmit = (find) => {
    this.setState({ find, page: 1 });
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = () => {
    this.setState((prev) => ({
      showModal: !prev.showModal,
    }));
  };

  showBtnLoadMore = () => {
    return Math.ceil(this.state.total / 12) !== this.state.page - 1;
  };

  onPictureOpen = (largeImage) => {
    this.setState({ largeImageURL: largeImage });
    this.toggleModal();
  };

  render() {
    const { gallery, showModal, largeImageURL, isLoading, total } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />

        {console.log("render", gallery)}
        {gallery.length !== 0 && (
          <ImageGallery gallery={gallery} onPictureOpen={this.onPictureOpen} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal} largeImage={largeImageURL} />
        )}
        {isLoading && <Loader />}
        {this.showBtnLoadMore() && total !== 0 && (
          <Button getPhoto={this.makeGallery} />
        )}
      </>
    );
  }
}

export default App;
