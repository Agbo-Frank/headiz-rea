import { StyledBody, MainContent, SideBar, Breadcrums } from './styles/StyledBody'
import { BsPerson, BsBoxArrowRight, BsHeart } from "react-icons/bs";
import Menu from './Menu';


function UDashBoard(){
    return(
        <StyledBody>
            <SideBar>
                <Breadcrums>
                <li><a href="/">Homepage</a></li>
                <li><a href="account" className="active">Dashboard</a></li>
                </Breadcrums>
                <h2>Dashboard</h2>
                <Menu view='user'/>
            </SideBar>
            <MainContent>
                <div>
                    <p>
                        <strong>Hello Agbo Francis(not Francis.Agbo? <a href="#">Log out</a>)</strong>
                    </p>
                    <p>
                        you can view your recent orders, manage billing address and edit your password and account details.
                    </p>
                </div>

                <div className="dcards">
        <div className="dcard">
            <a href="account">
                <BsPerson style={{fontSize: "50px"}}/>
                <p>Account Details</p>
            </a>
        </div>
        <div className="dcard">
            <a href="order">
                <span className="material-icons">assignment</span>
                <p>Orders</p>
            </a>
        </div>
        <div className="dcard">
            <a href="cart">
              <BsHeart style={{fontSize: "50px"}}/>
              <p>Saved Items</p>
            </a>
        </div>
        <div className="dcard">
            <a href="#">   
              <BsBoxArrowRight style={{fontSize: "50px"}}/>
              <p>Logout</p>
            </a>
        </div>
    </div>
            </MainContent>
        </StyledBody>
    )
}

export default UDashBoard