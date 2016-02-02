const globalKeyPrefix = '@VersionOne:';
import {isApp} from './env';

export const save = (key, value) => {
	if (isApp) {
		const {AsyncStorage} = require('react-native');
		AsyncStorage.setItem(`${globalKeyPrefix}${key}`, JSON.stringify(value));
		return value;
	}
	throw new Error('Not Supported Error: Browser based storage is not supported');
};

export const get = (key) => {
	if (isApp) {
		const {AsyncStorage} = require('react-native');
		return AsyncStorage.getItem(`${globalKeyPrefix}${key}`);
	}
	throw new Error('Not Supported Error: Browser based storage is not supported');
};