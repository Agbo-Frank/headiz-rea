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

function Indicators(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        padding: "5px", 
        borderRadius: "50%"}}
      onClick={onClick}
    />
  );
}


export default function MySlider({ items }) {
    const settings = {
      // customPaging: function(i) {
      //   return (
      //     <div style = {{
      //       cursor: "pointer",
      //       userSelect: "none",
      //       width: "10px",
      //       height: "10px",
      //       backgroundColor: "grey",
      //       borderRadius: "50%",
      //       marginRight: "2px",
      //     }}></div>
      //   );
      // },

      // dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 8000,
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <Indicators />,
      prevArrow: <Indicators />
    };
    return (
      <div>
        <Slider {...settings} className="headizSlide">
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