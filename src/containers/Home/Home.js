import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity, Modal, ScrollView} from 'react-native';
import {connect} from "react-redux";

import ContactList from "../../components/ContactList/ContactList";
import {openModal, closeModal, fetchContacts} from "../../store/actions/contactAction";

const styles = StyleSheet.create({
    contactWrap: {
        flex: 2,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ad1283',
        marginVertical: 10,
        paddingHorizontal: 25,
        paddingVertical: 10

    },
    contactMenu: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginVertical: 25
    },
    buttonClose: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 25,
        backgroundColor: '#ad1283',
        width: '200',
        marginVertical: 25

    },
});


class Home extends React.Component {

    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        console.log(this.props.oneContact);
        let contacts = null;
        if (this.props.contacts) {
            contacts = this.props.contacts.map((contact, id) => (
                <TouchableOpacity key={contact.id} style={styles.contactWrap} onPress={() => this.props.openModal(id)}>
                    <Image style={{width: 60, height: 60, marginHorizontal: 10}} source={{uri: contact.image}}/>
                    <Text style={{fontSize: 20}}>{contact.contactName}</Text>
                </TouchableOpacity>
            ))
        }
        return (
            <ScrollView>
                <View style={styles.contactMenu}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 30}}>Contacts</Text>
                    {contacts}
                    <Modal visible={this.props.showModal}
                           onRequestClose={() => {
                               console.log('Modal closed');
                           }}
                    >
                        {this.props.oneContact ?
                            <ContactList
                                contactName={this.props.oneContact.contactName}
                                image={this.props.oneContact.image}
                                phone={this.props.oneContact.phone}
                                email={this.props.oneContact.email}>
                            </ContactList>
                            : null
                        }
                        <TouchableOpacity style={styles.buttonClose} onPress={this.props.closeModal}>
                            <Text style={{fontSize: 22}}>Close contact</Text>
                        </TouchableOpacity>
                    </Modal>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        oneContact: state.oneContact,
        showModal: state.showModal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: () => dispatch(fetchContacts()),
        openModal: (id) => dispatch(openModal(id)),
        closeModal: () => dispatch(closeModal())
    };

};


export default connect(mapStateToProps, mapDispatchToProps)(Home);