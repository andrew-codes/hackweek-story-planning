import React, {Component} from 'react-native';
import { Provider } from 'react-redux';

export default store => WrappedComponent => {
    return class extends Component {
        render() {
            return (
                <Provider store={store}>
                    <WrappedComponent />
                </Provider>
            );
        }
    };
};
