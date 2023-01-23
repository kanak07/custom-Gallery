import { modalActionTypes } from "../constants/actionTypes";

const initialModalState = {
    isModalOpen: false,
    selectedItemKey: null
}

const setModal = (state = initialModalState, action) => {
    switch (action.type) {
        case modalActionTypes.openModal: return {
            isModalOpen: true,
            selectedItemKey: action.payload.key
        };
        case modalActionTypes.closeModal: return {
            isModalOpen: false,
            selectedItemKey: null
        };
        default: return state;
    }
}


export default setModal