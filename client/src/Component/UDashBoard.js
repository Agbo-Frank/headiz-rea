import { StyledBody, MainContent, SideBar, Breadcrums } from './styles/StyledBody'
import { BsPerson, BsBoxArrowRight, BsHeart } from "react-icons/bs";
import { MdLocalGroceryStore } from "react-icons/md";
import Menu from './Menu';
import { loadUser } from "../redux/action/userAction"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from 'react';
import Categories from './Categories';
import Header from './Header';
import { Link } from "react-router-dom"


function UDashBoard(){
    var dispatch = useDispatch()
    var [showCategory, setShowCategory] = useState('none')

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    var user = useSelector(state => state.user.user)

    function handleClick(){
        if(showCategory === 'none'){
            setShowCategory('block')
        }
        else(
            setShowCategory('none')
        )
    }
    return(
        <>
           <Header displayCategories={handleClick} user={user}/>
            <Categories display={showCategory} user={user}/>
            <StyledBody>
            <SideBar>
                <Breadcrums>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="" className="active">Dashboard</Link></li>
                </Breadcrums>
                <h2>Dashboard</h2>
                <Menu view='user' active='dashboard'/>
            </SideBar>
            <MainContent>
                <div>
                    <p>
                        <strong>Hello Agbo Francis(not Francis.Agbo?) <a href="#">Log out</a></strong>
                    </p>
                    <p>
                        you can view your recent orders, manage billing address and edit your password and account details.
                    </p>
                </div>

                <div className="dcards">
                    <div className="dcard">
                        <Link href="account">
                            <BsPerson style={{fontSize: "50px"}}/>
                            <p>Account Details</p>
                        </Link>
                    </div>
                    <div className="dcard">
                        <Link to="/order">
                            <span className="material-icons">assignment</span>
                            <p>Orders</p>
                        </Link>
                    </div>
                    <div className="dcard">
                        <Link to="/saveditems">
                        <BsHeart style={{fontSize: "50px"}}/>
                        <p>Saved Items</p>
                        </Link>
                    </div>
                    <div className="dcard">
                        <Link to="/cart">   
                        <MdLocalGroceryStore style={{fontSize: "50px"}}/>
                        <p>Cart</p>
                        </Link>
                    </div>
                </div>
            </MainContent>
        </StyledBody>
        </>
    )
}

export default UDashBoard