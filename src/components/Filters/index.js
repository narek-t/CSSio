import React from 'react';
import {connect} from 'react-redux'
import './index.css'
import * as thunkFilters from './thunk/thunkFilters'
import * as Util from '../../globals/Util'
import FiltersGenerator from './components/FiltersGenerator/FiltersGenerator'

import Preview from '../Preview/Preview'
import FiltersPreview from './components/FiltersPreview/FiltersPreview'
import FiltersControls from './components/FiltersControls/FiltersControls'


import Code from '../Code/Code'

const Filters = (props) => {

	return (
		<main className="main-content one-page">
			<div className="container">
				<h1 className="main-content__title">Image filters</h1>
				<div className="box-shadow page-wrapper">
					<div className="page__inner">
						<div className="page__content">
							<div className="box-shadow__wrapper cf">
								<div className="box-shadow__aside">
									<FiltersGenerator
										filters={props.filters}
										onRangeChange={(value, index) => props.onRangeChangeHandler(value, index)}/>
								</div>

								<div className="preview__area-wrapper">

									<Preview controls={
										<FiltersControls
											resetFiltersStateHandler={props.resetFiltersHandler}/>
									}>
										<FiltersPreview style={props.stylesArray}/>
									</Preview>

								</div>
							</div>
						</div>

						<div className="box-shadow__code">
							<Code
								code={Util.transformFiltersStyles(props.stylesArray, 'forView')}
								codeForCopy={Util.transformFiltersStyles(props.stylesArray, 'forCopy')}/>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

const mapStateToProps = state => {
	return {
		filters: state.reducerFilter.filters,
		stylesArray: state.reducerFilter.stylesArray
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onRangeChangeHandler: (value, index) => {
			dispatch(thunkFilters.onRangeChange(value, index, 'value'))
		},
		resetFiltersHandler: () => {
			dispatch(thunkFilters.resetFilters())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)