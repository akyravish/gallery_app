import React from 'react';
import unsplash from '../api/unsplash';
import SearchField from './SearchField';

class App extends React.Component {
	state = { imageArr: [] };
	onSubmitSearch = async (value) => {
		const response = await unsplash.get('/search/photos', {
			params: { query: value },
		});

		this.setState({ imageArr: response.data.results });
		console.log(this.state.imageArr.length);
	};

	render() {
		return <SearchField onSubmit={this.onSubmitSearch} />;
	}
}

export default App;
