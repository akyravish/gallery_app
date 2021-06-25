import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
	const image = props.images.map((image) => (
		<ImageCard key={image.id} image={image} />
	));
	return <div className='card'>{image}</div>;
};

export default ImageList;
