import React from 'react';

const ImageList = (props) => {
	console.log(props.images);
	const image = props.images.map((x) => (
		<img src={x.urls.regular} key={x.id} alt={x.alt_description} />
	));
	return (
		<div className='ui centered card'>
			<div className='image'>{image}</div>
		</div>
	);
};

export default ImageList;
