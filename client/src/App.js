import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Billing from './Component/Billing';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import ForgetPassword from './Component/ForgetPassword';
import Home from './Component/Home';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import VSignUp from './Component/VSignUp';
import EditProduct from './Component/EditProduct';
import UploadProduct from './Component/UploadProduct';
import UDashBoard from './Component/UDashBoard';
import VendorProducts from './Component/VendorProducts';
import Product from './Component/Product';
import Products from './Component/Products';
import Cart from './Component/Cart';
import SavedItem from './Component/SavedItem';
import Settings from './Component/Setting';
import VDashboard from './Component/VDashboard';
import Order from './Component/Orders';
import Successfull from './Component/Successful';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
              <Home />
              <Footer/>
          </Route>
          <Route path="/DashBoard">
              <UDashBoard/>
          </Route>
          <Route path="/Upload">
              <UploadProduct/>
          </Route>
          <Route path="/Billing">
              <Billing/>
              <Footer/>
          </Route>
          <Route path="/cart">
              <Cart/>
              <Footer/>
          </Route>
          <Route path="/VendorProducts">
              <VendorProducts/>
          </Route>
          <Route exact path="/product/:id">
              <Product/>
              <Footer/>
          </Route>
          <Route path="/products/:category">
              <Products/>
              <Footer/>
          </Route>
          <Route path="/vendor">
              <VDashboard/>
          </Route>
          <Route path="/success">
              <Successfull/>
          </Route>
          <Route path="/order">
              <Order/>
          </Route>
          <Route path="/contact">
              <Contact/>
          </Route>
          <Route path="/saveditems">
              <SavedItem/>
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/signup">
              <SignUp/>
          </Route>
          <Route path="/sell">
              <VSignUp/>
          </Route>
          <Route path="/forgetpassword">
              <ForgetPassword/>
          </Route>
          <Route path="/editupload/:id">
              <EditProduct/>
          </Route>
          <Route path="/setting">
              <Settings/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
