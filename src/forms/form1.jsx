import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../actions/modalActions";
import { useEffect, useState } from "react";
import { getAllRecordsUrl } from "../constants/urls";
import { getData, addData, updateRecord } from "../ApiServices/apiServices";
import { getProducts } from "../actions/tableActions";

export default function Form1(props) {
    const getDetailsUrl = `${getAllRecordsUrl}/${props.selectedItem}`;
    const addDataUrl = `${getAllRecordsUrl}/add`;

    const dispatch = useDispatch();

    const initialFormData = {
        title: "",
        description: "",
        price: 0,
        rating: 0,
        stock: 0,
        brand: "",
        category: ""
    };

    const [FormData, setFormData] = useState(initialFormData);

    useEffect(() => {
        if (props.selectedItem != null)
            configureFormData();
    }, []);

    const configureFormData = async () => {
        const formData = await getData(getDetailsUrl);
        setFormData(formData);
        console.log(formData);
    }

    const onFieldValueChange = (e) => {
        console.log(e);
        setFormData({ ...FormData, [e.target.id]: e.target.value })
    }

    const onSaveClick = (e) => {
        if (props.selectedItem != null && props.selectedItem != undefined) {
            updateRecord(getDetailsUrl, FormData).then(async (resp) => {
                console.log(resp);
                const getProductAction = await getProducts();
                dispatch(getProductAction);
                dispatch(closeModal());
            }).catch(err => {
                console.log(err);
            });
        }
        else {
            addData(addDataUrl, FormData).then(async (resp) => {
                console.log(resp);
                const getProductAction = await getProducts();
                dispatch(getProductAction);
                dispatch(closeModal());
            }).catch(err => {
                console.log(err);
            });
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="">Title </label>
                <input type="text" id="title" onChange={(e) => onFieldValueChange(e)} name="Product Name" value={FormData.title} style={{ float: "right" }} />
            </div>
            <br />
            <div>
                <label htmlFor="">Description </label>
                <input type="text" id="description" onChange={(e) => onFieldValueChange(e)} name="Product Name" value={FormData.description} style={{ float: "right" }} />
            </div>
            <br />
            <div>
                <label htmlFor="">Price </label>
                <input type="number" id="price" onChange={(e) => onFieldValueChange(e)} name="Product Name" value={FormData.price} style={{ float: "right" }} />
            </div>
            <br />
            <div>
                <label htmlFor="">Rating </label>
                <input type="number" id="rating" onChange={(e) => onFieldValueChange(e)} name="Product Name" value={FormData.rating} style={{ float: "right" }} />
            </div>
            <br />
            <div>
                <label htmlFor="" >Stock </label>
                <input type="number" id="stock" onChange={(e) => onFieldValueChange(e)} name="Price" value={FormData.stock} style={{ float: "right" }} />
            </div>
            <br />
            <div>
                <label htmlFor="" >Brand </label>
                <input type="text" id="brand" onChange={(e) => onFieldValueChange(e)} name="Price" value={FormData.brand} style={{ float: "right" }} />
            </div>
            <br />
            <div>
                <label htmlFor="" >Category </label>
                <input type="text" id="category" onChange={(e) => onFieldValueChange(e)} name="Price" value={FormData.category} style={{ float: "right" }} />
            </div>
            <br />
            <div>
                <button onClick={() => dispatch(closeModal())}>Cancel</button>
                <button style={{ float: "right" }} onClick={(e)=>onSaveClick(e)}>Save</button>
            </div>
        </div>
    )
}