import React, {Component} from 'react';
import * as Util from '../../globals/Util'
import SelectBox from '../SelectBox/SelectBox'
import './AnimationPopup.css'

class AnimationPopup extends Component {

	state = {
		displayAnimationPopup: false,
	}

	handleClick = () => {
		this.setState({displayAnimationPopup: !this.state.displayAnimationPopup})
	};

	handleClose = () => {
		this.setState({displayAnimationPopup: false})
	};


	render() {
		return (
			<div className="animation-settings">
				<span className="animation-settings__title" onClick={this.handleClick}>Animation settings</span>

				{this.state.displayAnimationPopup ?
					<div className="animation-popover">
						<div className="animation-cover" onClick={this.handleClose}/>
						<div className="animation-inner">
							<div className="animation-inner-item">
								<span className="animation-inner-heading">duration</span>
								<div className="animation-inner-content with-unit">
									<input
										className="input"
										type="tel"
										value={this.props.duration}
										onChange={(event) => {
											return this.props.onAnimationSettingsChange(Util.checkNumberInput(event, 100000, 0, this.props.duration), 'duration')
										}}/>
								</div>
								<span className="animation-inner-unit">ms</span>
							</div>

							<div className="animation-inner-item">
								<span className="animation-inner-heading">timing-function</span>
								<div className="animation-inner-content">
									<SelectBox
										options={['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out']}
										onSelectChange={(event) => this.props.onAnimationSettingsChange(event.target.value, 'timingFunction')}
										value={this.props.timingFunction}/>
								</div>
							</div>

							<div className="animation-inner-item">
								<span className="animation-inner-heading">delay</span>
								<div className="animation-inner-content with-unit">
									<input
										className="input"
										type="tel"
										value={this.props.delay}
										onChange={(event) => {
											return this.props.onAnimationSettingsChange(Util.checkNumberInput(event, 100000, 0, this.props.delay), 'delay')
										}}/>
								</div>
								<span className="animation-inner-unit">ms</span>
							</div>

							<div className="animation-inner-item">
								<span className="animation-inner-heading">iteration-count</span>
								<div className="animation-inner-content with-checkbox">

									<input
										className="input"
										type="tel"
										value={this.props.iteration}
										disabled={this.props.infinite}
										onChange={(event) => {
											return this.props.onAnimationSettingsChange(Util.checkNumberInput(event, 100000, 1, this.props.iteration), 'iteration')
										}}/>
								</div>
								<label>
									<input type="checkbox" onChange={(event) => this.props.onAnimationSettingsChange(event.target.checked, 'infinite')}
										   checked={this.props.infinite}/>
									infinite
								</label>
							</div>

							<div className="animation-inner-item">
								<span className="animation-inner-heading">direction</span>
								<div className="animation-inner-content">
									<SelectBox
										options={['normal', 'reverse', 'alternate', 'alternate-reverse']}
										onSelectChange={(event) => this.props.onAnimationSettingsChange(event.target.value, 'direction')}
										value={this.props.direction}/>
								</div>
							</div>

							<div className="animation-inner-item">
								<span className="animation-inner-heading">fill-mode</span>
								<div className="animation-inner-content">
									<SelectBox
										options={['none', 'forwards', 'backwards', 'both']}
										onSelectChange={(event) => this.props.onAnimationSettingsChange(event.target.value, 'fillMode')}
										value={this.props.fillMode}/>
								</div>
							</div>

						</div>
					</div> : null}

			</div>
		)
	}
}

export default AnimationPopup