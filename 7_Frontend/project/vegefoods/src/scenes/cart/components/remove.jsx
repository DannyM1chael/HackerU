import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart, updateCartTotal } from '../../../store/actions';
import { Link } from 'react-router-dom';

function Remove(props) {
    const { id } = props;
    
    const dispatcher = useDispatch();

    const handleDeleteFromCart = () => {
        dispatcher({
            type: deleteItemFromCart.getType(),
            payload: { id }
        });
        dispatcher({
            type: updateCartTotal.getType()
        })
    };

    return(
        <td className="product-remove">
            <Link to="#">
                <span className="ion-ios-close" onClick={ handleDeleteFromCart }></span>
            </Link>
        </td>
    )
}

export default Remove;