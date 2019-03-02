import {
    CLOSE_MODAL,
    CONTACT_FAILURE,
    CONTACT_REQUEST,
    CONTACT_SUCCESS, OPEN_MODAL
} from "../actions/actionTypes";

const initialState = {
    contacts: [],
    oneContact: null,
    oneContactId: null,
    showModal: false,
    loading: false,
    error: null
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_SUCCESS:
            return {
                ...state,
                contacts: action.response, loading: true
            };
        case CONTACT_REQUEST:
            return {
                ...state, loading: false
            };
        case CONTACT_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.error
            };
        case OPEN_MODAL:
            return {
                ...state,
                showModal: true,
                oneContact: state.contacts[action.id],
                oneContactId: action.id
            };
        case CLOSE_MODAL:
            return {
                ...state,
                showModal: false
            };
        default:
            return state;
    }
};
export default contactReducer;


