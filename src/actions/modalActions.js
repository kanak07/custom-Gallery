import { modalActionTypes } from "../constants/actionTypes"

export const openModal = (_key) => {
    return {
        type: modalActionTypes.openModal,
        payload: {
            key: _key
        }
    }
}

export const closeModal = () => {
    return {
        type: modalActionTypes.closeModal
    }
}