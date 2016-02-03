import * as Styles from './../../styles';

export const verticalContainer = () => ({
	flex: 1,
	flexDirection: 'column',
	flexWrap: 'wrap',
	justifyContent: 'center',
	alignItems: 'stretch',
	alignSelf: 'stretch'
});

export const horizontalContainer = () => ({
	flex: 1,
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'center',
	alignItems: 'center',
	alignSelf: 'stretch'
});

export const fromEdge = (pixels = 13) => ({
	marginLeft: pixels,
	marginRight: pixels
});

export const padEdge = (pixels = 13) => ({
	paddingLeft: pixels,
	paddingRight: pixels
});

export const align = (x, y) => ({
	justifyContent: y,
	alignSelf: 'stretch',
	alignItems: x
});

export const textField = (height = 40) => ({
	height,
	margin: 7,
	...fromEdge(),
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
	margin: 7,
	...fromEdge()
});