import React from 'react';
import Row from './table_row'

function CartTable(props) {
    const { data=[] } = props;

    return(
        <table className="table">
            <thead className="thead-primary">
            <tr className="text-center">
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
                {
                    !!data.length && data.map((item, index) => <Row { ...item } />)
                }   
            </tbody>
        </table>
    )
}

export default CartTable;