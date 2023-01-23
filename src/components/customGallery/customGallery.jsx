import React from "react";
import CustomHeader from "./customHeader/customHeader";
import CustomModal from "./customModal/customModal";
import CustomTable from "./customTable/customTable";

export default function CustomGallery(props) {
    return (
        <>
            <CustomHeader {...props.headerProps} />
            <CustomTable {...props.tableProps} />
            <CustomModal {...props.modalProps} />
        </>
    )
}