import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import SectionLogin from "views/index-sections/SectionLogin";
import IndexProduct from "views/Productpage/IndexProduct";
// others



export default class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                {/* <Route path="/index" render={props => <Index {...props} />} /> */}
                <Route path="/" exact >
                    <Index />
                </Route>
                <Route
                    path="/nucleo-icons"
                    render={props => <NucleoIcons {...props} />}
                />
                <Route
                    path="/landing-page"
                    render={props => <LandingPage {...props} />}
                />
                <Route
                    path="/profile-page"
                    // render={props => <ProfilePage {...props} />}
                >
                    <ProfilePage />
                </Route>
                <Route
                    path="/register-page"
                   
                >
                    <RegisterPage />
                </Route>
                <Route path="/login-page">
                    <SectionLogin />
                </Route>
                <Route path= "/product-page">
                    <IndexProduct />
                </Route>
                <Redirect to="/index" />
                </Switch>
            </BrowserRouter>
        )
    }
}
