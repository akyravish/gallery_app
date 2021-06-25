import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchField from './SearchField';

class App extends React.Component {
	state = { imageArr: [] };
	onSubmitSearch = async (value) => {
		const response = await unsplash.get('/search/photos', {
			params: { query: value, per_page: 30 },
		});

		this.setState({ imageArr: response.data.results });
	};

	render() {
		return (
			<div className='ui container'>
				<SearchField onSubmit={this.onSubmitSearch} />
				<ImageList images={this.state.imageArr} />
			</div>
		);
	}
}

export default App;
