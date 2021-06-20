import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
	console.log(window.innerHeight);
	const image = props.images.map(({ urls, id, alt_description }) => (
		<img
			className='ui medium rounded image'
			src={urls.regular}
			key={id}
			alt={alt_description}
		/>
	));
	return <div className='card'>{image}</div>;
};

export default ImageList;
