import {ERROR_MESSAGE} from '../utilities/constants';

const getCityDetails = async (name: string) => {
	try {
		const url = '/city/' + name;
		const request = {headers: {accept: 'application/json'}, method: 'GET'};
		const response = await fetch(url, request);
		const data = await response.json();
		return data;
	} catch (e) {
		alert('Error: ' + ERROR_MESSAGE);
	}
};

const getMatchingResults = async (searchString: string) => {
	try {
		const url = '/cities/' + searchString;
		const request = {headers: {accept: 'application/json'}, method: 'GET'};
		const response = await fetch(url, request);
		const data = await response.json();
		return data;
	} catch (e) {
		alert('Error: ' + ERROR_MESSAGE);
	}
};
export {getCityDetails, getMatchingResults};
