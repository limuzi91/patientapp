import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { compose, withProps } from "recompose";
import withEnlargeImage from "../HOC/withEnlargeImage";

class ImageListContent extends Component {
  render() {
    const { enlargeImg } = this.props;
    const picOne =
      "https://www.healthmeds.org/wp-content/uploads/2016/11/Bruised-pelvic.jpg";
    const picTwo = "http://www.abc.net.au/news/image/9090620-1x1-940x940.jpg";
    const picThree =
      "https://c1.staticflickr.com/1/211/456587007_b564e26e1b_z.jpg?zz=1";
    const picFour =
      "https://www.rd.com/wp-content/uploads/2017/05/01_bruise_Get-Rid-of-Bruises-Faster_362833799_wandee007-1024x683.jpg";
    const picFive =
      "https://www.healthline.com/hlcmsresource/images/766x415_Is_It_a_Blood_Clot_or_a_Bruise.jpg";
    return (
      <div>
        <div className="center-block" style={{ width: "100%" }}>
          <Carousel
            useKeyboardArrows
            autoPlay
            infiniteLoop
            transitionTime={1000}
          >
            <div>
              <img
                style={{ maxHeight: 350, width: "auto" }}
                src={picOne}
                alt=""
              />

              <p className="legend pointer" onClick={() => enlargeImg(picOne)}>
                <i className="fas fa-search-plus" />&nbsp;Enlarge
              </p>
            </div>
            <div>
              <img
                style={{ maxHeight: 350, width: "auto" }}
                src={picTwo}
                alt=""
              />
              <p className="legend pointer" onClick={() => enlargeImg(picTwo)}>
                <i className="fas fa-search-plus" />&nbsp;Enlarge
              </p>
            </div>
            <div>
              <img
                style={{ maxHeight: 350, width: "auto" }}
                src={picThree}
                alt=""
              />
              <p
                className="legend pointer"
                onClick={() => enlargeImg(picThree)}
              >
                <i className="fas fa-search-plus" />&nbsp;Enlarge
              </p>
            </div>

            <div>
              <img
                style={{ maxHeight: 350, width: "auto" }}
                src={picFour}
                alt=""
              />
              <p className="legend pointer" onClick={() => enlargeImg(picFour)}>
                <i className="fas fa-search-plus" />&nbsp;Enlarge
              </p>
            </div>
            <div>
              <img
                style={{ maxHeight: 350, width: "auto" }}
                src={picFive}
                alt=""
              />
              <p className="legend pointer" onClick={() => enlargeImg(picFive)}>
                <i className="fas fa-search-plus" />&nbsp;Enlarge
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
export default compose(
  withProps({ imageMinWidth: 300, dialogMaxWidth: 800, dialogWidth: "90%" }),
  withEnlargeImage
)(ImageListContent);
