import React, { Component } from "react";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };

  //take a set of props and give back a new set of state
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorg.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  //arrow functions can be used safely with class properties (in this case: the state property)
  //if using a constructor we must bind the function to the component context:
  //this.handleIndexClick = this.handleIndexClick.bind(this)
  handleIndexClick = event => {
    this.setState({
      //puting the + before a string converts it to integer
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              className={index === active ? "active" : ""}
              src={photo}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
