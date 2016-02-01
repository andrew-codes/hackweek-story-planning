import * as Styles from './../../styles';

export const container = () => ({
	flex: 1,
	flexWrap: 'wrap',
	justifyContent: 'center',
	alignItems: 'center'
});

export const align = (x, y) => ({
	justifyContent: y,
	alignSelf: 'stretch',
	alignItems: x
});

export const textField = (height = 40) => ({
	height,
	margin: 7,
	marginLeft: 13,
	marginRight: 13,
	padding: 7
});
export const button = () =>({
	padding: 13,
	borderRadius: 5
});

export const primaryButton = () => ({
	...button(),
	backgroundColor: Styles.Palette.primary,
	color: '#fff',
	margin: 7
});