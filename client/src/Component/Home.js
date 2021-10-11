import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import Categories from './Categories';
import Header from './Header';
import { getProduct } from "../redux/action/productAction"
import { Price } from "./styles/StyledBody"
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { addToSavedItem, removefromSavedItem } from '../redux/action/savedItemAction'
import { addToCart } from '../redux/action/cartAction'
import {Image} from 'cloudinary-react';
import { loadUser } from "../redux/action/userAction"
import MySlider from "./MySlider"
import { useState } from 'react';
import Carousel from "./Carousel"


function Home(){
    var dispatch = useDispatch()
    var history = useHistory()
    var items = useSelector(state => state.product.items)
    var loading = useSelector(state => state.product.loading)
    var user = useSelector(state => state.user.user)
    var quantity = 1
    

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    var [showCategory, setShowCategory] = useState('none')
    function handleClick(){
        if(showCategory === 'none'){
            setShowCategory('block')
        }
        else(
            setShowCategory('none')
        )
    }

    return(
        <div>
            <Header displayCategories={handleClick} user={user}/>
            <Categories display={showCategory} user={user}/>
            <MySlider items={items}/>
            <div className="search">
                <span class="material-icons">search</span>
                <input type="search" placeholder="Search Product and categories..." />
            </div>
            <section>
            <div>
                <h3>Luxury human hair</h3>
                <p>See All &rarr;</p>
            </div>
            <div className="cards">
                {
                    items.map(item => (
                        <div className="card"  key={item._id}>
                            <div>
                                <span>
                                    {
                                    user ? user.savedItems.includes( item._id ) ? 
                                    <BsHeartFill onClick={() => dispatch(removefromSavedItem(item._id))}/> : <BsHeart onClick={() => dispatch(addToSavedItem(item._id))}/> : 
                                    <BsHeart/>
                                    }
                                </span>
                                <Image cloudName="agbofrank" publicId={item.file_id} onClick={() => history.push(`/product/${item._id}`)}/>
                                <a onClick={() => dispatch(addToCart(item._id, item.price, item.category, quantity, item.file_id, item.name))} className="a">Add To Cart</a>
                            </div>
                                <div>
                                <small>{item.description}</small>
                                <Price>
                                    <span><s>${item.price}</s></span>
                                    <span>${item.price}</span>
                                </Price> 
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="ripple">See More</button>
        </section>
        <div className="products">
            <div className="text">
                <strong>Hair Care Products</strong>
                <p>View All &rarr;</p>
            </div>
            <Carousel items={items} user={user}/>
        </div>
        <div className="products">
            <div className="text">
                <strong>Beauty Products</strong>
                <p>View All &rarr;</p>
            </div>
            <Carousel items={items} user={user}/>
        </div>
    </div>        
    )
}

export default Home