import IO from 'koa-socket';
import * as actionCreators from './ActionCreators';

export default ({app, socket}) => {
    return {app, socket};
};
