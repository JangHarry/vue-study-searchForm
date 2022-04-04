import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

function getList() {
	return instance.get('rest/v1/jobs/');
}

export { getList };
