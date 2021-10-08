import React from "react";
import Loader from "react-loader-spinner";

export default class App extends React.Component {
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="black"
        height={70}
        width={100}
        timeout={3000}
      />
    );
  }
}
