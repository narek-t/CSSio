import React, {Component} from 'react';
import './index.css'
import Code from '../Code/Code'
import * as Util from '../../globals/Util'
import Aux from '../../hoc/Aux/Aux'

class ImageConverter extends Component {

	state = {
		imageUrl: '',
		fileSize: '',
		dataUrlSize: ''
	}

	handleImageChange = (e) => {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		if (file) {
			reader.readAsDataURL(file)
		}
		reader.onloadend = () => {
			this.setState({
				fileSize: file.size,
				imageUrl: reader.result,
				dataUrlSize: reader.result.length
			});
		}
	}

	render() {
		let imageUrl = this.state.imageUrl;
		let imagePreview = null;
		if (imageUrl) {
			imagePreview = (<img src={imageUrl} alt=""/>);
		} else {
			imagePreview = (
				<div>

				</div>
			);
		}
		return (
			<main className="main-content one-page">
				<div className="container">
					<h1 className="main-content__title">Image to base64 data-URI converter</h1>
					<div className="page-wrapper">
						<div className="page__inner">
							<div className="page__content">
								<div className="image-converter">
									<div className="image-converter__center">
										<label className="file__input-label button is-primary add-button">
											Upload your image
											<input className="file__input"
												   type="file"
												   onChange={(e) => this.handleImageChange(e)}/>
										</label>
									</div>
									<div className="image-converter__image-container">
										{imagePreview}
										<span className="text-shadow-note">
											<span>Your images will not be saved anywhere</span>
										</span>
									</div>
									{this.state.imageUrl ? (
										<div className="image-converter__info">
											<ul className="sizes">
												<li>Original image size: <span>{ Util.fileSizes(this.state.fileSize) }</span></li>
												<li>Converted image size: <span>{Util.fileSizes(this.state.dataUrlSize)}</span></li>
											</ul>
										</div>
									) : null}
								</div>
							</div>
							{this.state.imageUrl ? (
								<Aux>
									<div className="image-converter__code plain">
										<span className='code-variant'>Plain Data-URI</span>
										<Code code={this.state.imageUrl} nowrap={true}/>
									</div>
									<div className="image-converter__code for-css">
										<span className='code-variant'>For CSS backgrounds</span>
										<Code code={'url("' + this.state.imageUrl + '")'} nowrap={true}/>
									</div>
								</Aux>
							) : null}
						</div>
					</div>
				</div>
			</main>
		)
	}
}


export default ImageConverter