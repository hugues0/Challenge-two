import React, { Component, Suspense } from "react";
import "./App.css";
import Search from "./components/Search";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading:false,
    };
    this.onClickHandle = this.onClickHandle.bind(this);
  }
  async onClickHandle(albumId) {
    this.setState({ loading:true });
    console.log("--- albumId -->", albumId);

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    ).then((response) => response.json());
    console.log("----->", res);
    this.setState({ photos: res, loading: false });
  }
  render() {
    const { photos, loading } = this.state;
    return (
      <div style={{textAlign:"center"}}>
        <Search searchHandle={this.onClickHandle} />

        {( loading) ? (
          
          <Loader type="Oval" color="brown" height={300} width={300} />
        ) : (
          photos.map((photo) => (
            <div className="picture-container" key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <label>{photo.title}</label>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default App;
