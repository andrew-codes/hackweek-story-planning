import * as retrospectiveActionCreators from './features/Retrospective';

const actionCreators = [].concat(Object.values(retrospectiveActionCreators));

export default actionCreators.reduce((output, creator) => {
  output[creator.actionType] = creator.default;
  return output;
}, {});
