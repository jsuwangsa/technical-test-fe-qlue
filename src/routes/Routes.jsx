import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/main-page/MainPage";
import CustomerPage from "../pages/customer-page/CustomerPage";
import ProductPage from "../pages/product-page/ProductPage";
import MapPage from "../pages/map-page/MapPage";
import OrderPage from "../pages/order-page/OrderPage";
import SettingPage from "../pages/settings-page/SettingPage";
import ProfilePage from "../pages/profile-page/ProfilePage";
import WalletPage from "../pages/wallet-page/WalletPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={MainPage} />
        <Route path="/customers" component={CustomerPage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/maps" component={MapPage} />
        <Route path="/orders" component={OrderPage} />
        <Route path="/settings" component={SettingPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/wallet" component={WalletPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
