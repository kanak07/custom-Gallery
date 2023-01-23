import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { headerData, viewData } from "../../constants/datas";
import { openModal } from "../../actions/modalActions";
import Form1 from "../../forms/form1";
import CustomGallery from "../customGallery/customGallery";
import Form2 from "../../forms/form2";
import { useEffect, useState } from "react";
import { getAllRecords } from "../../ApiServices/apiServices";
import { getAllRecordsUrl } from "../../constants/urls";
import { getProducts } from "../../actions/tableActions";

export default function ProductDashboard(props) {

    const selectedItem = useSelector(state => state.setModal.selectedItemKey);
    const tableData = useSelector(state => state.setTableData);
    const dispatch = useDispatch();

    const HeaderData = headerData;
    const ViewData = viewData;

    const initialData = {
        HeaderData: [],
        ViewData: []
    }
    const [data, setData] = useState(initialData);

    useEffect(() => {
        getTableData();
    }, []);

    const getTableData = async () => {
        const getProductAction = await getProducts();
        dispatch(getProductAction);
    }

    const configureTableData = async () => {
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
            setData({
                HeaderData: hd,
                ViewData: data
            });
            console.log(data);
        }
        catch (e) {
            console.log(e);
        }
    }


    const customActions = {
        editButton: <button onClick={(e) => dummyEditOnCLick(e.target.parentNode.getAttribute("itemID"))}>Edit</button>,
        deleteButton: <button>Delete</button>,
        cloneButton: <button>Clone</button>,
        toggleButton: <button>Edit</button>
    };

    const headerProps = {
        leftElements: [<button>Left</button>],
        centerElements: [<button>Center</button>],
        rightElements: [<button onClick={(e) => onAddClick()}>Add Product</button>]
    };

    const tableProps = {
        tableData: { headerData: tableData.HeaderData, viewData: tableData.ViewData },
        keyAttributeName: "id",
        customActions: [customActions.editButton, customActions.deleteButton]
    }

    const modalProps = {
        modalForm: <Form1 selectedItem={selectedItem} />,
        isModalOpen: useSelector(state => state.setModal.isModalOpen)
    }

    const modalProps2 = {
        modalForm: <Form2 selectedItem={selectedItem} />

    }

    function onAddClick() {
        dispatch(openModal());
    }

    function dummyEditOnCLick(key) {
        dispatch(openModal(key));
        console.log(selectedItem);
    }


    return (
        <>
            <CustomGallery tableProps={tableProps} headerProps={headerProps} modalProps={modalProps} />
        </>
    )

}