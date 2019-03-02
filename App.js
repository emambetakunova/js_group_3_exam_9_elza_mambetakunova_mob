import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './src/store/reducers/contactReducer'

import Home from "./src/containers/Home/Home";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Home/>
                </View>
            </Provider>
        );
    }
}