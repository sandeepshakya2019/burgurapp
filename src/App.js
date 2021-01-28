import "./App.css";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import ContactData from "./Containers/Checkout/ContactData/ContactData";
import Orders from "./Containers/Orders/Orders";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={BurgerBuilder} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkout/contact-data" component={ContactData} />
          <Route exact path="/orders" component={Orders} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
