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
import TextGradient from '../TextGradient/index'
import Flexbox from '../Flexbox/index'

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
				<Route path="/text-gradient" component={TextGradient}/>
				<Route path="/flexbox" component={Flexbox}/>
				<Footer/>
            </Aux>
        );
    }
}

export default App;
