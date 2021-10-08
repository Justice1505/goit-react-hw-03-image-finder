import React from "react";
import Loader from "react-loader-spinner";

export default class App extends React.Component {
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="blue"
        height={50}
        width={100}
        timeout={4000}
      />
    );
  }
}
