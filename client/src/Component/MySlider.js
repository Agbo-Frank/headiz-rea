import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Image} from 'cloudinary-react';
import { Link } from "react-router-dom"
import { StyledSlide } from './styles/Slide'

function Slide({ item }){
    return(
        <StyledSlide>
            <div>
                <div className="slide-details">
                    <h1>
                        100% VIRGIN
                        HUMAN HAIR
                    </h1>
                    <p>{item.description} </p>
                    <Link to={`product/${item._id}`} className="link"> Shop Now &rarr;</Link>
                </div>
                <Image cloudName="agbofrank" publicId={item.file_id}/>
            </div>
        </StyledSlide>
    )
}

export default function MySlider({ items }) {
    const settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const styles = {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "60vh",
      backgroundColor: "var(--slide)",
    }
    return (
      <div>
        <Slider {...settings} style={...styles}>
          {
            items.map(item => (
              <div key={item._id}>
                  <Slide item={item} />
              </div>
            ))
          }
        </Slider>
      </div>
    );
}