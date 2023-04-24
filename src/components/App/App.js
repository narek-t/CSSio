import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
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
import Columns from '../Columns/index'
import Transform from '../Transform/index'
import KenBurns from '../KenBurns/index'
import AnimatedGradient from '../AnimatedGradient/index'
import NotFountPage from '../404/index'

class App extends Component {
    render() {
        return (
            <Aux>
				<Header />
				<Switch>
					<Route path={`${process.env.PUBLIC_URL}/`} exact component={IndexPage}/>
					<Route path={`${process.env.PUBLIC_URL}/box-shadow`} component={BoxShadow}/>
					<Route path={`${process.env.PUBLIC_URL}/text-shadow`} component={TextShadow}/>
					<Route path={`${process.env.PUBLIC_URL}/filters`} component={Filters}/>
					<Route path={`${process.env.PUBLIC_URL}/image-to-base64`} component={ImageConverter}/>
					<Route path={`${process.env.PUBLIC_URL}/gradient`} component={Gradient}/>
					<Route path={`${process.env.PUBLIC_URL}/text-gradient`} component={TextGradient}/>
					<Route path={`${process.env.PUBLIC_URL}/flexbox`} component={Flexbox}/>
					<Route path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/>
					<Route path={`${process.env.PUBLIC_URL}/transform`} component={Transform}/>
					<Route path={`${process.env.PUBLIC_URL}/ken-burns`} component={KenBurns}/>
					<Route path={`${process.env.PUBLIC_URL}/gradient-animator`} component={AnimatedGradient}/>
					<Route component={NotFountPage} />
				</Switch>
				<Footer/>
            </Aux>
        );
    }
}

export default App;
