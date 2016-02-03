import {fromEdge} from './layout';

export const textField = (height = 40) => ({
  height,
  margin: 7,
  ...fromEdge(),
  padding: 7
});

