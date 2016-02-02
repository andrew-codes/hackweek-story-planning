const globalKeyPrefix = '@VersionOne:';
import {isApp} from './env';
const mapKeysWithGlobalPrefix = keys => keys.map(key=>`${globalKeyPrefix}${key}`);

export const save = (key, value) => {
	if (isApp) {
		const {AsyncStorage} = require('react-native');
		return AsyncStorage.setItem(`${globalKeyPrefix}${key}`, value)
			.then(() => value);
	}
	throw new Error('Not Supported Error: Browser based storage is not supported');
};
export const saveAll = (obj) => {
	if (isApp) {
		const {AsyncStorage} = require('react-native');
		const values = Object.keys(obj).map(key => [`${globalKeyPrefix}${key}`, obj[key]]);
		return AsyncStorage.multiSet(values)
			.then(() => obj);
	}
	throw new Error('Not Supported Error: Browser based storage is not supported');
};

export const get = key => {
	if (isApp) {
		const {AsyncStorage} = require('react-native');
		return AsyncStorage.getItem(`${globalKeyPrefix}${key}`);
	}
	throw new Error('Not Supported Error: Browser based storage is not supported');
};
export const getAll = (...keys) => {
	if (isApp) {
		const {AsyncStorage} = require('react-native');
		return AsyncStorage.multiGet(mapKeysWithGlobalPrefix(keys))
			.then(kvs => {
				return kvs.reduce((output, kv) => {
					output[kv[0].replace(globalKeyPrefix, '')] = kv[1];
					return output;
				}, {});
			});
	}
	throw new Error('Not Supported Error: Browser based storage is not supported');
};

export const remove = key => {
	if (isApp) {
		const {AsyncStorage} = require('react-native');
		return AsyncStorage.removeItem(`${globalKeyPrefix}${key}`);
	}
	throw new Error('Not Supported Error: Browser based storage is not supported');
};

export const removeAll = (...keys) => {
	if (isApp) {
		const {AsyncStorage} = require('react-native');
		return AsyncStorage.multiRemove(mapKeysWithGlobalPrefix(keys));
	}
	throw new Error('Not Supported Error: Browser based storage is not supported');
};

export const clear = () =>{
	if (isApp) {
		const {AsyncStorage} = require('react-native');
		return AsyncStorage.clear();
	}
	throw new Error('Not Supported Error: Browser based storage is not supported');
}