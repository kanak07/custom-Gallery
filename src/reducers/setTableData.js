import { tableActionTypes } from "../constants/actionTypes";

const initialData = {
    HeaderData: [],
    ViewData: []
}

export const setTableData = (state = initialData, action) => {
    switch (action.type) {
        case tableActionTypes.reloadTable: return action.payload
        default: return state;
    }
}
