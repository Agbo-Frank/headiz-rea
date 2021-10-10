import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { useParams } from "react-router-dom"
import { getProduct } from "../redux/action/productAction"
import { Price } from "./styles/StyledBody"
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { addToSavedItem, removefromSavedItem } from '../redux/action/savedItemAction'
import { addToCart } from '../redux/action/cartAction'
import {Image} from 'cloudinary-react';

function Item({ items }){
    var dispatch = useDispatch()
    var history = useHistory()
    var user = useSelector(state => state.user.user)
    var quantity = 1
    return(
        <>
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
        </>
    )
}
export default function Products(){
    var { category } = useParams()

    var dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    var items = useSelector(state => state.product.items)
    var categories = items.filter(item => item.category === category)

    return(
        <div className="cards">
            <Item items={ categories } />
        </div>
    )
}
