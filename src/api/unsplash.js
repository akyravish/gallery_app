import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID z2u2axZQfvlfXrrLnLKfTA5eFSAdLvwts2ggAHPU_pg',
	},
});
