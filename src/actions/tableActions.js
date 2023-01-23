import { tableActionTypes } from "../constants/actionTypes";
import { getAllRecordsUrl } from "../constants/urls";
import { getAllRecords } from "../ApiServices/apiServices";

export const getProducts = async () => {
    try {
        const data = await getAllRecords(getAllRecordsUrl);
        let hd = [];
        Object.keys(data[0]).map(k => {
            hd.push({
                defaultVisible: true,
                name: k,
                header: k
            });
        });
        return {
            type: tableActionTypes.reloadTable,
            payload: {
                HeaderData: hd,
                ViewData: data
            }
        };
    }
    catch (err) {
        console.log(err);
    }
}
