import React, {Component} from "react";
import ImageGallery from 'react-image-gallery';
import M from "materialize-css";
import "./style.css";
import Carousel1 from "../../pictures/grass.jpg";
import Carousel2 from "../../pictures/forest.jpg";
import Carousel3 from "../../pictures/sheep.jpg";
import Carousel4 from "../../pictures/guy.jpg";

export default class Carousel extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems);
        });
    }

    render(){
        return (
            <div className="carousel carousel-slider">
                <div className="carousel-background">
                    
                </div>
                <div className="image1">
                <a className="carousel-item" href="#one!"><img src={Carousel1} alt="Image1" /></a>
                </div>
                {/* <div className="image2">
                <a className="carousel-item" href="#two!"><img src={Carousel2} alt="Image2" /></a>
                </div>
                <div className="image3">
                <a className="carousel-item" href="#three!"><img src={Carousel3} alt="Image3" /></a>
                </div>
                <div className="image4">
                <a className="carousel-item" href="#four!"><img src={Carousel4} alt="Image4" /></a>
                </div> */}
            </div>
        );
    }
}