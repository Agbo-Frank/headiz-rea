import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { StyledCategories } from "./styles/StyledCategories"
import { logout } from '../redux/action/userAction'

function Categories({display, displayCategories, user}){
    var dispatch = useDispatch()
    var history = useHistory()
    return(
        <StyledCategories display={display}>
            <ul>
                {user && <li onClick = {displayCategories}><Link to="/DashBoard">DASHBOARD</Link></li>}
                <li onClick = {displayCategories}><Link to="/products/hairBundle">HAIR BUNDLE</Link></li>
                <li onClick = {displayCategories}><Link to="/products/wig">WIGS</Link></li>
                <li onClick = {displayCategories}><Link to="/products/f/c">FRONTALS & CLOSURE</Link></li>
                <li onClick = {displayCategories}><Link to="/products/hairCare">HAIR CARE</Link></li>
                <li onClick = {displayCategories}><Link to="/products/beautyShop">BEAUTY SHOP</Link></li>
                {!user && <li><Link to="/signup">Sign Up</Link></li>}
            </ul>
           {!user ? <Link to="sell">Sell</Link> : 
                <Link onClick={() => dispatch(logout(history))}>Log Out</Link>
           }
        </StyledCategories>
        
    )
}

export default Categories