import { combineReducers } from "redux";
import setModal from "./openCloseModal";
import { setTableData } from "./setTableData";

const rootReducer = combineReducers({
    setModal,
    setTableData
});


export default rootReducer;