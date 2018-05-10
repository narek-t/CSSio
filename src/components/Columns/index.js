import React, {Component} from 'react'
import Code from '../Code/Code'
import Preview from '../Preview/Preview'
import ColumnsPreview from './components/ColumnsPreview/ColumnsPreview'
import ColumnsControls from './components/ColumnsControls/ColumnsControls'
import * as Util from '../../globals/Util'
import './index.css'

class Columns extends Component {
	state = {
		columnCount: 3,
		columnGap: '50px',
		columnRuleWidth: 1,
		columnRuleStyle: 'double',
		columnRuleColor: '#139cda'
	}

	resetColumns = () => {
		this.setState({
			columnCount: 3,
			columnGap: '50px',
			columnRuleWidth: 1,
			columnRuleStyle: 'double',
			columnRuleColor: '#139cda'
		})
	}


	changeColumn = (value, type) => {
		this.setState({
			[type]: value
		})
	}

	render() {
		return (
			<main className="main-content one-page">
				<div className="container">
					<h1 className="main-content__title">CSS Columns</h1>
					<div className="box-shadow page-wrapper">
						<div className="page__inner">
							<div className="page__content">
								<div className="box-shadow__wrapper cf">
									<div className="preview__area-wrapper columns__area-wrapper">
										<Preview
											controls={
												<ColumnsControls
													count={this.state.columnCount}
													gap={this.state.columnGap}
													ruleWidth={this.state.columnRuleWidth}
													ruleStyle={this.state.columnRuleStyle}
													resetColumnsHandler={this.resetColumns}
													ruleColor={this.state.columnRuleColor}
													changeColumn={(value, type) => this.changeColumn(value, type)}
												/>
											}>
											<ColumnsPreview
												fontSize={this.state.fontSize}
												count={this.state.columnCount}
												gap={this.state.columnGap}
												ruleWidth={this.state.columnRuleWidth}
												ruleStyle={this.state.columnRuleStyle}
												ruleColor={this.state.columnRuleColor}
											/>
										</Preview>
									</div>
								</div>
							</div>
							<div className="box-shadow__code">
								<Code code={Util.transformColumnStyles(this.state)}/>
							</div>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

export default Columns