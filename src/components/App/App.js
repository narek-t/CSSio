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
import ImageConverter from '../ImageConverter/index'
import Gradient from '../Gradient/index'

class App extends Component {
    render() {
        return (
            <Aux>
				<Header />
				<Route path="/" exact component={IndexPage}/>
				<Route path="/box-shadow" component={BoxShadow}/>
				<Route path="/text-shadow" component={TextShadow}/>
				<Route path="/filters" component={Filters}/>
				<Route path="/image-to-base64" component={ImageConverter}/>
				<Route path="/gradient" component={Gradient}/>
				<Footer/>
            </Aux>
        );
    }
}

export default App;
