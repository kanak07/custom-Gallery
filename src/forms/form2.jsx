import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../actions/modalActions";

export default function Form2(props) {
    const dispatch = useDispatch();
    return (
        <div>
            <label htmlFor="">Form 2</label>
            <div>
                <label htmlFor="">Product Name </label>
                <input type="text" name="Product Name" value={props.selectedItem} />
            </div>
            <br />
            <div>
                <label htmlFor="" >Price </label>
                <input type="number" name="Price" style={{ float: "right" }} />
            </div>
            <br />
            <div>
                <button onClick={() => dispatch(closeModal())}>Cancel</button>
                <button style={{ float: "right" }}>Save</button>
            </div>
        </div>
    )
}