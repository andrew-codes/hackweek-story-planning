const globalKeyPrefix = '@VersionOne:';

export const save = (key, value) => {
	if (!process.env.BROWSER) {
		const {AsyncStorage} = require('react-native');
		AsyncStorage.setItem(`${globalKeyPrefix}${key}`, JSON.stringify(value));
		return value;
	}
	throw new Error('Not Supported Error: Browser based storage is not supported');
};
