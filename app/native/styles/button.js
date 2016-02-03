import {Palette} from './../../styles';
import {fromEdge} from './layout';

export const button = () =>({
  padding: 13,
  borderRadius: 5
});

export const primary = () => ({
  ...button(),
  backgroundColor: Palette.primaryAction,
  color: '#fff',
  margin: 7,
  ...fromEdge()
});

export const disabled = () => ({
  ...button(),
  backgroundColor: Palette.disable,
  color: '#fff',
  margin: 7,
  ...fromEdge()
});
