import Slider from "react-slick";
import {Image} from 'cloudinary-react';
import { Price } from "./styles/StyledBody"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { addToSavedItem, removefromSavedItem } from '../redux/action/savedItemAction'
import { addToCart } from '../redux/action/cartAction'
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Item({item, user}){
    var dispatch = useDispatch()
    var history = useHistory()
    var quantity = 1
    return(
        <div className="card">
            <div>
                <span>
                    {
                    user ? user.savedItems.includes( item._id ) ? 
                    <BsHeartFill onClick={() => dispatch(removefromSavedItem(item._id))}/> : <BsHeart onClick={() => dispatch(addToSavedItem(item._id))}/> : 
                    <BsHeart/>
                    }
                </span>
                <Image cloudName="agbofrank" publicId={item.file_id} onClick={() => history.push(`/product/${item._id}`)}/>
                <Link onClick={() => dispatch(addToCart(item._id, item.price, item.category, quantity, item.file_id, item.name))} className="a">Add To Cart</Link>
            </div>
            <div>
                <small>{item.description}</small>
                <Price className="price">
                    <span style={{display: "none"}}>${item.price}</span>
                    <span>${item.price}</span>
                </Price> 
            </div>
        </div>
    )
}

export default function Carousel({items, user}) {
    const settings = {
      infinite: true,
      autoplay: true,
      margin: 50,
      autoplaySpeed: 5000,
      cssEase: "linear",
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1350,
          settings: {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: "linear",
            slidesToShow: 6,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 930,
          settings: {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: "linear",
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 720,
          settings: {
              infinite: true,
              autoplay: true,
              autoplaySpeed: 5000,
              cssEase: "linear",
              slidesToShow: 4,
              slidesToScroll: 1
          }
      },
        {
            breakpoint: 600,
            settings: {
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                cssEase: "linear",
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
              className: "center",
              centerMode: true,
              centerPadding: "60px",
              infinite: true,
              autoplay: true,
              autoplaySpeed: 5000,
              cssEase: "linear",
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
      ]
    };
    return (
      <div>
        <Slider {...settings} style={{height: "100%"}}>
            {
                items.map(item => (
                    <div key={item._id}>
                        <Item item={item} user={user}/>
                    </div>
                ))
            }
        </Slider>
      </div>
    );
}