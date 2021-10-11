import { Logo, Navs, Search, StyledHeader } from "./styles/StyledHeader"
import { FaSearch,FaRegUserCircle } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import { BsQuestionCircle, BsBoxArrowInLeft, BsBoxArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom"
import img from '../img/IMG-20210720-WA0096.jpg'

 
function Header({displayCategories, user }){
    var dispatch = useDispatch()
    return(
        <StyledHeader>
            <input type="checkbox" id="menu-bar"/>
            <label for="menu-bar">
                <div class="menu-bar" onClick={displayCategories}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </label>
            <Logo><h1>HEADIZ</h1></Logo>
            {
                user ?
                  ( 
                    <div>
                        {
                            user.isUser && (
                                <Search>
                                    <FaSearch style={{color: "grey"}}/>
                                    <input type="search" placeholder="Search Product and categories..."/>
                                </Search>
                            ) 
                        }
                        {
                            user.isUser ? (
                                <Navs>
                                    <li>
                                        <Link to="/" >          
                                            <FaRegUserCircle style={{color: "White", fontSize: "20px", marginRight: "10px"}}/>
                                            { user.firstName }
                                        </Link>
                                    </li>
                                    <li >
                                        <Link onClick={() => dispatch({type: 'LOGOUT'})}>
                                            <BsBoxArrowLeft style={{color: "White", fontSize: "20px", marginRight: "10px"}}/>
                                            Log Out
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cart" >
                                            <div className="cart-icon">
                                                <MdLocalGroceryStore style={{color: "White", fontSize: "20px", marginRight: "10px"}}/>
                                                <span>{ user.cart.length }</span>
                                            </div>
                                            Cart
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="active" to="sell">
                                            Sell
                                        </Link>
                                    </li>
                                </Navs>
                            ) :
                            (
                                <Navs style={{gap: "10px"}}>
                                    <img src={img} alt="profile pics" />
                                    <div style={{flexFlow: "column"}}>
                                        <p>
                                            <span>{user.firstName}</span>
                                            &nbsp;
                                            <span>{user.lastName}</span>
                                        </p>
                                        <p>Admin</p>
                                    </div>
                                </Navs>
                            ) 
                        }
                        
                    </div> 
                  )
                 : 
                 (
                    <div>
                        <Search>
                            <FaSearch style={{color: "grey"}}/>
                            <input type="search" placeholder="Search Product and categories..."/>
                        </Search>
                        <Navs>
                            <li>
                                <Link to="/contact">
                                    <BsQuestionCircle style={{color: "White", fontSize: "20px", marginRight: "10px"}}/>
                                    Help
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup">
                                    <FaRegUserCircle style={{color: "White", fontSize: "20px", marginRight: "10px"}}/>
                                    SignUp
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <BsBoxArrowInLeft style={{color: "White", fontSize: "20px", marginRight: "10px"}}/>
                                    Login
                                </Link>
                            </li>
                            <li >
                                <Link className="active" to="sell">
                                Sell
                                </Link>
                            </li>
                        </Navs>
                    </div>
                 )
                
            }
        </StyledHeader>
    )
}

export default Header
