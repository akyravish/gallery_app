import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { span: 0 };

		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpan);
	}

	setSpan = () => {
		const height = this.imageRef.current.clientHeight;
		const span = Math.ceil(height / 10);

		this.setState({ span });
	};

	render() {
		const { alt_description, urls } = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.span}` }}>
				<img
					ref={this.imageRef}
					alt={alt_description}
					src={urls.regular}
				/>
			</div>
		);
	}
}

export default ImageCard;