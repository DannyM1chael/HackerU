import React from 'react';

function EmptyCart(props) {
    
    return(
        <React.Fragment>
            <tr className="text-center">
                <td className="product-name">
                    <p>Your Cart is Empty</p>
                </td>
            </tr>
        </React.Fragment>    
        )
};

export default EmptyCart;