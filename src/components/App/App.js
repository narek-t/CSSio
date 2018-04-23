import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux'
import './App.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'

//Pages
import IndexPage from './Index/Index'
import BoxShadow from '../BoxShadow/index'
import TextShadow from '../TextShadow/index'
import Filters from '../Filters/index'

class App extends Component {
    render() {
        return (
            <Aux>
				<Header />
				<Route path="/" exact component={IndexPage}/>
				<Route path="/box-shadow" component={BoxShadow}/>
				<Route path="/text-shadow" component={TextShadow}/>
				<Route path="/filters" component={Filters}/>
				<Footer/>
            </Aux>
        );
    }
}

export default App;
