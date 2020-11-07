import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Home  from '../containers/Home'
import Product from '../containers/product'
import Sell from '../containers/Sell'


class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route path='/product' component={Product} />
                <Route path='/sell' component={Sell} />
                
            </Router>
        )
    }
}

export default AppRouter;