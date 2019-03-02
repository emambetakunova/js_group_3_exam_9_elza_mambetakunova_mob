import React from "react";
import {StyleSheet, View, Text, Image} from 'react-native';

const styles = StyleSheet.create({
    contactList: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ad1283',
        backgroundColor: '#fff',
        borderWidth: 1,
        margin: 25,
        padding: 5
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
                <Text style={styles.title}>Name: {this.props.contactName}</Text>
                <Image style={styles.image}
                       source={{uri: this.props.image}}/>
                <Text style={styles.title}>Phone: {this.props.phone}</Text>
                <Text style={styles.title}>e-mail: {this.props.email}</Text>
            </View>
        )
    }
}

export default ContactList;