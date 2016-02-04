import {Palette} from './../../styles';
import {fromEdge} from './layout';

export const textField = (height = 40, borderWidth=1, borderColor: Palette.darkGray) => ({
  height,
  margin: 7,
  ...fromEdge(),
  padding: 7,
  borderWidth: borderWidth,
  borderColor: borderColor
});

