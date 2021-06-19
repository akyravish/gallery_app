import React from 'react';

class SearchField extends React.Component {
	state = { value: '' };

	onSubmitForm = (e) => {
		e.preventDefault();

		this.props.onSubmit(this.state.value);
	};
	render() {
		return (
			<div className='ui container'>
				<form
					className='ui form'
					style={{ marginTop: '50px' }}
					onSubmit={this.onSubmitForm}
				>
					<div className='three fields'>
						<div className='field'></div>
						<div className='field'>
							<input
								type='text'
								placeholder='Search Image...'
								value={this.state.value}
								onChange={(e) =>
									this.setState({
										value: e.target.value,
									})
								}
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchField;
