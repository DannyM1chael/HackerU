import React from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../../../../router/url';
import { updateCart, updateCartCounter, updateCartTotal } from '../../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

function CartButton(props) {
    const{ id } = props;

    const cartData = useSelector(store => store.app.cart)
    const dispatcher = useDispatch();

    const handleAddToCart = () =>{
        const addedProduct = cartData.filter(product => product.id == id);

        if(addedProduct[0]){
            dispatcher({
                type: updateCartCounter.getType(),
                payload:{id, quantity: addedProduct[0].quantity + 1},
            })
        }else{
            dispatcher({
                type: updateCart.getType(),
                payload: { id }
            })
        }
        dispatcher({
            type: updateCartTotal.getType(),
        })
    }

    return(
        <div className="bottom-area d-flex px-3">
            <div className="m-auto d-flex">
                <Link to={ URL.PRODUCT_SINGLE} className="add-to-cart d-flex justify-content-center align-items-center text-center">
                    <span><i className="ion-ios-menu"></i></span>
                </Link>
                <Link to='#' onClick= { handleAddToCart } className="buy-now d-flex justify-content-center align-items-center mx-1">
                    <span><i className="ion-ios-cart"></i></span>
                </Link>
            </div>
        </div>
    )
}

export default CartButton;