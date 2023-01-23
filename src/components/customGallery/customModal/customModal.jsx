import React from "react";
import ReactModal from "react-modal";
import { useEffect } from "react";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function CustomModal(props) {

    useEffect(() => {
        console.log({ ...props });
    })

    return (
        <ReactModal isOpen={props.isModalOpen} style={customStyles}>
            <div>
                {props.modalForm}
            </div>
        </ReactModal>
    )
}