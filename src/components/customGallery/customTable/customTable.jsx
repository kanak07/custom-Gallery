import React, { useEffect } from "react";

export default function CustomTable(props) {
    const hd = props.tableData.headerData;
    const vd = props.tableData.viewData;
    useEffect(() => {
        console.log({ ...props });
        // vd.data.data && vd.data.data.length > 0 && vd.data.data.map(item =>
        //     {hd.data && hd.data.length > 0 && hd.data.map(x => {
        //         if (x.defaultVisible){
        //             let v=x.name;
        //             console.log(item[v])
        //         }
        //     })
        // })
    });
    return (
        <div>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        {hd && hd.length > 0 && hd.map(x => {
                            if (x.defaultVisible)
                                return <th style={{ border: "1px solid black" }}>{x.header}</th>
                            return null
                        })}
                        {props.customActions && props.customActions.length > 0 &&
                            <th style={{ border: "1px solid black" }}>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {vd && vd.length > 0 && vd.map(item => <tr>
                        {hd && hd.length > 0 && hd.map(x => {
                            if (x.defaultVisible)
                                return <td style={{ border: "1px solid black" }}>{item[`${x.name}`]}</td>
                            return null
                        })}
                        {props.customActions && props.customActions.length > 0 &&
                            <td style={{ border: "1px solid black" }} itemID={item[`${props.keyAttributeName}`]}>{props.customActions.map(btns => btns)}</td>}
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}