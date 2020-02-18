import React, {Component} from "react";
import M from "materialize-css";
import Carousel1 from "../../pictures/Carousel1.jpg"
import Carousel2 from "../../pictures/Carousel2.jpg"
import Carousel3 from "../../pictures/Carousel3.jpg"
import Carousel4 from "../../pictures/Carousel4.jpg"
import Carousel5 from "../../pictures/Carousel5.jpg"

export default class Carousel extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems);
        });
    }

    render(){
        return (
            <div className="carousel ">
                <a className="carousel-item" href="#one!"><img src={Carousel1} alt="Image1" /></a>
                <a className="carousel-item" href="#two!"><img src={Carousel2} alt="Image2" /></a>
                <a className="carousel-item" href="#three!"><img src={Carousel3} alt="Image3" /></a>
                <a className="carousel-item" href="#four!"><img src={Carousel4} alt="Image4" /></a>
                <a className="carousel-item" href="#five!"><img src={Carousel5} alt="Image5" /></a>
            </div>
        );
    }
}