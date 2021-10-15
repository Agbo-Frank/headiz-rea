import { useHistory } from "react-router"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Breadcrums, MainContent, SideBar, StyledBody, Price } from "./styles/StyledBody"
import { getSavedItem, removefromSavedItem } from '../redux/action/savedItemAction'
import Menu from './Menu'
import { loadUser } from "../redux/action/userAction"
import Categories from './Categories';
import Header from './Header';
import { Link } from "react-router-dom"
import {Image} from 'cloudinary-react';



function SavedItem(){
    var [showCategory, setShowCategory] = useState('none')
    var [toggleMenu, setToggleMenu] = useState('')

    var history = useHistory()
    var dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())
        dispatch(getSavedItem(history))
    }, [dispatch, history])

    var items = useSelector(state => state.savedItem.items)
    var user = useSelector(state => state.user.user)
    var loading = useSelector(state => state.savedItem.loading)
    function proceed(bill){
        dispatch({type: 'UPDATE_BILL', payload: bill})
        history.push('/billing')
    }

    function handleClick(){
        if(showCategory === 'none'){
            setShowCategory('block')
            setToggleMenu(':checked')
        }
        else{
            setShowCategory('none')
            setToggleMenu('')
        }
    }

    return(
       <>
            <Header displayCategories={handleClick} toggle={ toggleMenu } user={user}/>
            <Categories display={showCategory} displayCategories={handleClick} user={user}/>
             {
                 loading ? 
                 <div>Loading...</div> :
                 <StyledBody>
                <SideBar>
                    <Breadcrums>
                        <li><Link to="/" >Homepage</Link></li>
                        <li><Link to="/cart"class="active">saved-item</Link></li>
                    </Breadcrums>
                    <h2>Saved Items</h2>
                    <Menu view='user' active='Saved item'/>
                </SideBar>
                <MainContent>
                <div class="saved-items">
                    {
                        items.map(item => (
                            <div class="saved-item" key={item._id}>
                                <div>
                                <Image cloudName="agbofrank" publicId={item.file_id}/>
                                    <div class="text">
                                    <strong>{item.name}</strong>
                                    <Price>
                                        <span><s>$70,000</s></span>
                                        <span>${item.price}</span>
                                    </Price>
                                    </div>
                                </div>
                                <div class="cart">
                                    <a onClick={() => proceed(item.price)}>Buy Now</a>
                                    <a onClick={() => dispatch(removefromSavedItem(item._id))}>Remove</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
                </MainContent>
            </StyledBody>}
       </>
    )
}

export default SavedItem