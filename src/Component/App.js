import React from 'react';
import axios from 'axios';
import SearchField from './SearchField';

class App extends React.Component {
	async onSubmitSearch(value) {
		const response = await axios.get(
			'https://api.unsplash.com/search/photos',
			{
				params: {
					query: value,
				},
				headers: {
					Authorization:
						'Client-ID z2u2axZQfvlfXrrLnLKfTA5eFSAdLvwts2ggAHPU_pg',
				},
			}
		);

		console.log(response.data.results);
	}

	render() {
		return <SearchField onSubmit={this.onSubmitSearch} />;
	}
}

export default App;
