import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { StyledCategories } from "./styles/StyledCategories"
import { logout } from '../redux/action/userAction'

function Categories({display, user}){
    var dispatch = useDispatch()
    var history = useHistory()
    return(
        <StyledCategories display={display}>
            <ul>
                {user && <li><Link to="/DashBoard">DashBoard</Link></li>}
                <li><Link to="/products/hairBundle">HAIR BUNDLE</Link></li>
                <li><Link to="/products/wig">WIGS</Link></li>
                <li><Link to="/products/f/c">FRONTALS & CLOSURE</Link></li>
                <li><Link to="/products/hairCare">HAIR CARE</Link></li>
                <li><Link to="/products/beautyShop">BEAUTY SHOP</Link></li>
                {!user && <li><Link to="/signup">Sign Up</Link></li>}
            </ul>
            {/* <Link onClick={() => dispatch({type: 'LOGOUT'})}>Log Out</Link> */}
           {!user ? <Link to="sell">Sell</Link> : 
                <Link onClick={() => dispatch(logout(history))}>Log Out</Link>
           }
        </StyledCategories>
        
    )
}

export default Categories