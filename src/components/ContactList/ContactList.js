import React from "react";
import {StyleSheet, View, Text, Image} from 'react-native';

import {connect} from "react-redux";

const styles = StyleSheet.create({
    contactList: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
        padding: 15,
        flexDirection: 'row'
    },
    image: {
        marginVertical: 10,
        width: 80,
        height: 0
    },
    title: {
        fontSize: 22,
        margin: 25
    }
});

class ContactList extends React.Component {

    render() {
        return (
            <View style={styles.contactList}>
                <Text style={styles.title}>Name: {this.props.oneContactId.contactName}</Text>
                <Image style={styles.image}
                       source={{uri: this.props.oneContactId.image}}/>
                <Text style={styles.title}>Phone: {this.props.oneContactId.phone}</Text>
                <Text style={styles.title}>e-mail: {this.props.oneContactId.email}</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        oneContactId: state.oneContactId
    };
};

export default connect(mapStateToProps)(ContactList);