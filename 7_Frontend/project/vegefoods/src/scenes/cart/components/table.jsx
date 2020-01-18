import React from 'react';
import Row from './table_row';
import EmptyCart from './empty';
import { useSelector } from 'react-redux';

function CartTable(props) {
    const total = useSelector((store) => store.app.total)
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
                    data.length > 0 ? data.map((product, index) => <Row key={ index }{ ...product } />)
                                    : <EmptyCart />
                } 
            </tbody>
        </table>
    )
}

export default CartTable;