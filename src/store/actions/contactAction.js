import axios from '../../../axios-contact';
import {CLOSE_MODAL, CONTACT_FAILURE, CONTACT_REQUEST, CONTACT_SUCCESS, OPEN_MODAL} from "./actionTypes";

export const contactRequest = () => ({type: CONTACT_REQUEST});

export const contactSuccess = response => ({type: CONTACT_SUCCESS, response});

export const contactFailure = error => ({type: CONTACT_FAILURE, error});

export const openModal = (id) => ({type: OPEN_MODAL, id});

export const closeModal = () => ({type: CLOSE_MODAL});

export const fetchContacts = () => {
    return dispatch => {
        dispatch(contactRequest());
        axios.get('/contacts.json').then(response => {
            const dishes = Object.keys(response.data).map(id => {
                return {...response.data[id], id}
            });
            dispatch(contactSuccess(dishes));
        }, error => {
            dispatch(contactFailure(error));
        });
    }
};
